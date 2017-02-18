exports.run = function(client, message, args) {
  let verifyRole = message.guild.roles.find("name", "ClubOwners");
  if(!message.member.roles.has(verifyRole.id)) {
      return message.reply("You can not grant this right to this kind sir.").catch(console.error);
}
  let role = message.guild.roles.find("name", "ClubMember");
  let member = message.guild.member(message.mentions.users.first());
  member.addRole(role).then(member => client.channels.get("277846143784714240").sendMessage(`Welcome, ${member.user} your have entered a NoRulesZone but please no spam or you'll be kicked out!`))
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["clubm", "approve"],
  permLevel: 0,
};

exports.help = {
  name: "Club Member",
  description: "Add player to Club",
  usage: "clubm <user>",
};
