exports.run = function(client, message, args) {
  let verifyRole = message.guild.roles.find("name", "ClubOwners");
  if(!message.member.roles.has(verifyRole.id)) {
      return message.reply("You can not grant this right to this kind sir.").catch(console.error);
}
  let role = message.guild.roles.find("name", "ClubVIP");
  let role2 = message.guild.roles.find("name", "ClubMember");
  let member = message.guild.member(message.mentions.users.first());
  member.removeRole(role).then(member => client.channels.get("277846143784714240").sendMessage(`${member.user.username} been bounced!`));
  member.removeRole(role2).then(member => client.channels.get("277846143784714240").sendMessage(`${member.user.username} been bounced!`));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bounce"],
  permLevel: 0,
};

exports.help = {
  name: "Bounce",
  description: "Kicks player out the club",
  usage: "bounce <user>",
};
