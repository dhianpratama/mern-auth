const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const serveStatic = require('serve-static');
const path = require('path');

const routers = require("./routes");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api", routers);

if (process.env.NODE_ENV === 'production') {
  // Serve static revved files with uncoditional cache
  app.use(serveStatic(path.join(process.cwd(), 'client/build'), {
    index: false
  }));

  // Route any non API and non static file to React Client Router for SPA development
  app.use((req, res) => {
    res.sendFile(path.join(process.cwd(), 'client/build', 'index.html'));
  });  
}

// Fallback to 404
app.use((req, res) => {
  res.status(404);
  res.json({ message: '404 - Not Found' });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
