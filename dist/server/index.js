import express from 'express';
const app = express();
app.get('/', function (req, res) {
    res.end();
});
// Listen on port 8080
const listener = app.listen(8080, function () {
    console.log('Listening on port ' + listener.address().port);
});
