/**
 * Created by Abouzar on 9/10/2016.
 */

var test = require('tape');
var CalculateStarIndex = require('../utils/starIndexCalculator');

test('null-repositories', function(t) {
    var repositories = null;
    CalculateStarIndex(repositories, function(starIndex) {
        t.equal(0, starIndex, "if repositories sent to this function is null then star index calculated by this function should be zero");
        t.end();
    });
});

test ('zero-repositories', function(t) {
    var repositories = [];
    CalculateStarIndex(repositories, function(starIndex) {
        t.equal(0, starIndex, "if developer has no repositories his star-index would be zero.");
        t.end();
    })
});

test('ont-repository-star-fifty', function(t) {
    var repositories = [{name: "First Repository", stargazers_count: 50}];
    CalculateStarIndex(repositories, function(starIndex) {
        t.equal(1, starIndex, 'if developer has only one repository which started by about 50 other developer, his star-index is equal to one')
        t.end();
    });
});

test('one-repository-star-one', function (t) {
    var repositories = [{name: "First Repository", stargazers_count: 1 }];
    CalculateStarIndex(repositories, function(starIndex) {
        t.equal(1, starIndex, 'if developer has only one repository which started by only one developer, his star-index is equal to one');
        t.end();
    });
});

test('one-repository-star-zero', function(t) {
    var repositories = [{name: "First Repository", stargazers_count: 0}];
    CalculateStarIndex(repositories, function(starIndex) {
        t.equal(starIndex, 0, 'if developer has only one repository which started by no one, his star-index is equal to zero.');
        t.end();
    })
});

test('two-repository-star-zero', function(t) {
    var repositories = [{name: "First Repository", stargazers_count: 0}, {name: "Second Repository", stargazers_count: 0}];
    CalculateStarIndex(repositories, function(starIndex) {
        t.equal(starIndex, 0, 'if developer has two repository which both of them has no star, his star-index is equal to zero.');
        t.end();
    });
});

test('two-repository-star-three-five', function(t) {
    var repositories = [{name: "First Repository", stargazers_count:3}, {name: "Second Repository", stargazers_count: 5}];
    CalculateStarIndex(repositories, function(starIndex) {
        t.equal(starIndex, 2, 'if developer has two repository with three and five star respectively, his star-index would be two.');
        t.end();
    });
});

test('two-repository-star-five-three', function(t) {
    var repositories = [{name: "First Repository", stargazers_count:5}, {name: "Second Repository", stargazers_count: 3}];
    CalculateStarIndex(repositories, function(starIndex) {
        t.equal(starIndex, 2, 'if developer has two repository with five and three star respectively, his star-index would be two.');
        t.end();
    });
});

test('two-repository-star-one-three', function(t) {
    var repositories = [{name: "First Repository", stargazers_count: 1}, {name: "Second Repository", stargazers_count: 3}];
    CalculateStarIndex(repositories, function(starIndex) {
        t.equal(starIndex, 1, 'if developer has two repository with one and three star respectively, his star-index would be one.');
        t.end();
    });
});

test('two-repository-star-three-one', function(t) {
    var repositories = [{name: "First Repository", stargazers_count: 3}, {name: "Second Repository", stargazers_count: 1}];
    CalculateStarIndex(repositories, function(starIndex) {
        t.equal(starIndex, 1, 'if developer has two repository with one and three star respectively, his star-index would be one.');
        t.end();
    });
});

test('two-repository-star-zero-three', function(t) {
    var repositories = [{name: "First Repository", stargazers_count: 0}, {name: "Second Repository", stargazers_count: 3}];
    CalculateStarIndex(repositories, function(starIndex) {
        t.equal(starIndex, 1, 'if developer has two repository with one and three star respectively, his star-index would be one.');
        t.end();
    });
});

test('two-repository-star-three-zero', function(t) {
    var repositories = [{name: "First Repository", stargazers_count: 3}, {name: "Second Repository", stargazers_count: 0}];
    CalculateStarIndex(repositories, function(starIndex) {
        t.equal(starIndex, 1, 'if developer has two repository with one and three star respectively, his star-index would be one.');
        t.end();
    });
});

test('three-repository-star-ten-seven-three', function(t) {
    var repositories = [{name: "First Repository", stargazers_count: 10}, {name: "Second Repository", stargazers_count: 7}, {name: "Third Repository", stargazers_count: 3}];
    CalculateStarIndex(repositories, function(starIndex) {
        t.equal(starIndex, 3, 'if developer has three repository with ten, seven and three star respectively, his star-index would be three.');
        t.end();
    });
});

test('three-repository-star-three-seven-ten', function(t) {
    var repositories = [{name: "First Repository", stargazers_count: 3}, {name: "Second Repository", stargazers_count: 7}, {name: "Third Repository", stargazers_count: 10}];
    CalculateStarIndex(repositories, function(starIndex) {
        t.equal(starIndex, 3, 'if developer has three repository with ten, seven and three star respectively, his star-index would be three.');
        t.end();
    });
});

test('three-repository-three-three-three', function(t) {
    var repositories = [{name: "First Repository", stargazers_count: 3}, {name: "Second Repository", stargazers_count: 3}, {name: "Third Repository", stargazers_count: 3}];
    CalculateStarIndex(repositories, function(starIndex) {
        t.equal(starIndex, 3, 'if developer has three repository with three star, his star-index would be three too.');
        t.end();
    });
});

test('three-repository-star-ten-seven-two', function(t) {
    var repositories = [{name: "First Repository", stargazers_count: 10}, {name: "Second Repository", stargazers_count: 7}, {name: "Third Repository", stargazers_count: 2}];
    CalculateStarIndex(repositories, function(starIndex) {
        t.equal(starIndex, 2, 'if developer has three repository with ten, seven and two star respectively, his star-index would be two.');
        t.end();
    });
});

test('three-repository-star-one-seven-two', function(t) {
    var repositories = [{name: "First Repository", stargazers_count: 1}, {name: "Second Repository", stargazers_count: 7}, {name: "Third Repository", stargazers_count: 2}];
    CalculateStarIndex(repositories, function(starIndex) {
        t.equal(starIndex, 2, 'if developer has three repository with one, seven and two star respectively, his star-index would be two.');
        t.end();
    });
});