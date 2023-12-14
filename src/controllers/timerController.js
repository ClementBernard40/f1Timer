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

exports.getAllTimer = async (req,res) => {

    try {
        const timers = await Timer.find({users_id: req.params.id_users});
        res.status(200);
        res.json(timers);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: "Erreur serveur."});
    }
}


exports.getAvgTimer = async (req,res) => {
    let time = 0
    let nbtime = 0
    try {
        const timers = await Timer.find({users_id: req.params.id_users});
        if ( timers.length == 0) {
            res.status(200);
            res.json('impossible de calculer la moyenne, il n\'y a pas de temps enregistré');
        } else {
            for (let i = 0; i < timers.length; i++) {
                const timer = timers[i];
                time = time + timer.time
                nbtime = i+1
            }

            let avg = time/nbtime;
        
                res.status(200);
                res.json(avg);
        }
    
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: "Erreur serveur."});
    }

}