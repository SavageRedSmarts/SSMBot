exports.run = function(client, message, args) {
  let verifyRole = message.guild.roles.find("name", "Redmod");
  if(!message.member.roles.has(verifyRole.id)) {
      return message.reply("You pleb, you don't have the permission to use this command.").catch(console.error);
};

  let messagecount = parseInt(args.join(" "));
  message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messagecount));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2,
};

exports.help = {
  name: "purge",
  description: "Purges X amount of messages.",
  usage: "purge <user>",
};
