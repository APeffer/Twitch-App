require('dotenv').config();

const express = require('express');

const app = express();

app.use('/twitchapi/user', twitchUserRoutes)

app.listen(process.env.PORT, () => {
    console.log('Listening on port', process.env.PORT);
})