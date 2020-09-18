const express = require("express");

// instantiate our express-type application
const app = express();

// reference to the port the server will listen to
// either process for deployed environment OR|| local 3000
const PORT = process.env.PORT || 4000;

// middleware to decode/endcode characters
// and bring in JSON handling
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("../public/assets/css"));
app.use(express.static("../public/assets/js"));
app.use(express.static("../public"));


// export our app variable(express)
// reference to be used in ../routes/{apis}
require("../routes/apiroutes")(app);
require("../routes/htmlroutes")(app);

// this line ACTIVATES our server; begins listening for requests
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
