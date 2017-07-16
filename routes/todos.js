const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
var db = mongojs('mongodb://alex:alex@ds161162.mlab.com:61162/inventory', ['chainsaw'])

//GET all entries
router.get('/todos', function(req, res, next){
    db.chainsaw.find(function(err, chainsaws){
        if(err){
            res.send(err);
        }
        res.json(chainsaws)
    });
});

//GET single entries
router.get('/todo/:id', function(req, res, next){
    db.chainsaw.findOne({_id: mongojs.objectId(req.params.id)}, function(err, chainsaw){
        if(err){
            res.send(err);
        }
        res.json(chainsaw)
    });
});

//POST single entry
router.post('/todo', function(req, res, next){
    //get todo from a form
    var todo = req.body;
    if(!todo.title){
        res.status(400);
    } else {
        //save only after validation
        db.todos.save(todo, function(err, todo){
            if(err){
            res.send(err);
        } 
        res.json(todo)
        });
    }
});

//DELETE single entry
router.delete('/todo/:id', function(req, res, next){
    //format: db.<collection>.action
    db.chainsaw.remove({_id: mongojs.objectId(req.params.id)}, function(err, chainsaw){
        if(err){
            res.send(err);
        }
        res.json(chainsaw)
    });
});

//update
router.put('/todo/:id', function(req, res, next){
    var todo = req.body;
    var updTodo = {};

    var update = function(){
        updTodo.title = todo.title;
    }

    db.chainsaw.update({_id: mongojs.objectId(req.params.id)}, updTodo, {}, function(err, chainsaw){
        if(err){
            res.send(err);
        }
        res.json(chainsaw)
    });
});








module.exports = router;