/**
 * Created by Abouzar on 9/10/2016.
 */
var express = require('express');

var CalculateStarIndex = require('../utils/starIndexCalculator');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('everything is going to be alright if you work hard dear.')
});

var fetchRepositoriesByUsername = function(username, type, next) {

    var util = require("util");
    var url = util.format('https://api.github.com/users/%s/repos?type=%s', username, type);
    var fetchRequest = require('request');
    var options = {
        url: url,
        headers: {
            'User-Agent': 'star-index'
        }
    };
    var callback = function (error, result, body) {

        if (!error && result.statusCode == 200) {
            var repositories = JSON.parse(body);
            next(repositories);
        }
        else {
            var errorMessage = util.format("error stopped fetching repositories for username %s.", username);
            console.error(errorMessage, {"error": error, "result": result});
        }

    };
    fetchRequest(options, callback);
}

router.get("/repositories/:username", function (request, response, next) {

    var username = request.params.username;
    var type = request.query.type || "all";
    fetchRepositoriesByUsername(username, type, function(result) {
        response.json(result);
    });
});

router.get("/star-index/:username", function(request, response, next) {

    var username = request.params.username;
    var type = request.query.type || "all";
    fetchRepositoriesByUsername(username, type, function(repositories) {
        CalculateStarIndex(repositories, function(starIndex) {
            response.json(starIndex);
        });
    });
});

module.exports = router;