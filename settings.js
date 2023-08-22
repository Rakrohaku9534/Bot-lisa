const fs = require('fs')

// APIKEY OPEN AI
global.jeropenai  = "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" // ISI APIKEY LU

global.sewabot = ("SEWA CHAT OWNER") // ISI HARGA SEWA BOT LU

global.namabot = "F.A-BOTZ MD" // UBAH JADI NAMA LU
global.namaowner = "Fahrul" // NAMA OWNER
global.footer_text = "© F.A-BOTZ MD" + namabot // NAMA BOT
global.pp_bot = fs.readFileSync("./image/allmenubot.jpg") // FOTO BOT MAX 50KB BIAR GA DELAY
global.qris = fs.readFileSync("./image/qris.jpg") // FOTO QRIS MAX 50KB BIAR GA DELLAY
global.owner = ['6285786539008'] // UBAH NOMOR YANG MAU DI JADIKAN OWNER
global.packname = '© F.A-BOTZ' //sticker wm ubah
global.author = 'Di Buat Oleh FAHRUL' //sticker wm ganti nama kalian
// = \\
global.sessionName = 'session' // GAK USAH UBAH
global.prefa = ['', '!', '.', '🐦', '🐤', '🗿'] // GAK USAH UBAH
global.script = ("udah gede kok nyari sc🤭") // BEBAS ASAL JAN HAPUS
global.fakelink = "https://instagram.com/fahrul_mt" // bebas asal jan hapus
global.grubbot = (`*INI KAK LINK GRUB NYA*\n\nhttps://chat.whatsapp.com/HZ0XzL2hYl5EtKgz15Qdfv`) // GANTI LINK GRUB BOT LU \\
// - \\
// FALSE OR TRUE \\
global.autoTyping = false // BEBAS
global.welcome = false // KALO MAU AUTO WELCOME UBAH JADI true
global.left = false // KALO MAU AUTO LEFT UBAH JADI true
global.anticall = true // BEBAS

let file = require.resolve(__filename)
fs.watchFile(file, () => {
   fs.unwatchFile(file)
   console.log(chalk.redBright(`Update'${__filename}'`))
   delete require.cache[file]
   require(file)
})