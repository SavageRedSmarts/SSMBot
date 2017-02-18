exports.run = function(client, message, args) {
  message.channel.setTopic(args.join(" ")).then(newChannel => console.log(`Channel's new topic is ${newChannel.topic}`)).catch(console.error);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2,
};

exports.help = {
  name: "setTopic",
  description: "Add topic to a given channel.",
  usage: "setTopic <topic>",
};
