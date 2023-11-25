const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "923184070915"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '' 
global.devs = '917827135094';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUVZbUE4WCtaNURGNHN6RytzVHovckpsbk5Qa1ZzVHBqc2h4MTFMdDlGbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0pKek8xNlk2azFUOEhoRE9VSkNjOUE1ak95Uno4d0RBTFI2bVo5Z3lYUT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3RzBLWUZZSUlTc1FnenRseWUzeGlscWJVa0pKenNERStaYVFGdytnYmxvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmNGlLTjI5ejBnVEVTVTFpRUhod1h3RDNSellQYTFyM2JXVC84UEJvakVrPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBJWUtFaXhPUzRjNi9hZVVudXZpZlpsTDRyK3VvZy9IZFViTTdOTWJuMFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikl1T1Bsazk5TXZoaGZLaUEzd1pPTVQ5QVZnWTBQbUczWXJZWjhVbUN5dzQ9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnM2ZhMmFDa2JzUEdWNjlFbjBZN3gvMmk2blJNQlRFU1pabWc3eGxuR3F6V2lBWnA4UlBQNVF0N1FxQnI1akxUd1diVHAwZFNSZExFd1MzN1Z1QkxEQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjkzLCJhZHZTZWNyZXRLZXkiOiJtbWpNdU5CS3BwdHFOK0Rzd2UzYkZHMG5rMVllRmMxZzNuRjd1YjZGQXpNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIzLUJKSlk2TVNTZUozYUM2MXlxSWpnIiwicGhvbmVJZCI6IjBmYzgxMjliLWJiNTEtNDdjYy05ZDY4LThhNWY4OTU4YWUyNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmTUtKOGlwbUFCMHNVVklKY0U3ZjRnK21pVnc9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQ3ME5pT2pnM0EyS1kyZTVHUUtZS3AvZ2FZVT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09lOXBNZ0RFTnZEaUtzR0dBRT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiK2FJMFlrWjlubXIycDh3M0JKYmhpSGQ5QXBYemFyYURGckE0ckE4K0gxaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoicGJFMEhVNUhPR0FkTEZ4U0Y2NWg1M1VmdDlydTZBQjBIck8wMENCV0UraEVITmVEbGFWVzIzNW5waGJybitIdFRZclBKSFQ5MUZKQklGRnJhSzJjREE9PSIsImRldmljZVNpZ25hdHVyZSI6ImNKVDZxeDZUOUQ1a1NwbkgzbDhkbjY4L05oM0FJVjE3NTBZdnVmVG1iWVZKTVB5UFpScFlMNkRQZjEyNVlxdFVwSGtJTjhnVlJ0K0Zmb2p6ekVGREFnPT0ifSwibWUiOnsiaWQiOiI5MTc4MjcxMzUwOTQ6MTNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2TrvCdk63wnZOw8J2TqvCdk7sifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE3ODI3MTM1MDk0OjEzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZtaU5HSkdmWjVxOXFmTU53U1c0WWgzZlFLVjgycTJneGF3T0t3UFBoOVoifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDA5MzAwMTN9
",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'AJITH SER',
  packname:  process.env.PACK_NAME || 'EDGAR SER',
   
  botname:   process.env.BOT_NAME === undefined ? "EDGAR" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'AJITH SER' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false  : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
