const UsersModel = require('../model/UsersModel');

exports.InsertData = (req, res) => {
    let body = req.body;
    UsersModel.create(body)
        .then(data => {
            res.status(201).json({ status: true, data: data });
        })
        .catch(err => {
            res.status(400).json({ error: 'failed', err });
        });
};

//read data
exports.ReadData=(req, res) => {
    let Query={};
    let projection="email firstname lastname password"
    UsersModel.find(Query, projection)
    .then(data => {
        res.status(201).json({ status: true, data: data });
    })
    .catch(err => {
        res.status(400).json({ error: 'failed', err });
    });

};


//update data

exports.UpdateData=(req,res)=>{
    
}

