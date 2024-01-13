const express = require('express');

const router = express.Router();

const { getUser } = require('../controllers/twitchController')

// get user
router.get('/:id', getTwitchUser);