const { MessageEmbed } = require("discord.js");
const axios = require("axios");

module.exports = {
  name: "weather",
  description: "Weather",
  execute(message, args) {
    var location = encodeURI(
      `http://api.openweathermap.org/data/2.5/weather?q=${args.join(
        " "
      )}&appid=5f61447f03ff50af5cd9ca16a62402ec&units=metric&lang=vi`
    );

    console.log(location);
    axios
      .get(location)
      .then(function (response) {
        // handle success
        console.log(response.data);

        var embed = new MessageEmbed()
          .setAuthor(response.data.name + ", " + response.data.sys.country)
          .setTitle(Math.round(response.data.main.temp) + "° C")
          .setDescription(response.data.weather[0].description)
          .setThumbnail("http://openweathermap.org/img/wn/" + response.data.weather[0].icon + "@2x.png");
        message.channel.send(embed);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        message.reply("404 not found!");
      })
      .then(function () {
        // always executed
      });
  }
};
