const { MessageEmbed } = require("discord.js");
const math = require("mathjs");

module.exports = {
    name: 'calc',
    description: 'Calculator',
    execute(message, args) {
        try {
            var calc = args.join(" ");
            var result = math.evaluate(calc);
            if (isNaN(result)) {
                message.reply('please input a valid calculation!');
            } else {
                var embed = new MessageEmbed()
                    .setColor('#F8AA2A')
                    .setTitle('Math Calculation')
                    .addField('Input', `\`\`\`js\n${calc}\`\`\``)
                    .addField('Output', `\`\`\`js\n${result}\`\`\``)
                message.channel.send(embed);
            }
        } catch (e) {
            console.log(e);
            message.reply(e);
        }
    },
};