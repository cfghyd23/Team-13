const express = require('express')
const router = express.Router()
const User = require('../models/Users')
import { loginController, createController } from '../controllers/loginCntrl';

const { body, validationResult } = require('express-validator');

router.post("/createuser", 
body('email', 'enter a valid email').isEmail(),
body('name', 'min length is 5').isLength({ min: 5 }),  
body('password',"min length is 5").isLength({ min: 5 }),  createController )

router.post("/loginuser", 
body('email', 'enter a valid email').isEmail(), loginController);

module.exports = router;