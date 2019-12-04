var express = require('express'),
    app = express(),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    Users = [
        {name:'Alex' , age: 20},
        {name: 'Bob' , age: 21}
    ];


app.listen(3000);
//__dirname:current directory path
app.use(express.static(__dirname +'/public'));
app.use(bodyParser.json());

//Get /hello
app.get('/hello',function getHello(req,res,next){
    if(Math.random()<0.5){
        res.send('Hello World');
    }
    //if don't call res.send,request will be hanging
    //pass the request to next middleware
    next();

});

app.get('/hello', function getHello(req,res,next){
    res.send('<p style ="color:red">Not authorized!</p>');
});

app.get('/users',function getUsers(req,res,next){
    res.send('Users');
});

//POST /users

app.post('/users',function postUsers(req,res,next){
    var user = req.body;
    Users.push(user);
    res.send(Users);
});
//PUT /users
app.put('/users',function putUsers(req,res,next){
    var user = req.body;
    //your code start here====这是问啥呢
    var oldUser = Users.findIndex(function findByName(u){
        return u.name === user.name;
    });
    if(index !== -1){
        User.splice(index,1,user);
    }else{
        Users.push(user);
    }
    res.send(Users);
});

//DELETE /users/bob
app.delete('/users/:name', function deleteByName(req,res,next){
    var name = req.params.name,
        index = Users.findIndex(function fundByName(u){
            return u.name === name;
        });
        index >-1 && User.splice(index,1);
        res.send(Users);
});


