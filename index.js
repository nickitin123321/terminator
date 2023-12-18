import 'dotenv/config'
import { exec, spawn } from 'node:child_process'
const BASH_NAMESPACE =`\n#!/bin/bash\n`;

export default class Terminator {
  /**
   * @param {string[]} [commands]
   * @param {string[]} [onSshCommands]
   * @param {{endProcessWrite: boolean}} [options]
   */
  constructor(commands, onSshCommands, options = {}){
    this.command = commands.join(' && ')
    this.remoteCommand = BASH_NAMESPACE + onSshCommands.join(' && ')
    this.endProcessWrite = options.endProcessWrite ?? true
    this.process = null
  }

  exec(){
    this.process = exec(this.command , (err, out, stderr) => {
      console.log(err ?? out ?? stderr)
    })
    this.subscribe()
  }

  spawn(){
    this.process = spawn(this.command)
    this.subscribe()
  }

  subscribe(){
    const { process } = this
    process.stdout.on('data', (data) => {
      if(this.remoteCommand){
        process.stdin.write(this.remoteCommand + '\n', (err) => {
          err && console.error(err)
        })
        console.log(data)
        this.endProcessWrite && process.stdin.end();
      }
    });
    process.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
    });

    process.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });
    process.on('error', (code) => {
      console.error(`child process exited with error ${code}`);
    });
  }

  kill(){
    this.process.kill()
  }
}
