import * as fs from 'fs'
import * as os from 'os'

import { Command, flags } from '@oclif/command'

interface IObject {
  front: string,
  back: string
}

const homeDir = os.homedir()
const rootPath = `${homeDir}/.ssh/`
const fileToPasteTo = `${homeDir}/.ssh/example2`

export default class Selectenv extends Command {
  /*
   * Command configuration 
   */
  static description = 'Pass `front` or `back` to this command to switch environments'

  static examples = [
    `$ rcli selectenv -e [front | back]
    [Frontend | Backend] configuration loaded!`,
  ]

  static flags = {
    help: flags.help({ char: 'h' }),
    // flag with a value (-e, --env=VALUE)
    name: flags.string({ char: 'e', description: 'name of the environment you want to switch to' }),
  }

  static args = [{ name: 'front' }]

  /*
   * Entry point
   */
  async run() {
    const { flags } = this.parse(Selectenv)
    const name: any = flags.name
    this.selectEnvironment(name)
  }

  /*
   * Rest of methods
   */
  setEnvironment(option: string) {
    const path = `${rootPath}${option}`

    if (!this.fileExists(path)) return this.log(`${path} does not exist`)

    fs.copyFileSync(`${path}`, `${fileToPasteTo}`)
  }

  selectEnvironment(option: (keyof IObject)) {
    if (!option) return this.log('You need to pass an environment to switch')
    
    const options: IObject = {
      front: 'config.frontend',
      back: 'config.backend'
    }
    
    if (options.hasOwnProperty(option)) {
      this.setEnvironment(options[option])
    } else {
      return this.log("The option you passed doesn't exist")
    }
  }

  fileExists(path: string) {
    try  {
      return fs.statSync(path).isFile()
    }
    catch (e) {
      if (e.code == 'ENOENT') {
        return false
      }

      throw e // something else went wrong, we don't have rights, ...
    }
  }
}
