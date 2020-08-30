const { Discord, Client, RichEmbed, Attachment } = require("discord.js");
const client = new Client({disableEveryone: true});

client.on("ready", () => {

  console.log(`Logged in as ${client.user.username}!`);

  client.user.setActivity('d!help', { type: "Watching" })

});

client.on('guildMemberAdd', member => {
  try {
    let embed = new RichEmbed()
   .setTitle("Welcome To DiMo Bots ♚")
   .addField("Name:", member.user)
   .addField("User ID:", member.id)
   .addField("Member Count:", member.guild.memberCount)
   .setFooter(member.guild.name)
   .setTimestamp(member.guild.createdAt)
   .setColor("#15f153");

  member.guild.channels.get('748031098369605632').send(embed); 
  } catch (err) {
    console.log(err)
  }
});

client.on("guildMemberRemove", member => {
  try {
  let embed = new RichEmbed()
   .setTitle("Thanks for staying with DiMo Bots ♚")
   .addField("Name:", member.user)
   .addField("User ID:", member.id)
   .addField("Member Count:", member.guild.memberCount)
   .setFooter(member.guild.name)
   .setTimestamp(member.guild.createdAt)
   .setColor("#ff0000");

  member.guild.channels.get('748031098369605632').send(embed); 
  } catch (err) {
    console.log(err)
  }
});

client.on("message", async message => {
    
    let prefix = "$";

const args = message.content.slice(prefix.length).trim().split(/\s+/g);

const command = args.shift().toLowerCase();
    
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    

if(command === 'ping') {

message.channel.send(`Hoold on!`).then(m => {

    m.edit(`🏓  ::  **Pong!** (Roundtrip took: **` + (m.createdTimestamp - message.createdTimestamp) + `ms.** Heartbeat: **` + Math.round(client.ping) + `ms.**)`);

    });

 }

});

client.login("NzM3NzQyMzcwNjU2ODc4Njc1.XyByHw.tZ9kVqrGm5kLS2eOBZTrtf9n4_4");