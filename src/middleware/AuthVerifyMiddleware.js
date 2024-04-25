var jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    let token = req.headers['token-key'];

    jwt.verify(token, "secrectkey123456", function (err, decoded) {
        if (err) {
            res.status(401).json({ status: "unauthorized" });
        } else {
            next();
        }
    });
};
