import express from 'express';
import cors from 'cors';
import router from './routes.js';
const app = express();
app.use(cors());
app.use(express.json());
router(app);
// Listen on port 8080
const listener = app.listen(8080, function () {
    console.log('Listening on port ' + listener.address().port);
});
