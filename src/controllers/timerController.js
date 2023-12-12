const Timer = require("../models/timerModel");

exports.storeATimer = async (req,res) => {
    try {

        //const post = await Post.findById(req.params.id_post)
        const newTimer = new Timer({...req.body, users_id: req.params.id_users});
        
            try {
                const timer = await newTimer.save();
                res.status(201);
                res.json(timer);
            } catch (error) {
                console.log(error);
                res.status(500);
                res.json({message: "Erreur serveur.(db"});
            }
        
        
    } catch (error) {
        console.log(error);
        res.status(500);
        res.json({message: "Erreur serveur(utilisateur inexistant)."});
    } 
}