exports.run = function(client, message, args) {
  let role = message.guild.roles.find("name", "Supporter");
  let member = message.guild.member(message.mentions.users.first());
  member.addRole(role).then(role => message.reply(`Added!`))
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2,
};

exports.help = {
  name: "Supporter",
  description: "Add Supporter to a user.",
  usage: "Supporter <user>",
};
