const Discord = require("discord.js");
const client = new Discord.Client({ fetchAllMembers: true });
const settings = require("./settings.json");
const fs = require("fs");
const moment = require("moment");

const log = (msg) => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${msg}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./cmd/", (err, files) => {
  if (err) console.error(err);
  log(`Loading a total of ${files.length} commands.`);
  files.forEach(f => {
    let props = require(`./cmd/${f}`);
    log(`Loading Command: ${props.help.name}. :ok_hand:`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.on("message", msg => {
  if (!msg.content.startsWith(settings.prefix)) return;
  let command = msg.content.split(" ")[0].slice(settings.prefix.length);
  let params = msg.content.split(" ").slice(1);
  let perms = client.elevation(msg);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, msg, params, perms);
  }
});

client.on("ready", () => {
  log(`Guideclient: Ready to serve ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} servers.`);
});

client.on("guildMemberAdd", member => {
    let guild = member.guild;
    let role = guild.roles.find("name", "NeedVerify");
    client.channels.get("275466301454024704").sendMessage(`Welcome ${member.user} to <#168758648519131138>, and <#168763511780933632>. Once you complete and accept all Terms of being in SSM please say "S!verify"`)
    member.addRole(role)
});


client.on("error", console.error);
client.on("warn", console.warn);

client.login(settings.botToken);

client.reload = function(command) {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./cmd/${command}`)];
      let cmd = require(`./cmd/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });

      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.elevation = function(msg) {
  /* This function should resolve to an ELEVATION level which
     is then sent to the command handler for verification*/
  let permlvl = 0;
  let mod_role = msg.guild.roles.find("name", "Redmod");
  if(mod_role && msg.member.roles.has(mod_role.id)) permlvl = 2;
  let admin_role = msg.guild.roles.find("name", "STAFF");
  if(admin_role && msg.member.roles.has(admin_role.id)) permlvl = 3;
  if(msg.author.id === settings.ownerid) permlvl = 4;
  return permlvl;
};
