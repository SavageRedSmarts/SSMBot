exports.run = function(client, message, args) {
  let verifyRole = message.guild.roles.find("name", "Vice President");
  if(!message.member.roles.has(verifyRole.id)) {
      return message.reply("You pleb, you don't have the permission to use this command.").catch(console.error);
}
          const settings = require("../settings.json");
          let argsresult = args.join(" ");
          client.user.setGame(argsresult);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['game'],
  permLevel: 0,
};

exports.help = {
  name: "setGame",
  description: "set the game(status)",
  usage: "setGame <text>",
};
