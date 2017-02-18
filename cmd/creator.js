exports.run = function(client, message, args) {
  message.channel.sendMessage("The creator of SSMBot is SavageRedFluffyWayz");
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: "creator",
  description: "Tells you who creator is.",
  usage: "creator",
};
