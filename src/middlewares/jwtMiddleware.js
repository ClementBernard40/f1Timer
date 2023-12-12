const jwt = require('jsonwebtoken');
// const jwtKey = process.env.JWT_KEY;
// require('dotenv').config
JWT_KEY='sdcvhjgvgfdjsbhbjkdhsgvhsvdfdsfbdhvcnbvfdbvfdvcfxxjvkfd'


exports.verifyToken = async (req, res, next) => {
    try {
        const token = req.header['authorization'];
        if (token !== undefined) {
            const payload = await new Promise((resolve, reject) => {
                jwt.verify(token, JWT_KEY, (error, decoded) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve(decoded);
                    }
            });
                     
        });
        req.user = payload;
        next();

        } else {
            res.status(403).json({message: "Acces interdit: Token manquant"});
        }
    } catch {
        console.log(error);
        res.status(403).json({message: "Acces interdit: token invalide"});
    }
    
}