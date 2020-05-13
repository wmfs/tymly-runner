'use strict'
const tymly = require('@wmfs/tymly')
const config = require('config')
const process = require('process')

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason)
  // application specific logging, throwing an error, or other logic here
})

console.log('Tymly Runner')
console.log('-------------')

// Add an admin user if defined via $TYMLY_ADMIN_USERID
let adminUserId = confVar('admin', 'userId', 'TYMLY_ADMIN_USERID')

if (adminUserId) {
  // UserID might be double-quoted, so remove if that's the case
  if (adminUserId[0] === '"' && adminUserId[adminUserId.length - 1] === '"') {
    adminUserId = adminUserId.substring(1, adminUserId.length - 1)
  }
  config.config.defaultUsers = {}
  let roles = confVar('admin', 'roles', 'TYMLY_ADMIN_ROLES')
  if (!Array.isArray(roles)) {
    roles = roles.split(',')
  }
  config.config.defaultUsers[adminUserId] = roles
}

console.log('defaultUsers:')
console.log(JSON.stringify(config.config.defaultUsers, null, 2))

tymly.boot(
  config,
  function (err, services) {
    if (err) {
      console.error(err)
      console.error('There were errors.')
    } else {
      startServer(services, () => {
        console.log('Done booting.')
      })
    }
  }
) // tymly.boot

function startServer (services, callback) {
  if (!services.server) {
    return callback()
  }

  const server = services.server
  const jwtAuth = services.jwtAuth

  const { serverPort, serverHost } = config.config

  server.listen(serverPort, serverHost, function () {
    console.log('\n')

    const adminToken = jwtAuth.generateToken(adminUserId)

    const { address, port } = server.app.server.address()

    console.log(`Server listening on host: ${address} port: ${port}`)
    console.log(`Admin token: ${adminToken}`)

    callback()
  })
} // startServer

function confVar (section, confName, envVar) {
  if (config.config[section] && config.config[section][confName]) {
    return config.config[section][confName]
  }

  return process.env[envVar]
} // confVar
