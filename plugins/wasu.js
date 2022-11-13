let handler = async (m, { conn, usedPrefix, command }) => {
  let wasuu = pickRandom(global.wasu)
  conn.sendButton(m.chat, wasuu, wm, `Wasuu`, [[`${usedPrefix + command}`]], m)
}
handler.help = ['wasu']
handler.tags = ['info']
handler.command = /^(wasu)$/i
export default handler 

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.wasu = [
  "Langsung Chat Owner Aja Bro! wa.me/6289670040294"
]
