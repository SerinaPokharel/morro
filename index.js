const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.listen(3000, () => {

  console.log("Application started and Listening on port 3000");
});

// server css as static
app.use(express.static(__dirname));

// get our app to use body parser 
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/app/index.html");
});

app.get("/visual-arts", (req, res) => {
  res.sendFile(__dirname + "/app/visual_arts.html");
});

app.get("/design-arts", (req, res) => {
    res.sendFile(__dirname + "/app/design_arts.html");
  });

  app.get("/media-arts", (req, res) => {
    res.sendFile(__dirname + "/app/media_arts.html");
  });

  app.get("/white-man", (req, res) => {
    res.sendFile(__dirname + "/details/white-man.html");
  });

  app.get("/prayer", (req, res) => {
    res.sendFile(__dirname + "/details/prayer.html");
  });

  app.get("/souk", (req, res) => {
    res.sendFile(__dirname + "/details/souk.html");
    });

   app.get("/festival", (req, res) => {
    res.sendFile(__dirname + "/details/festivals.html");
    });

   app.get("/bou", (req, res) => {
    res.sendFile(__dirname + "/details/bou.html");

    });

    app.get("/bahia", (req, res) => {
      res.sendFile(__dirname + "/details/bahia.html");
  
      });



app.post("/", (req, res) => {
  var subName = req.body.yourname
  var subEmail = req.body.youremail;
 res.send("Hello " + subName + ", Thank you for subcribing. You email is " + subEmail);
});
