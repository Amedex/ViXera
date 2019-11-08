const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
  let day = message.guild.createdAt.getDate()
  let month = 1 + message.guild.createdAt.getMonth()
  let year = message.guild.createdAt.getFullYear()
   let sicon = message.guild.iconURL;
   let serverembed = new Discord.RichEmbed()
   .setTitle("```ViXer Commands```")
   .setFooter("Bot Coded by: xSkandal#0272")
   .setColor("#7289DA")
   .setThumbnail(sicon)
   .addField("-help", "Show all commands of the bot")
   .addField("-avatar", "Sends a message with your avatar")
   .addField("-ban", "Ban someone(only Owner")
   .addField("-coinflip", "Coinflip command")
   .addField("-inviteleaderboard", "Shows the leaderboard of invites")
   .addField("-kick", "kick someone(only Owner)")
   .addField("-mute", "mute someone")
   .addField("-nsfw", "nsfw gif")
   .addField("-poll", "Create a poll")
   .addField("-purge", "delete a number of messages")
   .addField("-say", "make the bot say your custom message")
   .addField("-serverinfo", "serverinfo")
   .addField("-unmute", "unmute someone")
   .addField("-userinfo", "userinfo of anyone you mention")
   .addField("-invite", "Bot will send you an invite link for the bot.")
   .setDescription("All ViXer Commands")
   message.channel.send(serverembed);

}

exports.help = {
    name: "serverinfo"
}