import pm2 from '../pm2.js'

const { restart } = pm2

export default (name) => [
  restart(name)
]