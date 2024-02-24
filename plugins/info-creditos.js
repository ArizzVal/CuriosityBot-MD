var handler = async (m) => {

let tqto = `👩🏻‍💻 *Desarrolladora*
⬡ *Arumiii*
https://github.com/ArizzVal

🎌 *Colaboradores*
⬡ *Arumiii* 
⬡ *Diego*
⬡ *Ken*
⬡ *Azamijs*
⬡ *Edwardofc*

_Envie "colaboradores" para obtener el enlace del perfil de GitHub de los colaboradores_`

conn.reply(m.chat, tqto, m, fake, )

handler.before = async m => {

if (/^colaboradores|Colaboradores$/i.test(m.text) ) {
let texto = `🚩 *GitHub - Colaboradores*

⬡ https://github.com/ArizzVal
⬡ https://github.com/diegojadibot
⬡ https://github.com/Principiante12344
⬡ https://github.com/AzamiJs
⬡ https://github.com/Edwardofc

_Envie "cc" Para Obtener El Contacto De Los Colaboradores_`

conn.reply(m.chat, texto, m, fake, )
}

if (/^cc$/i.test(m.text) ) {
let contacto = `🎌 *Contacto - Colaboradores* 

⬡ *Arumiii*
@+525610314499

⬡ *Diego*
@573013482814

⬡ *ken*
@51902247905

⬡ *Asamijs*
@527294888993

⬡ *Edwardofc*
@+51935531943`

m.reply(contacto, m.chat, { mentions: conn.parseMention(contacto)})}
}
  
}
handler.help = ['tqto', 'creditos', 'credits', 'thanks', 'thanksto']
handler.tags = ['info']
handler.command = /^(credits|creditos|credit|thanks|thanksto|tqto)$/i

handler.register = true

export default handler
