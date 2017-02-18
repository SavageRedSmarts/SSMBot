exports.run = function(client, message, args) {
  let role = message.guild.roles.find("name", "Vice President");
  let member = message.guild.member(message.mentions.users.first());
  member.addRole(role).then(role => message.reply(`Added!`))
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["President", "vp"],
  permLevel: 2,
};

exports.help = {
  name: "president",
  description: "Add President to user",
  usage: "vp <user>",
};
