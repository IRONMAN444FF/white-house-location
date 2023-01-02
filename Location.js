const {
	Function,
	isPublic
} = require('../lib/')
Function({
	pattern: 'location ?(.*)',
	fromMe: true,
	desc: 'Sends location',
	type: 'misc',
}, async (message, match) => {

await message.client.sendMessage(
    message.chat, 
    { location: { degreesLatitude: 38.8977000, degreesLongitude: -77.0365000 } }
)

})
