const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '529348970:AAHLZoupT5p9vif1rKnH00ZFZGaJH6Kn3zo'

const bot = new TelegramBot(TOKEN, {
	polling: true
})

bot.onText(/\/start/, msg => {
	
	const text = 'Red5/shop_bot..welcome'
	
	bot.sendMessage(msg.chat.id, text, {
		reply_markup: {
            keyboard: [
				['Харьков', '/start'],
				['help']
			]
		}
	})
})
