/* Credits to:
* AzamiJs
* Elrebelde21
* GataNina-Li
* Aruumi
* Edwardofc */

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

//Owner
global.owner = [
['5215610314499', '👑 𝙲𝚁𝙴𝙰𝚃𝙾𝚁 👑', true],
['573013482814', '👤 𝙾𝚆𝙽𝙴𝚁', true],
['5217294888993', '👤 𝙰𝙶𝚁𝙰𝙳𝙴𝙲𝙸𝙼𝙸𝙴𝙽𝚃𝙾', true],
['51935531943', '👤 𝙳𝙴𝚂𝙰𝚁𝚁𝙾𝙻𝙻𝙰𝙳𝙾𝚁', true],
['51902247905', '👤 𝙿𝙸𝚃𝙴𝚁 𝙲𝙾𝙻𝙰𝙱', true]]


global.botNumberCode = ''
global.confirmCode = ''

global.suittag = ['5215610314499']
global.mods = []
global.prems = []

//Bot
global.packname = 'KitsuneeBot-MD 💖'
global.author = 'KitsuneeBot 🦊'
global.wm = 'KitsuneBot-MD'
global.wm2 = 'Kitsune : Bot'
global.azami = 'Kitsunee'
global.cb = 'KitsuneBot'

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
