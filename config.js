import { watchFile, unwatchFile } from 'fs' 
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
global.owner = [
['593993370003', 'Owner', true], //LunitaBot🌙
['593993370003', 'Owner2', true],
['593993370003'], ['593993370003'], ['593993370003'], ["593993370003"], ['593993370003']]

global.mods = [] 
global.prems = []
   
// ES ➜ Agregue el código de idioma el cual usará NaniBot  
//  es = Español      id = Bahasa Indonesia       ar = عرب
//  en = English      pt = Português 
global.lenguajeGB = es  //<-- Predeterminado en idioma Español 

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
global.lolkeysapi = 'GataDios'
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

global.packname = '𝙋𝙍𝙊𝙔𝙀𝘾𝙏𝙊 𝙓'
global.author = '𝙋𝙍𝙊𝙔𝙀𝘾𝙏𝙊 𝙓'
// ES ➜ Está parte es para mostrar el contacto de alguien al usar #contacto
// EN ➜ This part is to display someone's contact using #contact
global.official = [ 
['593993370003', 'Owner1', 1], 
['593993370003', 'Owner2', 1],  
['593993370003', 'Owner3', 1],
['593993370003', 'Owner4', 1]] 

global.mail = '' //agrega tú correo
global.desc = '' //agrega una descripción corta
global.desc2 = '' //agrega una descripción larga (Solo se aplicará si su whasapp no tiene descripción)
global.country = '' //agrega tú país ejemplo: 🇪🇨

global.vs = '1.3.2-(beta)'
global.vsJB = '4.5 (Beta)'

global.gt = '𝙋𝙍𝙊𝙔𝙀𝘾𝙏𝙊 𝙓'
global.yt = ''
global.yt2 = ''
global.ig = ''
global.md = ''
global.fb = ''

global.nna = '' //CANAL 
global.nn2 = '' //Canal
global.nna2 = '' //Help
global.nn = '' //Grupo 1
global.nnn = '' //Grupo 2
global.nnnt = '' //Grupo 3
global.nnntt = '' //Grupo 4
global.nnnttt = '' //Grupo 5
global.nnnttt1 = '' //Grupo 6 COL
global.nnnttt2 = '' //Grupo 7 COL
global.nnnttt3 = '' //Grupo 8 COL
global.nnnttt4 = '' //Grupo 9 COL
global.nnnttt5 = '' //A.T.M.M
global.paypal = ''
global.asistencia = 'Wa.me/593993370003' //Dudas? escríbeme...

global.wm = '𝙋𝙍𝙊𝙔𝙀𝘾𝙏𝙊 𝙓'
global.igfg = '𝙋𝙍𝙊𝙔𝙀𝘾𝙏𝙊 𝙓'
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
global.gataMenu = [img, img2, img6, img7, img8, img9, img13, img14, img15, img17, img18, img19, img20, img21]
global.gataMenu2 = [imagen14]

global.gatadonar = [imagen15]
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
