import commands from '../commands/index.js'
import bots from './bots.schema.js'
const { connectSsh, restartFn } = commands
import Terminator from '../index.js'

(new Terminator(connectSsh, restartFn(bots.audio))).exec()