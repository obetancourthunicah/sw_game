var MC = require("mongodb").MongoClient;
var mUrl = "mongodb://localhost:27017/game";
var PlayersModel = require("./models/players.model.js");


MC.connect(mUrl, function(err, db){
  if(err){
    console.log(err);
    process.exit(1);
  }else{
    var PM = new PlayersModel(db);
    //PM.saveNewPlayer("OJBA2","king",function(err, rsl){
     PM.getAllPlayers(function(err, rsl){
      console.log(err||rsl);
      db.close();
    });
  }

});
