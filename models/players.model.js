module.exports = function (db){
  var _playersCollection = db.collection('players');
  this.getEmptyPlayer = function(){
    return {
      "alias": "",
      "nivel":"rookie",
      "rol": "",
      "nivelHistory":[],
      "weapons": [],
      "skills": [],
      "bag": [],
      "bagItems": 0
      };
    } //getEmptyPlayer


    this.getEmptyLevelHistory = function(){
          return {
              "levelDate" : "",
              "levelGained": ""
          };
        }

  this. getEmptySkill= function(){
    return {
      "skill": "",
      "affects":"",
      "magicNeeded": 0,
      "autoTrigger": false
    };
  }

  this.getEmptyBag = function() {
    return { "item":"",
    "value": 0,
    "affects": "",
    "factor": 0
    };
  }
   this.getEmptyWeapon = function() {
    return { "weapon": "",
      "type" :"",
      "attackPower": 0,
      "defensePower": 0,
      "magicPower": 0
    };
  }

  this.saveNewPlayer = function(alias,playerType, handler){
    var newP= this.getEmptyPlayer();
    newP.alias =alias || "new Rooke";
    switch (playerType){
      case "knight":
        var sword = this.getEmptyWeapon();
        var shield = this.getEmptyWeapon();
        sword.weapon = "Wood Sword";
        sword.type="sword";
        sword.attackPower=10;
        sword.defensePower=5;
        sword.magicPower = 0;

        shield.weapon = "Wood Shield";
        shield.type="shield";
        shield.attackPower=3;
        shield.defensePower=10;
        shield.magicPower = 0;

        newP.weapons.push(sword);
        newP.weapons.push(shield);


      case "monk":
        var bag = this.getEmptyBag();
        bag.item = "Unguento de Sabila";
        bag.value = 10;
        bag.affects = "health";
        bag.factor = 5;
        newP.bag.push(bag);
        newP.bagItems = 1;
        newP.rol=playerType;
        break;

      default: //villager
      newP.rol = "villager";
      break;
    }//switch
    console.log("Inserting new Player");
    _playersCollection.insertOne(newP,
      function(err,rsl){
      if(err){
        console.log(err);
        handler(err, null);
      }else{
        handler(null, rsl);
      }
    });
  }

  this.getAllPlayers = function(handler){
    _playersCollection.find({}).toArray(function(err, players){
      if(err){
        console.log(err);
        handler(err, null);
      }else{
        handler(null, players);
      }
    })
  }
}
