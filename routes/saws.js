const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
var db = mongojs('mongodb://alex:alex@ds161162.mlab.com:61162/inventory', ['chainsaw'])

// *NOTE* all routes have /api in front of them

//GET all entries
router.get('/saws', function(req, res, next){
    db.chainsaw.find(function(err, chainsaws){
        if(err){
            res.send(err);
        }
        res.json(chainsaws)
    });
});

//GET single entry
router.get('/saw/:id', function(req, res, next){
    db.chainsaw.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, chainsaw){
        if(err){
            res.send(err);
        }
        res.json(chainsaw)
    });
});

//POST single entry
router.post('/saw', function(req, res, next){
    //get todo from a form
    var saw = req.body;
    if(!saw.title){
        res.status(400);
    } else {
        //save only after validation
        db.saws.save(todo, function(err, todo){
            if(err){
            res.send(err);
        } 
        res.json(saw)
        });
    }
});

//DELETE single entry
router.delete('/saw/:id', function(req, res, next){
    //format: db.<collection>.action
    db.chainsaw.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, chainsaw){
        if(err){
            res.send(err);
        }
        res.json(chainsaw)
    });
});

//update
router.put('/saw/:id', function(req, res, next){
    var saw= req.body;
    var updTodo = {};

    var update = function(){
        updTodo.title = saw.title;
    }

    db.chainsaw.update({_id: mongojs.ObjectId(req.params.id)}, updTodo, {}, function(err, chainsaw){
        if(err){
            res.send(err);
        }
        res.json(chainsaw)
    });
});








module.exports = router;