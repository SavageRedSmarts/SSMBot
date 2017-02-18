exports.run = function(client, message, args) {
  let verifyRole = message.guild.roles.find("name", "Redmod");
  if(!message.member.roles.has(verifyRole.id)) {
      return message.reply("You pleb, you don't have the permission to use this command.").catch(console.error);
};

  let news = args.join(" ")
  client.channels.get("168763544811208705").sendMessage(news).then(news => message.reply(`Shouted ${args}`)).catch(console.error);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2,
};

exports.help = {
  name: "general",
  description: "Sends message to general",
  usage: "general <news>",
};
