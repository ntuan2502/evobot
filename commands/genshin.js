const { MessageEmbed } = require("discord.js");
const genshindb = require("genshin-db");

function characterEmbed(data) {
  return (embed = new MessageEmbed()
    .setAuthor(data.title)
    .setTitle(data.name)
    .setDescription(data.description)
    .setThumbnail(data.images.image)
    .setImage(data.images.cover1)
    .addField(data.weapontype + " - " + data.element, data.birthday)
    .addField(data.constellation, data.affiliation)
    .addField(
      "CV",
      `\`\`\`js
  \n English: ${data.cv.english}\n Chinese: ${data.cv.chinese}\n Japanese: ${data.cv.japanese}\n Korean: ${data.cv.korean}
  \`\`\``
    )
    .setColor("#F8AA2A")
    .setTimestamp());
}

module.exports = {
  name: "genshin",
  description: "talents/constellations/character/weapon/artifact + name (+ language); characters/weapons/artifacts (+ language)",
  execute(message, args) {
    try {
      var data = "";
      if (args[0] == "character") {
        if (!args[2]) data = genshindb.characters(args[1]);
        else
          data = genshindb.characters(args[1], {
            queryLanguages: args[2],
            resultLanguage: args[2]
          });

        if (data === undefined) {
          message.reply("404 not found!");
        } else {
          var embed = characterEmbed(data);
          message.channel.send(embed);
        }
      } else if (args[0] == "characters") {
        if (!args[1]) data = genshindb.characters("names", { matchCategories: true });
        else
          data = genshindb.characters("names", {
            matchCategories: true,
            queryLanguages: args[1],
            resultLanguage: args[1]
          });

        message.channel.send(data.toString().replace(/,/g, ", "));
      } else if (args[0] == "talents") {
        if (!args[2]) data = genshindb.talents(args[1]);
        else
          data = genshindb.talents(args[1], {
            queryLanguages: args[2],
            resultLanguage: args[2]
          });

        console.log(data);
        if (data === undefined) {
          message.reply("404 not found!");
        } else {
          var combat1 = new MessageEmbed().setAuthor(data.combat1.name).setDescription(data.combat1.info);
          if (data.combat1.description) combat1.setFooter(data.combat1.description);
          if (data.images.combat1 != "") combat1.setThumbnail(data.images.combat1);
          message.channel.send(combat1);
          var combat2 = new MessageEmbed().setAuthor(data.combat2.name).setDescription(data.combat2.info);
          if (data.combat2.description) combat2.setFooter(data.combat2.description);
          if (data.images.combat2 != "") combat2.setThumbnail(data.images.combat2);
          message.channel.send(combat2);
          var combat3 = new MessageEmbed().setAuthor(data.combat3.name).setDescription(data.combat3.info);
          if (data.combat3.description) combat3.setFooter(data.combat3.description);
          if (data.images.combat3 != "") combat3.setThumbnail(data.images.combat3);
          message.channel.send(combat3);

          if (data.combatsp) {
            var combatsp = new MessageEmbed()
              .setAuthor(data.combatsp.name)
              .setDescription(data.combatsp.info);
            if (data.combatsp.description) combatsp.setFooter(data.combatsp.description);
            if (data.images.combatsp != "") combatsp.setThumbnail(data.images.combatsp);
            message.channel.send(combatsp);
          }

          var passive1 = new MessageEmbed().setAuthor(data.passive1.name).setDescription(data.passive1.info);
          if (data.passive1.description) passive1.setFooter(data.passive1.description);
          if (data.images.passive1 != "") passive1.setThumbnail(data.images.passive1);
          message.channel.send(passive1);
          var passive2 = new MessageEmbed().setAuthor(data.passive2.name).setDescription(data.passive2.info);
          if (data.passive2.description) passive2.setFooter(data.passive2.description);
          if (data.images.passive2 != "") passive2.setThumbnail(data.images.passive2);
          message.channel.send(passive2);
          var passive3 = new MessageEmbed().setAuthor(data.passive3.name).setDescription(data.passive3.info);
          if (data.passive3.description) passive3.setFooter(data.passive3.description);
          if (data.images.passive3 != "") passive3.setThumbnail(data.images.passive3);
          message.channel.send(passive3);
        }
      } else if (args[0] == "constellations") {
        if (!args[2]) data = genshindb.constellations(args[1]);
        else
          data = genshindb.constellations(args[1], {
            queryLanguages: args[2],
            resultLanguage: args[2]
          });

        console.log(data);
        if (data === undefined) {
          message.reply("404 not found!");
        } else {
          var c1 = new MessageEmbed().setAuthor(data.c1.name).setDescription(data.c1.effect);
          if (data.images.c1 != "") c1.setThumbnail(data.images.c1);
          message.channel.send(c1);
          var c2 = new MessageEmbed().setAuthor(data.c2.name).setDescription(data.c2.effect);
          if (data.images.c2 != "") c2.setThumbnail(data.images.c2);
          message.channel.send(c2);
          var c3 = new MessageEmbed().setAuthor(data.c3.name).setDescription(data.c3.effect);
          if (data.images.c3 != "") c3.setThumbnail(data.images.c3);
          message.channel.send(c3);
          var c4 = new MessageEmbed().setAuthor(data.c4.name).setDescription(data.c4.effect);
          if (data.images.c4 != "") c4.setThumbnail(data.images.c4);
          message.channel.send(c4);
          var c5 = new MessageEmbed().setAuthor(data.c5.name).setDescription(data.c5.effect);
          if (data.images.c5 != "") c5.setThumbnail(data.images.c5);
          message.channel.send(c5);
          var c6 = new MessageEmbed().setAuthor(data.c6.name).setDescription(data.c6.effect);
          if (data.images.c6 != "") c6.setThumbnail(data.images.c6);
          message.channel.send(c6);
        }
      } else if (args[0] == "weapon") {
        var name = args[1].replace(/-/g, "");
        if (!args[2]) data = genshindb.weapons(name);
        else
          data = genshindb.weapons(name, {
            queryLanguages: args[2],
            resultLanguage: args[2]
          });

        console.log(data);
        if (data === undefined) {
          message.reply("404 not found!");
        } else {
          var effect = data.effect;
          for (let i = 0; i < data.r1.length; i++) {
            effect = effect.replace(
              `{` + i + `}`,
              "***" +
                data.r1[i] +
                "/" +
                data.r2[i] +
                "/" +
                data.r3[i] +
                "/" +
                data.r4[i] +
                "/" +
                data.r5[i] +
                "***"
            );
          }
          var embed = new MessageEmbed()
            .setAuthor(data.weapontype)
            .setTitle(data.rarity > 2 ? data.name + " - 90/90" : data.name + " - 70/70")
            .setFooter(data.description);

          if (data.rarity > 2)
            embed
              .addField("BaseATK", Math.round(data.stats(90).attack))
              .addField(
                data.substat,
                data.stats(90).specialized < 1
                  ? (parseFloat(data.stats(90).specialized) * 100).toFixed(1) + "%"
                  : Math.round(data.stats(90).specialized)
              )
              .addField(data.effectname, effect);
          else embed.addField("BaseATK", Math.round(data.stats(70).attack));

          embed.setThumbnail(data.images.icon);
          message.channel.send(embed);
        }
      } else if (args[0] == "weapons") {
        if (!args[1]) data = genshindb.weapons("names", { matchCategories: true });
        else
          data = genshindb.weapons("names", {
            matchCategories: true,
            queryLanguages: args[1],
            resultLanguage: args[1]
          });

        message.channel.send(data.toString().replace(/,/g, ", "));
      } else if (args[0] == "artifact") {
        var name = args[1].replace(/-/g, "");
        if (!args[2]) data = genshindb.artifacts(name, { matchCategories: true });
        else
          data = genshindb.artifacts(name, {
            matchCategories: true,
            queryLanguages: args[2],
            resultLanguage: args[2]
          });
        console.log(data);

        if (data === undefined) {
          message.reply("404 not found!");
        } else {
          var name = new MessageEmbed().setTitle(data.name);
          if (data["1pc"]) name.addField("1pc", data["1pc"]);
          if (data["2pc"]) name.addField("2pc", data["2pc"]);
          if (data["4pc"]) name.addField("4pc", data["4pc"]);
          message.channel.send(name);

          var flower = new MessageEmbed()
            .setAuthor(data.flower.relictype)
            .setTitle(data.flower.name)
            .setDescription(data.flower.description);
          if (data.images.flower != "") flower.setThumbnail(data.images.flower);
          message.channel.send(flower);
          var plume = new MessageEmbed()
            .setAuthor(data.plume.relictype)
            .setTitle(data.plume.name)
            .setDescription(data.plume.description);
          if (data.images.plume != "") plume.setThumbnail(data.images.plume);
          message.channel.send(plume);
          var sands = new MessageEmbed()
            .setAuthor(data.sands.relictype)
            .setTitle(data.sands.name)
            .setDescription(data.sands.description);
          if (data.images.sands != "") sands.setThumbnail(data.images.sands);
          message.channel.send(sands);
          var goblet = new MessageEmbed()
            .setAuthor(data.goblet.relictype)
            .setTitle(data.goblet.name)
            .setDescription(data.goblet.description);
          if (data.images.goblet != "") goblet.setThumbnail(data.images.goblet);
          message.channel.send(goblet);
          var circlet = new MessageEmbed()
            .setAuthor(data.circlet.relictype)
            .setTitle(data.circlet.name)
            .setDescription(data.circlet.description);
          if (data.images.circlet != "") circlet.setThumbnail(data.images.circlet);
          message.channel.send(circlet);
        }
      } else if (args[0] == "artifacts") {
        if (!args[1]) data = genshindb.artifacts("names", { matchCategories: true });
        else
          data = genshindb.artifacts("names", {
            matchCategories: true,
            queryLanguages: args[1],
            resultLanguage: args[1]
          });

        message.channel.send(data.toString().replace(/,/g, ", "));
      } else {
        message.reply("404 not found!");
      }
    } catch (e) {
      console.log(e);
      message.reply(e);
    }
  }
};
