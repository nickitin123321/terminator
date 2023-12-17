import ssh from '../ssh.js'
import 'dotenv/config'
const { env: { SSH_HOST, SSH_PASSWORD } } = process

console.log(SSH_PASSWORD, SSH_HOST)
const { connect } = ssh

export default [connect(SSH_HOST, SSH_PASSWORD)]
