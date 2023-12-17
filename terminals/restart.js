import commands from '../commands/index.js'
const { connectSsh, update } = commands
import Terminator from '../index.js'

(new Terminator(connectSsh, update)).exec()