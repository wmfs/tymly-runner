# Tymly-runner
[![Tymly Package](https://img.shields.io/badge/tymly-package-blue.svg)](https://tymly.io/)
[![npm (scoped)](https://img.shields.io/npm/v/@wmfs/tymly-runner.svg)](https://www.npmjs.com/package/@wmfs/tymly-runner)
[![CircleCI](https://circleci.com/gh/wmfs/tymly-runner.svg?style=svg)](https://circleci.com/gh/wmfs/tymly-runner)
[![codecov](https://codecov.io/gh/wmfs/tymly-runner/branch/master/graph/badge.svg)](https://codecov.io/gh/wmfs/tymly-runner)
[![CodeFactor](https://www.codefactor.io/repository/github/wmfs/tymly-runner/badge)](https://www.codefactor.io/repository/github/wmfs/tymly-runner)
[![Dependabot badge](https://img.shields.io/badge/Dependabot-active-brightgreen.svg)](https://dependabot.com/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/wmfs/tymly/blob/master/packages/pg-concat/LICENSE)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fwmfs%2Ftymly-runner.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fwmfs%2Ftymly-runner?ref=badge_shield)


> A configurable environment for running [Tymly](http://www.tymlyjs.io) instances.

## <a name="tests"></a>Tests
```bash
$ npm test
```

## Environment Variables

Before starting, please set following environment variables:

| Variable Name          | Description |
| ---------------------- | ----------- |
| PG_CONNECTION_STRING   |  Connection string pointing to a specific PostgreSQL database, e.g. `PG_CONNECTION_STRING=postgres://postgres:postgres@localhost:5432/my_test_db`. |
| TYMLY_AUTH_SECRET     |  A secret or private key used when [signing JWT Tokens](https://www.npmjs.com/package/jsonwebtoken#jwtsignpayload-secretorprivatekey-options-callback). For example `TYMLY_AUTH_SECRET=Shh!`. |
| TYMLY_AUTH_AUDIENCE   |  Specifies an audience (`aud`) alongside   `TYMLY_AUTH_SECRET` when signing a JWT, e.g. `TYMLY_AUTH_AUDIENCE="I am the audience!".`
| TYMLY_PLUGINS_PATH    |  Plugin directories to use at boot-time, `;` delimited if multiple sources. For example: `TYMLY_PLUGINS_PATH="/plugins/production/*-plugin;/plugins/development/*-plugin"`. |
| TYMLY_BLUEPRINTS_PATH |  Exactly the same as `TYMLY_PLUGINS_PATH`, but used to specify the location(s) of blueprints to load at boot time, e.g. `TYMLY_BLUEPRINTS_PATH="/blueprints/production/*-blueprint;/plugins/development/*-blueprint"`. |
| TYMLY_EXCLUDED_PLUGIN_NAMES | A `;` delimited string of plugin names ('i.e. the top-level directory name) to exclude from the boot process.`|
| TYMLY_EXCLUDED_BLUEPRINT_NAMES | A `;` delimited string of blueprint names ('i.e. the top-level directory name) to exclude from the boot process.` |
| TYMLY_ADMIN_USERID    |  Identifies a username (that will be decoded from incoming JWT tokens) which should be treated as an administrator. For example: `TYMLY_ADMIN_USERID=bigboss`.|
| TYMLY_ADMIN_ROLES     |  Indicates which roles should be automatically granted to the user identified by `TYMLY_ADMIN_USERID` (delimited by `,`). For example: `TYMLY_ADMIN_ROLES=tymly_admin`. |
| DEBUG                  |  We use the [debug](https://www.npmjs.com/package/debug) package, where Tymly plugin and state names equate to debug modules, for example: `DEBUG=tymly,processingCscFiles,-express`.


## Starting

```bash
$ npm run start
```

## <a name="license"></a>License

[MIT](https://github.com/wmfs/tymly-runner/blob/master/LICENSE)


[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fwmfs%2Ftymly-runner.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fwmfs%2Ftymly-runner?ref=badge_large)