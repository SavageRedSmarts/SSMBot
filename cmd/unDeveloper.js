exports.run = function(client, message, args) {
  let role = message.guild.roles.find("name", "Developer");
  let member = message.guild.member(message.mentions.users.first());
  member.removeRole(role)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['undev'],
  permLevel: 2,
};

exports.help = {
  name: "unDeveloper",
  description: "Undev someone",
  usage: "undev <user>",
};
