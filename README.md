# Traductor (Powered by Google)
## Description
Google API was scrapped from it's website using devTools from Google Chrome<br /> <br />
This is a JavaScript code that uses the Telegraf library to create a Telegram bot that can translate text from any language to Spanish. When the user sends the command '/traducir', the bot enters a WizardScene that prompts the user to enter the text they want to translate. The text is then sent as a POST request to Google Translate API using the Axios library. The API response is parsed using the DomParser library to extract the translated text, which is then sent back to the user in a Telegram message  and with MarkDown format to ease the copy of the message with just touching it. The code also includes a 'cancelar' command to exit the WizardScene. 
## Usage
Install these packages via npm:
```
npm install dom-parser axios telegraf
```
- Set your own TOKEN API in ``index.js``
- Run START.bat file
- Send /traducir to start translating anything.
## References
- [Axios](https://www.npmjs.com/package/axios)
- [Telegraf](https://www.npmjs.com/package/telegraf)
- [DomParser](https://www.npmjs.com/package/domparser)
