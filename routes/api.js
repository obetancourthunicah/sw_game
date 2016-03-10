var express = require("express"),
    router = express.Router(),
    PlayerModel = require('../models/players.model.js');

module.exports = function(db){
  var playerModel = new PlayerModel(db);
  router.get('/obtenerplayers',
    function(req,res,next){
      playerModel.getAllPlayers(function(err, players){
        if(err){
          res.status(200).json({"players":null});
        }else{
          res.status(200).json({"players":players});
        }
      });
    }
  );

  router.post('/neuvoJugador',
    function(req,res,next){
        var txtAlias = req.body.alias || "No Alias",
            txtType = req.body.tipo || "villager";

        playerModel.saveNewPlayer(txtAlias,txtType,
            function(err, rst){
              if(err){
                res.status(400).json({"err":"No se pudo insertar Jugador"});
              }else{
                console.log(rst);
                res.status(200).json({"status":"ok","id":rst});
              }
            }
          );

    }
  );

  return router;
}
