 noimport { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'
import { en, es, id, ar, pt } from './lib/idiomas/total-idiomas.js'

// ES ➜ Agregué primero el número del Bot como prioridad
// ES ➜ Si desea recibir reportes debe de usar los tres parámetros (Número, nombre y true)
// EN ➜ Add the Bot number as priority first
// EN ➜ If you want to receive reports you must use the three parameters (Number, name and true)
global.owner = [
['593958918542', '𝙋𝙊𝙇𝙑𝙊𝙍𝘼 𝘽𝙊𝙏 ✅', true],
]

global.mods = [] 
global.prems = []
   
// ES ➜ Agregue el código de idioma el cual usará GataBot  
// EN ➜ Add the language code which GataBot will use
//  es = Español      id = Bahasa Indonesia       ar = عرب
//  en = English      pt = Português 
global.lenguajeGB = es  //<-- Predeterminado en idioma Español 

// confirmación en el ajuste de idioma y owner en la consola
global.languageLen = true
global.registerNumber = ""

// ES ➜ Consigue Apikey en https://platform.openai.com/account/api-keys
global.openai_key = 'sk-0'

// ES ➜ Consigue tu ID de organizacion en: https://platform.openai.com/account/org-settings
global.openai_org_id = 'org-3'

global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = 'PolvoraBot'
global.itsrose = ['4b146102c4d500809da9d1ff']
global.baileys = '@whiskeysockets/baileys'

global.APIs = { 
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://api.zahwazein.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',	
  fgmods: 'https://api-fgmods.ddns.net',
  botcahx: 'https://api.botcahx.biz.id',
  ibeng: 'https://api.ibeng.tech/docs',	
  rose: 'https://api.itsrose.site',
  popcat : 'https://api.popcat.xyz',
  xcoders : 'https://api-xcoders.site'
},
global.APIKeys = { 
  'https://api.xteam.xyz': `${keysxteam}`,
  'https://api.lolhuman.xyz': `${lolkeysapi}`,
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://api.zahwazein.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.botcahx.biz.id': 'Admin',
  'https://api.ibeng.tech/docs': 'tamvan',
  'https://api.itsrose.site': 'Rs-Zeltoria',
  'https://api-xcoders.site': 'Frieren'
}

global.mods = [] 
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment	

global.packname = '𝙋𝙊𝙇𝙑𝙊𝙍𝘼 𝘽𝙊𝙏 ✅'
global.author = '𝘗𝘰𝘭𝘷𝘰𝘳𝘢𝘉𝘰𝘵'

// ES ➜ Está parte es para mostrar el contacto de alguien al usar #contacto
// EN ➜ This part is to display someone's contact using #contact
global.official = [ 
['593958918542', '𝑨𝑫𝑴𝑰𝑵 𝘽𝙊𝙏 ✅', 1], 
['593958918542', '𝑨𝑫𝑴𝑰𝑵 𝑩𝑶𝑻 ✅', 1]
] 

global.mail = '' //agrega tú correo
global.desc = '' //agrega una descripción corta
global.desc2 = '' //agrega una descripción larga (Solo se aplicará si su whasapp no tiene descripción)
global.country = '' //agrega tú país ejemplo: 🇪🇨

global.vs = '1.1.4-(Polvorin)'
global.vsJB = '2.1 (Polvorin)'

global.gt = '𝙋𝙊𝙇𝙑𝙊𝙍𝘼 𝘽𝙊𝙏 ✅'
global.yt = 'https://youtube.com/@polvora6969'
global.yt2 = 'https://www.youtube.com/watch?v=Ko019wvu2Tc&t=71s'
global.ig = 'https://www.instagram.com/polvora6969'
global.md = 'https://www.facebook.com/POLVORA6969'
global.kofi = 'https://ko-fi.com/polvora6969'
global.fb = 'https://discord.gg/somos-polvora-660632047928475648'

global.n2 = 'https://chat.whatsapp.com/EREhOmgyTjc9K5VOqUx0yN' //CANAL GATABOT
global.nna = 'https://chat.whatsapp.com/EREhOmgyTjc9K5VOqUx0yN' //UPDATE GATABOT
global.nn2 = 'https://chat.whatsapp.com/EREhOmgyTjc9K5VOqUx0yN' //UPDATE 2
global.nna2 = 'https://chat.whatsapp.com/EREhOmgyTjc9K5VOqUx0yN' //Help
global.nn = 'https://chat.whatsapp.com/EREhOmgyTjc9K5VOqUx0yN' //Grupo 1
global.nnn = 'https://chat.whatsapp.com/EREhOmgyTjc9K5VOqUx0yN' //Grupo 2
global.nnnt = 'https://chat.whatsapp.com/EREhOmgyTjc9K5VOqUx0yN' //Grupo 3
global.nnntt = 'https://chat.whatsapp.com/EREhOmgyTjc9K5VOqUx0yN' //Grupo 4
global.nnnttt = 'https://chat.whatsapp.com/EREhOmgyTjc9K5VOqUx0yN' //Grupo 5
global.nnnttt1 = 'https://chat.whatsapp.com/EREhOmgyTjc9K5VOqUx0yN' //Grupo 6 COL
global.nnnttt2 = 'https://chat.whatsapp.com/EREhOmgyTjc9K5VOqUx0yN' //Grupo 7 COL
global.nnnttt3 = 'https://chat.whatsapp.com/EREhOmgyTjc9K5VOqUx0yN' //Grupo 8 COL
global.nnnttt4 = 'https://chat.whatsapp.com/EREhOmgyTjc9K5VOqUx0yN' //Grupo 9 COL
global.nnnttt5 = 'https://chat.whatsapp.com/EREhOmgyTjc9K5VOqUx0yN' //A.T.M.M
global.paypal = 'https://paypal.me/polvorayzyt2019'
global.asistencia = 'Wa.me/573178206163' //Dudas? escríbeme...

global.wm = '𝙋𝙊𝙇𝙑𝙊𝙍𝘼 𝘽𝙊𝙏 𝘿𝙞𝙤𝙨'
global.igfg = '𝙋𝙊𝙇𝙑𝙊𝙍𝘼 𝘽𝙊𝙏 ✅'
global.wait = lenguajeGB['smsMeWait']()
global.wait2 = lenguajeGB.smsWait()
global.nomorown = owner[0][0]

global.imagen1 = fs.readFileSync('./media/menus/Menu3.jpg')
global.imagen2 = fs.readFileSync('./media/menus/img1.jpg')
global.imagen3 = fs.readFileSync('./media/menus/img2.jpg')
global.imagen4 = fs.readFileSync('./media/menus/img3.jpg')
global.imagen5 = fs.readFileSync('./media/menus/img4.jpg')
global.imagen6 = fs.readFileSync('./media/menus/img5.jpg')
global.imagen7 = fs.readFileSync('./media/menus/img6.jpg')
global.imagen8 = fs.readFileSync('./media/menus/img7.jpg')
global.imagen9 = fs.readFileSync('./media/menus/img8.jpg')
global.imagen10 = fs.readFileSync('./media/menus/img9.jpg')
global.imagen11 = fs.readFileSync('./media/menus/img10.jpg')
global.imagen12 = fs.readFileSync('./media/menus/img11.jpg')
global.imagen13 = fs.readFileSync('./media/menus/img12.jpg')
global.imagen14 = fs.readFileSync('./media/menus/registro.jpg')
global.imagen15 = fs.readFileSync('./media/menus/Menu4paypal.jpg')
global.imagen16 = fs.readFileSync('./media/menus/xxx.jpg')
global.imagen17 = fs.readFileSync('./media/menus/xxx1.jpg')
global.imagen18 = fs.readFileSync('./media/menus/xxx2.jpg')
global.imagen19 = fs.readFileSync('./media/menus/ftjesus.jpg')
global.imagen20 = fs.readFileSync('./media/menus/ftjesus2.jpg')

global.img = 'https://i.imgur.com/qwU7siL.png'
global.img2 = 'https://i.imgur.com/qwU7siL.png'
global.img3 = 'https://i.imgur.com/qwU7siL.png' //ft rectangular
global.img5 = 'https://i.imgur.com/qwU7siL.png'
global.img6 = 'https://i.imgur.com/qwU7siL.png'
global.img7 = 'https://i.imgur.com/qwU7siL.png'
global.img8 = 'https://i.imgur.com/qwU7siL.png'
global.img9 = 'https://i.imgur.com/qwU7siL.png'
global.img10 = 'https://i.imgur.com/qwU7siL.png'
global.img11 = 'https://i.imgur.com/qwU7siL.png'
global.img12 = 'https://i.imgur.com/qwU7siL.png'
global.img13 = 'https://i.imgur.com/qwU7siL.png'
global.img14 = 'https://i.imgur.com/qwU7siL.png'
global.img15 = 'https://i.imgur.com/qwU7siL.png'
global.img17 = 'https://i.imgur.com/qwU7siL.png'
global.img18 = 'https://i.imgur.com/qwU7siL.png'
global.img19 = 'https://i.imgur.com/qwU7siL.png'
global.img20 = 'https://i.imgur.com/qwU7siL.png'
global.img21 = 'https://i.imgur.com/qwU7siL.png'
global.img21 = 'https://i.imgur.com/YfK3oTD.jpg' //paypal

global.welgata = [ig, yt2, yt2, ig, md, ig, yt, paypal, yt2, yt2, ig, fb]
global.redesMenu = [n2, nna, nn, nnn, nnnt, nnntt, nnnttt, nnnttt1, nnnttt2, nnnttt3, nnnttt4, md, ig, paypal, yt, asistencia, fb]
global.gataMenu = [img, img2, img6, img7, img8, img9, img13, img14, img15, img17, img18, img19, img20, img21]
global.gataMenu2 = [imagen14]
global.gatadonar = [imagen15]
global.photoimg = [imagen19, imagen20]
global.gatahot = [imagen16, imagen17, imagen18]
global.gataImg = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, imagen11, imagen12, imagen13]

global.htki = '*⭑•̩̩͙⊱•••• ☪*'
global.htka = '*☪ ••••̩̩͙⊰•⭑*'
global.htjava = '⫹⫺'
global.correct = '✅'
global.fault = '💔'
global.alert = '⚠️'
global.sending = '📋'
global.sent = '❇️'
global.notsent = '❗'
global.waitemot = '⌛'
global.waitemot2 = '⏳'

global.multiplier = 60 // Cuanto más alto, más difícil subir de nivel 

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.bold.greenBright(lenguajeGB['smsConfigBot']().trim()))
import(`${file}?update=${Date.now()}`)
})

