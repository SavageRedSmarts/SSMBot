exports.run = function(client, message, args) {
  let verifyRole = message.guild.roles.find("name", "Redmod");
  if(!message.member.roles.has(verifyRole.id)) {
      return message.reply("You pleb, you don't have the permission to use this command.").catch(console.error);
};

  let role = message.guild.roles.find("name", "Muted");
  let verify = message.guild.roles.find("name", "Verified");
  let member = message.guild.member(message.mentions.users.first());
  member.removeRole(role)
  member.addRole(verify)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2,
};

exports.help = {
  name: "unmute",
  description: "Unmute a user.",
  usage: "unmute <user>",
};
