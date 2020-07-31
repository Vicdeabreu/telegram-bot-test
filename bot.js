const Telegraf = require('telegraf');

const bot = new Telegraf('1388029163:AAH2sbfFh4RM9ZyCMEFT9rGTL_1SxQgNVFQ');

bot.start((ctx) => {
  console.log(ctx.from)
  console.log(ctx.chat)
  console.log(ctx.message)
  console.log(ctx.updateSubTypes)
  //ctx.reply(`Bem vindo ${ctx.from.first_name} a Carrefour Electronics. Você enviou um ${ctx.updateSubTypes[0]}`);
  ctx.reply(`Bem vindo ${ctx.from.first_name} a Carrefour Electronics. Você enviou um ${ctx.updateSubTypes[0]}`);
});

bot.help((ctx) => {
  ctx.reply('Help!!');
});

bot.settings((ctx) => {
  ctx.reply('Settings');
});

bot.command(['mycommand', 'Mycommand', 'MYCOMMAND'], (ctx) => {
  ctx.reply('my custom command');
})

bot.hears('computer', ctx => {
  ctx.reply('Hey, I am selling computer');
})

// bot.on('text', ctx => {
//   ctx.reply('estas texteando')
// })

bot.on('sticker', ctx => {
  ctx.reply('Oh, you like stickers')
})

bot.mention('BotFather', (ctx) => {
  ctx.reply('You have mentioned someone')
})

bot.phone('+5511957637348', (ctx) => {
  ctx.reply('this is phone number')
});

bot.hashtag('programming', (ctx) => {
  ctx.reply('hashtag!!')
});

bot.launch();



