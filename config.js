/* Credits to:
* AzamiJs
* Elrebelde21
* GataNina-Li */

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

//Owner
global.owner = [
['5215610314499', '👑 𝙲𝚁𝙴𝙰𝚃𝙾𝚁 👑', true],
['573013482814', '👤 𝙾𝚆𝙽𝙴𝚁', true]]


global.botNumberCode = ''
global.confirmCode = ''

global.suittag = ['5215610314499']
global.mods = []
global.prems = []

//Bot
global.packname = 'ZorroBot-MD 💖'
global.author = 'ZorroBot 🦊'
global.wm = 'ZorroBot-MD'
global.wm2 = 'Zorro : Bot'
global.azami = 'Zorro'
global.cb = 'ZorroBot'

global.vs = 'V2'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = 'Bot ~ WhatsApp'
global.devnum = '+521 56 1031 4499'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
