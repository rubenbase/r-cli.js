r-cli 
=====

#### ®️-CLI to automate personal stuff ✅

Automates :
- [x] Enviroment Changes + Bastion SSH configurations
- [ ] Messages to my family and friends via Whatsapp
- [ ] Creation of a new project
  - Automatically buys the domain, creates the repositories in your github account and creates boilerplates for the landing page, the admin panel, the application and the backend and upload all of that into Amazon Web Services.
___


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/rubenbase/r-cli?branch=master&svg=true)](https://ci.appveyor.com/project/rubenbase/r-cli/branch/master)
[![Codecov](https://codecov.io/gh/rubenbase/r-cli/branch/master/graph/badge.svg)](https://codecov.io/gh/rubenbase/r-cli)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g r-cli
$ rcli COMMAND
running command...
$ rcli (-v|--version|version)
r-cli/0.0.0 darwin-x64 node-v10.13.0
$ rcli --help [COMMAND]
USAGE
  $ rcli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`rcli hello [FILE]`](#rcli-hello-file)
* [`rcli help [COMMAND]`](#rcli-help-command)
* [`rcli selectenv [FRONT]`](#rcli-selectenv-front)

## `rcli hello [FILE]`

Says hello

```
USAGE
  $ rcli hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ rcli hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/rubenbase/r-cli/blob/v0.0.0/src/commands/hello.ts)_

## `rcli help [COMMAND]`

display help for rcli

```
USAGE
  $ rcli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src/commands/help.ts)_

## `rcli selectenv [FRONT]`

Pass `front` or `back` to this command to switch environments

```
USAGE
  $ rcli selectenv [FRONT]

OPTIONS
  -e, --name=name  name of the environment you want to switch to
  -h, --help       show CLI help

EXAMPLE
  $ rcli selectenv -e [front | back]
       [Frontend | Backend] configuration loaded!
```

_See code: [src/commands/selectenv.ts](https://github.com/rubenbase/r-cli/blob/v0.0.0/src/commands/selectenv.ts)_
<!-- commandsstop -->
