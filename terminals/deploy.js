import commands from '../commands/index.js'
const { connectSsh, deploy } = commands
import Terminator from '../index.js'

(new Terminator(connectSsh, deploy)).exec()