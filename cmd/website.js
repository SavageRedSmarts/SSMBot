exports.run = function(client, message, args) {
  message.channel.sendMessage("It's at http://safeservermoderation.ml/");
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: "Website",
  description: "Give website",
  usage: "Website",
};
