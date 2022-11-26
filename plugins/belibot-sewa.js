let fetch = require('node-fetch') 
let handler = async (m, { conn, text, usedPrefix, command }) => {
let gh = 'https://github.com/LynnXzy'
  let buttonMessage= {
'document':{'url':gh},
'mimetype':'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
'fileName':'Payment Methode',
'fileLength':'99999999999999',
'pageCount':'999',
'contextInfo':{
'externalAdReply':{
'showAdAttribution': true, 
'mediaUrl':gh,
'mediaType':2,
'previewType':'pdf',
'title':'Follow Github Gua',
'body':'© Lynn-MD',
'thumbnail':await(await fetch('https://telegra.ph/file/f4063ab3071f5c4af765a.png')).buffer(),
'sourceUrl':gh}},
'caption':'Hi, Silahkan pilih opsi di bawah ini.\n*Payment*\n\n*x* Digi: 60149431385\n*x* Maxis: 60147675746',
'footer':'©Lynn-Md
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'ᴍᴇɴᴜ'},'type':1},
{'buttonId':'.donasi','buttonText':{'displayText':'ᴅᴏɴᴀsɪ'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}

handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa|sewabot|belibot)$/i

module.exports = handler
