exports.run = function(client, message, args) {
  message.channel.sendMessage(args.join(" ")).catch(console.error);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say','mock'],
  permLevel: 2,
};

exports.help = {
  name: "Say",
  description: "Mocks what you say",
  usage: "say <arg>",
};
