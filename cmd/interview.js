exports.run = function(client, message, args) {
  let verifyRole = message.guild.roles.find("name", "Redmod");
  if(!message.member.roles.has(verifyRole.id)) {
      return message.reply("You pleb, you don't have the permission to use this command.").catch(console.error);
};

  client.channels.get("275782634125131776").sendMessage(`@everyone Interviews at https://www.roblox.com/games/291748670/Interview-Center ! Host: ${args.join(" ")}`).then(role => message.reply("Shouted interview."));

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2,
};

exports.help = {
  name: "interview",
  description: "Send a interview message to staff announcements",
  usage: "interview <hostname>",
};
