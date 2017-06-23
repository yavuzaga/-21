// take express
var express = require('express');
//get the express router
var router = express.Router();
//filesystem api to load files on server
var fs = require("fs");

/* GET- REQUEST api/players  */
//req, requesthandling, res = response to send response
//http:localhost:3000/api/players
router.get('/', function (req, res) {
    //lookup for the incoming url parameters like favorites or search
    var favorites = req.query.favorites;
    var search = req.query.search;
    //read players.json file 
    fs.readFile('players.json', function (err, data) {
        if (err) {
            return console.log(err);
            res.send(err);
        }
            //if favorites is true
       else if (favorites == "true") {
            //parse the json data to Javascript object and use filter function which return all data with favorit = true
            var json = JSON.parse(data).filter(function (item) {
				//return only the objects with favorite = true
                return item.favorit === true;
            })
            //send the response json data
            res.send(json);
        }
            //if search parameter is set and min 1 character
            else if(search){
            //parse the json and use filter function which returns all items with name starting with the search Parameter like 'A'
            var json = JSON.parse(data).filter(function (item) {
				
                return item.name.startsWith(search)
            })
            //send the data
            res.send(json);
        }
        else {
            //send alls players
            res.send(JSON.parse(data));
        }

    });
});
//delete request registering like: url/api/players/5942d56c25df1dfb919ca133
//automatically recognize a HTTP - DELETE request
router.delete('/:_id',function (req, res) {
    //read the id parameter with params object and not with req.query
        var id = req.params._id;
    if (id) {
        //read the players.json file
        fs.readFile('players.json', function (err, data) {
		//error 
            if (err) {
                return console.log(err);
                res.send(err);
            }
			//no error
            else {
                //parse the json use filter function to return all id not equals the id in url parameter
               var deleted = JSON.parse(data).filter(function(item) {
                    return item._id !== id;
                });
                //write the new json in the file.
                fs.writeFile ('players.json', JSON.stringify(deleted), function(err) {
                    if (err) throw err;
                    console.log('complete');
                    res.send({"message": "Spieler mit der ID" + id + " wurde erfolgreich gelöscht"});
                });

            }

        });
    }
})
//registering http post requests urlhttP://localhost:3000/api/players
router.post("/", function(req, res) {
    res.send({"message": "Spieler wurde erfolgreich gespeichert"});
});
//register PUT request for url/api/players/id
router.put('/:_id',function (req, res) {
    var id = req.params._id;
    res.send({"message": "Spieler mit der ID" + id + " wurde erfolgreich geupdatet"});

});

//register the players.js as a module to be importable
module.exports = router;
