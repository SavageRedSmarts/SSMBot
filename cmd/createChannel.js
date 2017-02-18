exports.run = function(client, message, args) {
  let verifyRole = message.guild.roles.find("name", "Redmod");
  if(!message.member.roles.has(verifyRole.id)) {
      return message.reply("You pleb, you don't have the permission to use this command.").catch(console.error);
};

  message.guild.createChannel(args.join(" "), 'text').then(channel => console.log(`Created new channel ${channel}`)).catch(console.error);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2,
};

exports.help = {
  name: "createChannel",
  description: "Creates Channel",
  usage: "createChannel <name>",
};
