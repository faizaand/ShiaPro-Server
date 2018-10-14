var fs = require('fs');

// Instead of manually going in and adding all of the new route files
// to my app.js, I opted to have it dynamically require all of the route
// files in our 'routes/' directory.

module.exports = function(app) {
    fs.readdirSync(__dirname).forEach(function(file) {
        if(file == "index.js") return;
        var name = file.substr(0, file.indexOf('.'))
        require('./' + name)(app)
    })
}
