// TODO: updating from rep
import git from '../git.js'
import bash from '../bash.js'
import pm2 from '../pm2.js'

const {  cd } = bash
const { pull } = git
const { restart, start } = pm2

export default [
  restart('audio')
]
