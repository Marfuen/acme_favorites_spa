const express = require('express');
const app = express();
const path = require('path');
const {User, Thing, Favorite} = require("./db/index");

app.get('/app.js', (req, res, next)=> res.sendFile(path.join(__dirname, 'dist', 'main.js')));

app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, 'index.html')));

app.get('/users', (req,res,next) => {
  return User.findAll({include: [{model: Favorite, include: [Thing]}], order: ["name"]})
      .then(allUsers => {
        res.json(allUsers)
      })
      .catch(next);
})

app.get('/things', (req,res,next) => {
  return Thing.findAll({include: [{model: Favorite, include: [User]}], order: ["name"]})
      .then(allThings => res.json(allThings))
      .catch(next);
})

module.exports = app;
