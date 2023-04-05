const {Telegraf, Scenes:{WizardScene, Stage}, session} = require('telegraf')
const bot = new Telegraf('5871182094:AAFfKGYZiSM4TC_5eF2I5YqQh5yLSdtwBCc')
const axios = require('axios')
bot.start((ctx) => {
    ctx.reply('Hola, escribe /traducir para empezar :)')
})
var DomParser = require('dom-parser');
var parser = new DomParser();
const TRADUCIR = Telegraf.hears(/[\w]/, (ctx)=> {

let datos = encodeURIComponent(ctx.message.text)
let params = `async=translate,sl:auto,tl:es,st:${datos},id:1672888816321,qc:true,ac:false,_id:tw-async-translate,_pms:s,_fmt:pc`
let options = {
    method: 'POST',
    url: 'https://www.google.com/async/translate',
    params: {
        vet: '12ahUKEwim-ZiCsq_8AhU2SDABHamiCKYQqDh6BAgFECk..i',
        ei: '-Da2Y6adEraQwbkPqcWisAo&rlz=1C1VDKB_esVE1025VE1025',
        yv: '3',
        cs: '1'
    },
    headers: {
        authority: 'www.google.com',
        path: '/async/translate?vet=12ahUKEwim-ZiCsq_8AhU2SDABHamiCKYQqDh6BAgFECk..i&ei=-Da2Y6adEraQwbkPqcWisAo&rlz=1C1VDKB_esVE1025VE1025&yv=3&cs=1',
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'es-ES,es;q=0.9,en;q=0.8',
        'content-length': `${params.length}`,
        'content-type': 'application/x-www-form-urlencoded',
        origin: 'https://www.google.com',
        referer: 'https://www.google.com/',
        'sec-ch-ua': '"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"',
        'sec-ch-ua-arch': '"x86"',
        'sec-ch-ua-bitness': '"64"',
        'sec-ch-ua-full-version': '"108.0.5359.125"',
        'sec-ch-ua-full-version-list': '"Not?A_Brand";v="8.0.0.0", "Chromium";v="108.0.5359.125", "Google Chrome";v="108.0.5359.125"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-ch-ua-platform-version': '"15.0.0"',
        'sec-ch-ua-wow64': '?0',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
        'x-client-data': 'CJC2yQEIpbbJAQjBtskBCKmdygEIyvHKAQiVocsBCN75zAEI6frMAQjxgM0BCLKCzQEI8ILNAQjOhM0BCO+EzQEIuobNAQjQh80BDecoded:message ClientVariations {  // Active client experiment variation IDs.  repeated int32 variation_id = [3300112, 3300133, 3300161, 3313321, 3324106, 3330197, 3357918, 3358057, 3358833, 3359026, 3359088, 3359310, 3359343, 3359546, 3359696];}',
        'sec-ch-ua-model': ''
    },
    data: params
};

axios.request(options).then(async function (response) {

    let data = response.data
    let sliced = data.slice(50)
    let slice2 = sliced.slice(0, -7)
    let parsedHTML = parser.parseFromString(slice2)
    ctx.replyWithMarkdownV2('`' + parsedHTML.getElementById('tw-answ-target-text').innerHTML + '`')
}).catch(function (error) {
  console.error(error);
});
})
const Traduccion = new WizardScene('traduccion',TRADUCIR)
Traduccion.enter(ctx => ctx.reply('Por favor envie el texto que desea traducir'))
const stage = new Stage([Traduccion])
stage.hears('cancelar', ctx => ctx.scene.leave())
bot.use(session(),stage.middleware())
bot.command('traducir', (ctx) => ctx.scene.enter('traduccion'))

bot.launch()