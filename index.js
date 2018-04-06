const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '593469041:AAEKZX6deG4JZIcXyATXrd29g9Opaioza40'

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