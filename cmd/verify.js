exports.run = function(client, message, args) {
      let verifyRole = message.guild.roles.find("name", "NeedVerify");
      if(!message.member.roles.has(verifyRole.id)) {
          return message.reply("You pleb, you don't have the permission to use this command.").catch(console.error);
    }
    let member = message.member;
    let accepted = message.guild.roles.find("name", "Verified");
    let defualt = message.guild.roles.find("name", "Supporter");
    member.addRole(accepted);
    member.removeRole(verifyRole);
    member.addRole(defualt);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: "verify",
  description: "Verify a user.",
  usage: "verify",
};
