exports.run = function(client, message, args) {
    let member = message.member;
    let remove = message.guild.roles.find("name", "OnDuty");
    let defualt = message.guild.roles.find("name", "OffDuty");
    member.addRole(defualt).then(member => message.channel.sendMessage(`Your are now off duty ${member.user}`)).catch(console.error);
    member.removeRole(remove).then(member => client.channels.get("279092117517762570").sendMessage(`${member.user.username} has go offduty at ${new Date()}`).catch(console.error));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['od','offduty','clockout'],
  permLevel: 3,
};

exports.help = {
  name: "OffDuty",
  description: "Add OffDuty role to a user.",
  usage: "OffDuty <user>",
};
