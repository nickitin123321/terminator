const p = 'pm2'
export default {
  start: (container, name) => `${p} start ${container} --name ${name}`,
  stop: (container) => `${p} stop ${container}`,
  restart: (container) => `${p} restart ${container}`,
  status: () => `${p} status`,
  log: () => `${p} log`
}
