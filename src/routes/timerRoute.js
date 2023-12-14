const jwtMiddleware = require('../middlewares/jwtMiddleware');
const express = require('express');
const router = express.Router();

const timerController = require('../controllers/timerController');


    router
        .route('/:id_users/timer')
          .post(jwtMiddleware.verifyToken,timerController.storeATimer)
          .get(/*jwtMiddleware.verifyToken,*/timerController.getAllTimer);

    module.exports = router;

