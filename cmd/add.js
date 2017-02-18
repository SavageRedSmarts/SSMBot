exports.run = function(client, message, args) {
      let numArray = args.map(n=> parseInt(n));
      let total = numArray.reduce( (p, c) => p+c)
      message.channel.sendMessage(total).catch(console.error);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: "add",
  description: "Add numbers to get the sum.",
  usage: "add <number.",
};
