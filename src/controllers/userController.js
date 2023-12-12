const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
// require('dotenv').config;
// console.log(process.env.JWT_KEY);
JWT_KEY='sdcvhjgvgfdjsbhbjkdhsgvhsvdfdsfbdhvcnbvfdbvfdvcfxxjvkfd'


exports.userRegister = async (req, res) => {
    try {
        let newUser = new User(req.body);
        let user = await newUser.save();
        res.status(201).json({ message: `User créé: ${user.email}` });        
    } 
    catch (error) {
        console.log(error);
        res.status(401).json({message: 'Requete invalide'});
    }
};

exports.userLogin = async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email});
        if(!user) {
            res.status(500).json({message: 'Utilisateur non trouvé'});
            return;
        }
        if(user.email === req.body.email && user.password === req.body.password) {
            const userData = {
                id: user._id,
                email: user.email,
                role: 'admin'
            };
            const token = await jwt.sign(userData, JWT_KEY, {expiresIn: "10h"});
            res.status(200).json({token});
            }
        else {
            res.status(401).json({message: "Email ou mot de passe incorrect."});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Une erreur s'est produite lors du traitement."})
    }
};


exports.deleteAUser = async (req,res) => {
    try {
        await User.findByIdAndDelete(req.params.id_users);
        res.status(202);
        res.json({message: "user supprimé"});
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: "Erreur serveur."});
    }

}



exports.updateAUser = async (req,res) => {
    const userUpdate = new User(req.body)

        try {
            const user = await User.findByIdAndUpdate(req.params.id_users, {email: userUpdate.email, password: userUpdate.password, role: userUpdate.role});
            res.status(203);
            res.json(user);
        } catch (error) {
            res.status(500);
            console.log(error);
            res.json({message: "Erreur serveur."});
        }
    
    }