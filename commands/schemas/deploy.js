import bash from '../bash.js'
import pm2 from '../pm2.js'
import git from '../git.js'

const { cd } = bash
const { clone } = git
const { start } = pm2

const NAME = 'audio-bot'

export default [
  clone(''),
  cd(''),
  'npm i',

  // TODO write env file,

  start('index.js', NAME)
]
