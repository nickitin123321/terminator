- Pesets of commands in JS
- Remote ssh commands piplenes
- BASH, git, pm2, etc commands in JS with types and comments

Usage/exaples:
```
import commands from '../commands/index.js'
import Terminator from '../index.js'

const { connectSsh, log } = commands

(new Terminator(connectSsh, log, { endProcessWrite: false })).exec()
```

or

```
const { connectSsh, deploy } = commands

(new Terminator(connectSsh, deploy)).exec()
```
