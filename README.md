- Pesets of commands in JS
- Remote ssh commands piplines
- BASH, git, pm2, docer, etc commands in JS with types and comments

Usage/exaples:
``` js
import commands from '../commands/index.js'
import Terminator from '../index.js'

const { connectSsh, log } = commands

(new Terminator(connectSsh, log, { endProcessWrite: false })).exec()
```

or

``` js
const { connectSsh, deploy } = commands

(new Terminator(connectSsh, deploy)).exec()
```
