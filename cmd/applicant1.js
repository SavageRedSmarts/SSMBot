exports.run = function(client, message, args) {
  let verifyRole = message.guild.roles.find("name", "Redmod");
  if(!message.member.roles.has(verifyRole.id)) {
      return message.reply("You pleb, you don't have the permission to use this command.").catch(console.error);
};

  let role = message.guild.roles.find("name", "Applicant I");
  let member = message.guild.member(message.mentions.users.first());
  member.addRole(role).then(role => message.reply(`Added!`))
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["app1","applicant1"],
  permLevel: 2,
};

exports.help = {
  name: "applicant1",
  description: "Changes rank to applicant1",
  usage: "applicant1 <user>",
};
