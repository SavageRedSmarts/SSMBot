exports.run = function(client, message, args) {
  let news = args.join(" ")
  client.channels.get("275782634125131776").sendMessage(news).then(news => message.reply(`Sent ${news} to <#275782634125131776>`)).catch(console.error);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['staffnews','tostaff','alertstaff'],
  permLevel: 2,
};

exports.help = {
  name: "staffannounce",
  description: "Announce to staff announcements channel",
  usage: "staffannounce <announcement>",
};
