
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const jwtMiddleware = require('../middlewares/jwtMiddleware');
router
    .route('/register')
        .post(userController.userRegister)

router 
    .route("/login")
        .post(userController.userLogin)



router 
    .route("/:id_users")
        .delete(userController.deleteAUser)
        .put(userController.updateAUser)




module.exports = router;
