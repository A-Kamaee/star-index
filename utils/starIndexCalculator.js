var calculateStarIndex = function (repositories, next) {

    if (repositories == null || repositories.length == 0) {
        next(0);
        return;
    }

    repositories.sort(function (a, b) {
        return b.stargazers_count - a.stargazers_count;
    });

    for (var i = 0; i < repositories.length; i++) {
        var repository = repositories[i];
        if (repository.stargazers_count <= i || repository.stargazers_count == 0) {
            next(i);
            return;
        }
    }
    if (repositories[repositories.length - 1].stargazers_count >= repositories.length) {
        next(repositories.length);
        return;
    }
    next(0);
};

module.exports = calculateStarIndex;