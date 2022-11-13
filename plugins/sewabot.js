import fetch from 'node-fetch'

//Plugin By Xynoz!!
let handler = async (m, { conn, usedPrefix }) => {
  const ultah = new Date('November 4 2022 00:00:01')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
  let vn = `https://github.com/saipulanuar/Api-Github/raw/main/audio/Donasiku.mp3`
  conn.sendButton(m.chat, `
━━ꕥ〔 *𝚂𝙴𝚆𝙰 & 𝙿𝚁𝙴𝙼𝙸𝚄𝙼* 〕ꕥ━⬣

┏━ꕥ〔 𝙷𝙰𝚁𝙶𝙰 𝚂𝙴𝚆𝙰 〕
┃
┃✾ 15 ʜᴀʀɪ 5ᴋ / ɢʀᴏᴜᴘ
┃✾ 30 ʜᴀʀɪ 10ᴋ / ɢʀᴏᴜᴘ
┃✾ 45 ʜᴀʀɪ 15ᴋ / ɢʀᴏᴜᴘ
┃✾ 60 ʜᴀʀɪ 20ᴋ / ɢʀᴏᴜᴘ
┃✾ ᴘᴇʀᴍᴀɴᴇɴ 30ᴋ / ɢʀᴏᴜᴘ 
┃
┗━━ꕥ *${author}* ꕥ━⬣

┏━ꕥ〔 𝙷𝙰𝚁𝙶𝙰 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 〕
┃
┃✾ 15 ʜᴀʀɪ 5ᴋ 
┃✾ 30 ʜᴀʀɪ 10ᴋ 
┃✾ 45 ʜᴀʀɪ 15ᴋ 
┃✾ 60 ʜᴀʀɪ 20ᴋ 
┃✾ ᴘᴇʀᴍᴀɴᴇɴ 30ᴋ
┃
┗━━ꕥ *${author}* ꕥ━⬣

┏━ꕥ〔 ꜰɪᴛᴜʀ 430+ 〕
┃
┃✾ ᴡᴇʟᴄᴏᴍᴇ
┃✾ ɢᴏᴏᴅ ʙʏᴇ
┃✾ ᴋɪᴄᴋ
┃✾ ᴀɴᴛɪ ʟɪɴᴋ
┃✾ ᴀɴᴛɪ ꜱᴛɪᴄᴋᴇʀ
┃✾ ꜱᴛɪᴋᴇʀ
┃✾ ꜱᴏᴜɴᴅ
┃✾ ᴀɴɪᴍᴇ
┃✾ ꜱᴇɴᴅ ᴠɪʀᴛᴇx
┃✾ ꜱᴇɴᴅ ʙᴜɢ
┃✾ ɢᴀᴍᴇ ʀᴘɢ
┃✾ ᴅʟʟ
┃
┗━━ꕥ *${author}* ꕥ━⬣
`.trim(), wm, [['Sewa/Premium',`/wasu`]],m) // Tambah sendiri kalo mau
conn.sendFile(m.chat, vn, 'haori.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true, contextInfo:{ externalAdReply: { title: `💌 Ultah Owner : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`, body: `Follow My Instagram Guys!!`, sourceUrl: 'https://www.instagram.com/_defnilay', thumbnail: await (await fetch('https://telegra.ph/file/7985de03b07f1932951fe.jpg')).buffer(),}} 
     }) 
}
handler.command = /^(sewabot|sewa|beliprem)$/i
handler.tags = ['info']
handler.help = ['sewabot']
handler.premium = false
handler.limit = false

export default handler

// 📮 Made In Xynoz 
// Subscribe YouTube Xynoz!
// Tq To Jangan Di Hpus!!
