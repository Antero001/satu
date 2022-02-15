let handler = async (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
 // m.reply(`
//${conn.getName(m.sender)} is now AFK${text ? ': ' + text : ''}
//`)
foto = await conn.getBuffer('https://i.ibb.co/L8NHqvJ/peakpx.jpg')
   list = await conn.prepareMessageFromContent(m.chat, {
    "listMessage": {
      "title": `${conn.getName(m.sender)} Is Afk`,
      "description": `
*Afk Mode*

メ Name : ${conn.getName(m.sender)}
メ Reasoned ${text ? ': ' + text : ': nothing'}
`,
      "buttonText": "",
      "listType": "PRODUCT_LIST",
      "productListInfo": {
        "productSections": [
          {
            "title": "LIST CATALOG",
            "products": [
              {
                "productId": "4279409322097634"
              },
              {
                "productId": "4442032655916720"
              },
{
                "productId": "4849920275036112"
              },
              {
                "productId": "4729814033735411"
              }
            ]
          }
        ],
        "headerImage": {
          "productId": "4279409322097634",
          "jpegThumbnail": foto
        },
        "businessOwnerJid": "0@s.whatsapp.net"
      },
      "footerText": "By Yogi Prasetya"
    }
  }, {quoted: m })
  conn.relayWAMessage(list, {waitForAck: true})
}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i

module.exports = handler
