// const twitchUser = require('../models/twitchUserModel');

// get single user
const getTwitchUser = async (req, res) => {
    const { login } = req.params;
    const user = await fetch('https://api.twitch.tv/helix/users', )

    if (!user){
        return res.status(404).json({error: 'No such user'});
    }

    res.status(200).json(user);
}