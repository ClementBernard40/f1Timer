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
        .delete(/*jwtMiddleware.verifyToken,*/userController.deleteAUser)
        .put(jwtMiddleware.verifyToken,userController.updateAUser)




module.exports = router;
