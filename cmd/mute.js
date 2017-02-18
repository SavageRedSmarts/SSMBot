exports.run = function(client, message, args) {
  let verifyRole = message.guild.roles.find("name", "Redmod");
  if(!message.member.roles.has(verifyRole.id)) {
      return message.reply("You pleb, you don't have the permission to use this command.").catch(console.error);
};

  let role = message.guild.roles.find("name", "Muted");
  let one = message.guild.roles.find("name", "Novice Moderator");
  let two = message.guild.roles.find("name", "Experienced Moderator");
  let three = message.guild.roles.find("name", "Trusted Moderator");
  let four = message.guild.roles.find("name", "Supervisor");
  let five = message.guild.roles.find("name", "Intern Adminstrator");
  let six = message.guild.roles.find("name", "Board of Directors");
  // let seven = message.guild.roles.find("name", "Board of Executives");
  let eight = message.guild.roles.find("name", "Chief Administrative Officer");
  let nine = message.guild.roles.find("name", "Chief Executive Officer");
  let ten = message.guild.roles.find("name", "Developer");
  let eleven = message.guild.roles.find("name", "STAFF");
  let twelve = message.guild.roles.find("name", "Verified");
  let thirteen = message.guild.roles.find("name", "Supporter");
  let fourteen = message.guild.roles.find("name", "Noted Supporter");
  let fifteen = message.guild.roles.find("name", "Applicant I");
  let sixteen = message.guild.roles.find("name", "Applicant II");
  let member = message.guild.member(message.mentions.users.first());
  let reason = args.join(" ")
  member.addRole(role);
  member.removeRole(one);
  member.removeRole(two);
  member.removeRole(three);
  member.removeRole(four);
  member.removeRole(five);
  member.removeRole(six);
  // member.removeRole(seven);
  member.removeRole(eight);
  member.removeRole(nine);
  member.removeRole(ten);
  member.removeRole(eleven);
  member.removeRole(twelve);
  member.removeRole(thirteen);
  member.removeRole(fourteen);
  member.removeRole(fifteen);
  member.removeRole(sixteen);

client.channels.get("275471294810554370").sendMessage(`**USER**:
  User: ${member.user}
  Reason: ${reason}
  LOL`);


}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2,
};

exports.help = {
  name: "mute",
  description: "Mutes a user from speaking.",
  usage: "mute <user>",
};
