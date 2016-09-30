const Eris = require("eris");

var bot = new Eris.CommandClient("MjI2NDY3MDAzODY1NDk3NjAx.Cs86BA.r2knf59067vhLf6Eh4CdE0oOdh8", {}, {
    description: "hey that's pretty good",
    owner: "strawberry jams"
});

bot.on("ready", () => {
    console.log("Ready!");
});

var tenArray = ['1','2','3','4','5','6','7','8','9','10'];

bot.on("messageCreate", (msg) => { //Random dice roll one through ten
    if(msg.content === "j!dice") {
      var randomNumber = Math.floor(Math.random()*tenArray.length);
      bot.createMessage(msg.channel.id, "You rolled a" + " " + tenArray[randomNumber] + ".");
    }
});

bot.on("messageCreate", (msg) => { //Basic ping pong command
    if(msg.content === "j!ping") {
        bot.createMessage(msg.channel.id, "Pong!");
    }
});



bot.connect(); // Get the bot to connect to Discord
