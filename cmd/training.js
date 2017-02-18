exports.run = function(client, message, args) {
  let verifyRole = message.guild.roles.find("name", "Redmod");
  if(!message.member.roles.has(verifyRole.id)) {
      return message.reply("You pleb, you don't have the permission to use this command.").catch(console.error);
};

  client.channels.get("275782634125131776").sendMessage(`@everyone Trainings at https://www.roblox.com/games/292007092/SSM-Training-Center# ! Host: ${args.join(" ")}`);

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2,
};

exports.help = {
  name: "training",
  description: "Send training message to staff announcements",
  usage: "training <hostname>",
};



// 275782634125131776
