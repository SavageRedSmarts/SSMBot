exports.run = function(client, message, args) {
  let verifyRole = message.guild.roles.find("name", "Redmod");
  if(!message.member.roles.has(verifyRole.id)) {
      return message.reply("You pleb, you don't have the permission to use this command.").catch(console.error);
};

          if(message.mentions.users.size === 0) {
              return message.reply("Please mention a user to kick. You big dummy!")
          }
          let kickMember = message.guild.member(message.mentions.users.first());
          if(!kickMember) {
              return message.reply("That user doesn't exist you big dummy!")
          }
          if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
              return message.reply("I don't have god damn permission I place my money that this is my owners fault!").catch(console.error);
          }
          kickMember.kick().then(member => {
              message.reply(`${member.user.username} was succesfully kicked!`).catch(console.error);
          }).catch(console.error)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2,
};

exports.help = {
  name: "kick",
  description: "Kicks a user.",
  usage: "kick <user>",
};
