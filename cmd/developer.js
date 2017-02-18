exports.run = function(client, message, args) {
  let role = message.guild.roles.find("name", "Developer");
  let member = message.guild.member(message.mentions.users.first());
  member.addRole(role).then(member => message.reply(`Added ${member.user.username}`))
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dev'],
  permLevel: 2,
};

exports.help = {
  name: "Developer",
  description: "Add Developer to a user.",
  usage: "developer <user>",
};
