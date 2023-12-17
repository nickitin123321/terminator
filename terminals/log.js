import commands from '../commands/index.js'
const { connectSsh, log } = commands
import Terminator from '../index.js'

(new Terminator(connectSsh, log, { endProcessWrite: false })).exec()