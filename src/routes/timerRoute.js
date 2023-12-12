const express = require('express');
const router = express.Router();

const timerController = require('../controllers/timerController');


    router
        .route('/:id_users/timer')
          //  .post(timerController.storeATimer);

    module.exports = router;

