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
ββκ₯γ *ππ΄ππ° & πΏππ΄πΌπΈππΌ* γκ₯ββ¬£

ββκ₯γ π·π°ππΆπ° ππ΄ππ° γ
β
ββΎ 15 Κα΄ΚΙͺ 5α΄ / Ι’Κα΄α΄α΄
ββΎ 30 Κα΄ΚΙͺ 10α΄ / Ι’Κα΄α΄α΄
ββΎ 45 Κα΄ΚΙͺ 15α΄ / Ι’Κα΄α΄α΄
ββΎ 60 Κα΄ΚΙͺ 20α΄ / Ι’Κα΄α΄α΄
ββΎ α΄α΄Κα΄α΄Ι΄α΄Ι΄ 30α΄ / Ι’Κα΄α΄α΄ 
β
βββκ₯ *${author}* κ₯ββ¬£

ββκ₯γ π·π°ππΆπ° πΏππ΄πΌπΈππΌ γ
β
ββΎ 15 Κα΄ΚΙͺ 5α΄ 
ββΎ 30 Κα΄ΚΙͺ 10α΄ 
ββΎ 45 Κα΄ΚΙͺ 15α΄ 
ββΎ 60 Κα΄ΚΙͺ 20α΄ 
ββΎ α΄α΄Κα΄α΄Ι΄α΄Ι΄ 30α΄
β
βββκ₯ *${author}* κ₯ββ¬£

ββκ₯γ κ°Ιͺα΄α΄Κ 430+ γ
β
ββΎ α΄‘α΄Κα΄α΄α΄α΄
ββΎ Ι’α΄α΄α΄ ΚΚα΄
ββΎ α΄Ιͺα΄α΄
ββΎ α΄Ι΄α΄Ιͺ ΚΙͺΙ΄α΄
ββΎ α΄Ι΄α΄Ιͺ κ±α΄Ιͺα΄α΄α΄Κ
ββΎ κ±α΄Ιͺα΄α΄Κ
ββΎ κ±α΄α΄Ι΄α΄
ββΎ α΄Ι΄Ιͺα΄α΄
ββΎ κ±α΄Ι΄α΄ α΄ ΙͺΚα΄α΄x
ββΎ κ±α΄Ι΄α΄ Κα΄Ι’
ββΎ Ι’α΄α΄α΄ Κα΄Ι’
ββΎ α΄ΚΚ
β
βββκ₯ *${author}* κ₯ββ¬£
`.trim(), wm, [['Sewa/Premium',`/wasu`]],m) // Tambah sendiri kalo mau
conn.sendFile(m.chat, vn, 'haori.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true, contextInfo:{ externalAdReply: { title: `π Ultah Owner : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`, body: `Follow My Instagram Guys!!`, sourceUrl: 'https://www.instagram.com/_defnilay', thumbnail: await (await fetch('https://telegra.ph/file/7985de03b07f1932951fe.jpg')).buffer(),}} 
     }) 
}
handler.command = /^(sewabot|sewa|beliprem)$/i
handler.tags = ['info']
handler.help = ['sewabot']
handler.premium = false
handler.limit = false

export default handler

// π? Made In Xynoz 
// Subscribe YouTube Xynoz!
// Tq To Jangan Di Hpus!!
