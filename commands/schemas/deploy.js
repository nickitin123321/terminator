import bash from '../bash.js'
import pm2 from '../pm2.js'
import git from '../git.js'

const { cd, write } = bash
const { clone } = git
const { start } = pm2

const NAME = '[NAME]'

export default [
  cd('niki'),
  //clone(`https://github.com/nickitin123321/${NAME}`),
  cd(`${NAME}/src`),
  //'npm i',

  write('.env', `[SECRET]`),

  start('index.js', NAME)
]
