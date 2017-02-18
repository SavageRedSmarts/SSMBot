exports.run = function(client, message, args) {
    let member = message.member;
    let remove = message.guild.roles.find("name", "OffDuty");
    let defualt = message.guild.roles.find("name", "OnDuty");
    member.addRole(defualt).then(member => message.channel.sendMessage(`Your are now on duty ${member.user}`)).catch(console.error);
    member.removeRole(remove).then(member => client.channels.get("279092117517762570").sendMessage(`${member.user.username} has go onduty at ${new Date()}`).catch(console.error));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['clockin','onduty'],
  permLevel: 3,
};

exports.help = {
  name: "OnDuty",
  description: "Add OnDuty role to a user.",
  usage: "OnDuty <user>",
};
