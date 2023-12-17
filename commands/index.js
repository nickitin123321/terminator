import git from './git.js'
import bash from './bash.js'
import ssh from './ssh.js'
import { connectSsh, deploy, log } from './schemas/index.js'

export default {
  git,
  ssh,
  bash,
  connectSsh,
  deploy,
  log
}
