exports.run = function(client, message, args) {
  let role = message.guild.roles.find("name", "SUSPENDED");
  let verify = message.guild.roles.find("name", "Verified")
  let member = message.guild.member(message.mentions.users.first());
  member.removeRole(role).then(member => message.reply(`${member.user} is currently unsuspended`));
  member.addRole(verify);

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2,
};

exports.help = {
  name: "unsuspend",
  description: "unsuspend a user.",
  usage: "unsuspend <user>",
};
