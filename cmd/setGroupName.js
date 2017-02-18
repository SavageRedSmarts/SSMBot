exports.run = function(client, message, args) {
  message.guild.setName(args.join(" ")).then(updated => console.log(`Updated guild name to ${guild.name}`)).catch(console.error);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 5,
};

exports.help = {
  name: "setGroupName",
  description: "Sets group name.",
  usage: "setGroupName <text>",
};
