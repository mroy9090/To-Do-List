const ToDoListModel =require('../model/ToDoListModel');
var jwt = require('jsonwebtoken');



exports.createtodolist = (req,res) => {
    let body = req.body;


    let TodoSubject=body['TodoSubject']
    let TodoDescription=body['TodoDescription']
    let UserName=req.headers['UserName']
    let TodoStatus="New"
    let TodoCreateDate=Date.now();
    let TodoUpdateDate=Date.now();

    let PostBody={
        UserName:UserName,
        TodoSubject:TodoSubject,
        TodoDescription:TodoDescription,
        TodoStatus:TodoStatus,
        TodoCreateDate:TodoCreateDate,
        TodoUpdateDate:TodoUpdateDate
    }






    ToDoListModel.create(PostBody)
       .then(data => {
            res.status(201).json({ status: true, data: data });
        })
       .catch(err => {
            res.status(400).json({ error: 'failed', err });
        });
}









exports.selecttodo = (req, res) => {
    let id = req.body['_id'];
    let token = req.token; // Access the token from the request object
    ToDoListModel.find({ _id: id})
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







exports.updatetodo = (req, res) => {
    let token = req.token; // Access the token from the request object
    let TodoSubject = req.body['TodoSubject'];
    let TodoDescription = req.body['TodoDescription'];
    let _id = req.body['_id'];
    let TodoUpdateDate = Date.now();

    let updateData = {
        TodoSubject: TodoSubject,
        TodoDescription: TodoDescription,
        TodoUpdateDate: TodoUpdateDate,
    };

    // Assuming ToDoListModel is a Mongoose model
    ToDoListModel.findOneAndUpdate({ _id: _id }, updateData, { new: true, upsert: true })
        .then(todo => {
            if (todo) {
                res.status(200).json({ status: true, token: token, data: todo });
            } else {
                res.status(404).json({ status: false, message: "Todo not found" });
            }
        })
        .catch(err => {
            // Handle error
            res.status(500).json({ status: false, error: err.message });
        });
};






exports.deletetodo = (req, res) => {
    let token = req.token;
    let _id = req.body['_id'];
    let TodoUpdateDate = Date.now();

    // Assuming ToDoListModel is a Mongoose model
    ToDoListModel.findOneAndDelete({ _id: _id })
        .then(todo => {
            if (todo) {
                res.status(200).json({ status: true, token: token, data: todo });
            } else {
                res.status(404).json({ status: false, message: "Todo not found" });
            }
        })
        .catch(err => {
            // Handle error
            res.status(500).json({ status: false, error: err.message });
        });
};
