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
    if(msg.content === "J!dice") {
      var randomNumber = Math.floor(Math.random()*tenArray.length);
      bot.createMessage(msg.channel.id, "You rolled a" + " " + tenArray[randomNumber] + ".");
    }
});

var ripArray = ['https://www.youtube.com/watch?v=g_W0VwVvp7Y','https://www.youtube.com/watch?v=j8BgyhLhtcU','https://www.youtube.com/watch?v=IdfFiF-K0iQ','https://www.youtube.com/watch?v=VwIDc1qR0ys','https://www.youtube.com/watch?v=PFHdWZRRwD4','https://www.youtube.com/watch?v=FscZZu5fk_M','https://www.youtube.com/watch?v=nQMnQTVqsNA','https://www.youtube.com/watch?v=Ai1j-z0TghQ','https://www.youtube.com/watch?v=KEXkgKoldmk'];

bot.on("messageCreate", (msg) => { //Random SilvaGunner high quality rip
    if(msg.content === "J!rip") {
      var randomRip = Math.floor(Math.random()*ripArray.length);
      bot.createMessage(msg.channel.id, "Here is a random rip:" + " " + ripArray[randomRip]);
    }
});

bot.on("messageCreate", (msg) => { //Basic ping pong command
    if(msg.content === "J!ping") {
        bot.createMessage(msg.channel.id, "Pong!");
    }
});



bot.connect(); // Get the bot to connect to Discord

