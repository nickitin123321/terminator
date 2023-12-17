import pm2 from '../pm2.js'

const { status, log } = pm2

export default [
  status(),
  log()
]
