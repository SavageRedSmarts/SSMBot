exports.run = function(client, message, args) {
  let verifyRole = message.guild.roles.find("name", "Redmod");
  if(!message.member.roles.has(verifyRole.id)) {
      return message.reply("You pleb, you don't have the permission to use this command.").catch(console.error);
};

          if(!message.member.hasPermission("BAN_MEMBERS")) return;
          let banMember = message.guild.member(message.mentions.users.first());
          if(!banMember) {
              return message.reply("That user doesn't exist you big dummy!")
          }
          if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
               return message.reply("I don't have god damn permission I place my money that this is my owners fault!").catch(console.error);
          }
          banMember.ban().then(member => {
              message.reply(`${member.user.username} was succesfully banned!`).catch(console.error);
          }).catch(console.error)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2,
};

exports.help = {
  name: "ban",
  description: "Ban member from discord",
  usage: "ban <user>",
};
