import ssh from '../ssh.js'
import 'dotenv/config'
const { env: { SSH_HOST, SSH_PASSWORD } } = process

const { connect } = ssh

export default [connect(SSH_HOST, SSH_PASSWORD)]
