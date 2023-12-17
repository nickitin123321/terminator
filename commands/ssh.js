export default {
  connect: (host, password) => `sshpass -p ${password} ssh ${host}`
}
