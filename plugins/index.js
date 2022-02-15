let handler = async (m, { conn, text, usedPrefix }) => {

    contentText = `*Tsukasa Botz*

Hi ${conn.getName(m.sender)}
*メ* Status : ${opts.disable ? 'Private' : 'Public'}
*メ* Script By : https://github.com/Nurutomo
*メ* Modified by : Yogi Prasetya



🎭  For Users 
- Don't spam bots 



Please click the allmenu button below, if the button is not visible,  it means you are using Whatsapp GB,  Dont worry, you can access the menu with !allmenu 


`

foto = await conn.getBuffer('https://i.ibb.co/L8NHqvJ/peakpx.jpg')
buttons = [
{buttonId: `${usedPrefix}owner`,buttonText:{displayText: `owner`},type:1},
{buttonId: `${usedPrefix}allmenu`,buttonText:{displayText: `allmenu`},type:1}
]
              imageMsg = (await conn.prepareMessageMedia(foto, "imageMessage", { thumbnail: foto, })).imageMessage
              buttonsMessage = {footerText: '*メメメ by yogi prasetya*', imageMessage: imageMsg,
              contentText: contentText ,buttons,headerType:4}
              prep = await conn.prepareMessageFromContent(m.chat,{buttonsMessage},{quoted: m })
              conn.relayWAMessage(prep)
              
  }
handler.command = /^(help|menu)$/i

module.exports = handler
