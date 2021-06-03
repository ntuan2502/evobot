const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "fm",
  description: "Fake Message",
  execute(message, args) {
    try {
      message.delete();
      message.channel.send(args.join(" "));
    } catch (e) {
      console.log(e);
      message.reply(e);
    }
  }
};
