exports.run = function(client, message, args) {
  client.user.setUsername(args.join(" ")).then(user => console.log(`My new username is ${user.username}`)).catch(console.error);
 }


 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: [],
   permLevel: 4,
 };

 exports.help = {
   name: "setUsername",
   description: "Add Chief Executives Officer to a user.",
   usage: "setUsername <username>",
 };
