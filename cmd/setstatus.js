exports.run = function(client, message, args) {
          const settings = require("../settings.json");
          let argsresult = args.join(" ");
          client.user.setStatus(argsresult);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4,
};

exports.help = {
  name: "setStatus",
  description: "Sets status of the bot.",
  usage: "setStatus <dnd/idle/invisible/online",
};
