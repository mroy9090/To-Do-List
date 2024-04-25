const profilemodel =require('../model/ProfileModel');
var jwt = require('jsonwebtoken');



exports.createprofile = (req,res) => {
    let body = req.body;
    profilemodel.create(body)
       .then(data => {
            res.status(201).json({ status: true, data: data });
        })
       .catch(err => {
            res.status(400).json({ error: 'failed', err });
        });
}


exports.userlogin = (req, res) => {
    let username = req.body['username'];
    let mobilenumber = req.body['mobilenumber'];
    profilemodel.find({ username: username, mobilenumber: mobilenumber })
        .then(data => {
            if (data && data.length > 0) {

                //create auth token
                let playload={exp: Math.floor(Date.now() / 1000) + (24*60 * 60*60),data: data[0]}
                let token = jwt.sign(playload,'secrectkey123456');





                res.status(200).json({ status: true,token:token, data: data });
            } else {
                res.status(404).json({ status: false, message: "User not found" });
            }
        })
        .catch(err => {
            // Handle error
            res.status(500).json({ status: false, error: err.message });
        });
};


exports.selectprofile = (req, res) => {
    let username = "m@mail.com";
    let token = req.token; // Access the token from the request object
    profilemodel.find({ username: username})
        .then(data => {
            if (data && data.length > 0) {
                res.status(200).json({ status: true, token: token, data: data });
            } else {
                res.status(404).json({ status: false, message: "User not found" });
            }
        })
        .catch(err => {
            // Handle error
            res.status(500).json({ status: false, error: err.message });
        });
};
