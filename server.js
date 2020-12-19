const path = require("path");
const express = require("express");
const app = express();

app.use(express.static('./dist/pwingeiFrontendLite'));

app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: 'dist/pwingeiFrontendLite/' }
    );
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);