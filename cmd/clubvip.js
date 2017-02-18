exports.run = function(client, message, args) {
  let verifyRole = message.guild.roles.find("name", "ClubOwners");
  if(!message.member.roles.has(verifyRole.id)) {
      return message.reply("You can not grant this right to this kind sir.").catch(console.error);
}
  let role = message.guild.roles.find("name", "ClubVIP");
  let member = message.guild.member(message.mentions.users.first());
  member.addRole(role).then(member => client.channels.get("277846143784714240").sendMessage(`Welcome, ${member.user} your have entered a NoRulesZone but please no spam or you'll be kicked out! Your are currently a VIP`))
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["clubVIP", "approvedVIP", "vip"],
  permLevel: 0,
};

exports.help = {
  name: "Club VIP",
  description: "Add player to Club as VIP",
  usage: "clubVIP <user>",
};
