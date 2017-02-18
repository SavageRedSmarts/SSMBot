exports.run = function(client, message, args) {
  let role = message.guild.roles.find("name", "UNENABLED");
  let member = message.guild.member(message.mentions.users.first());
  member.removeRole(role).then(role => message.reply(`Added!`));

}

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ["unpresident", "unvp"],
  permLevel: 2,
};

exports.help = {
  name: "unpresident",
  description: "Remove President to user",
  usage: "unvp <user>",
};
