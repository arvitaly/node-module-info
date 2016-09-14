var path = require('path');
var getNormalizedFullPath = require('./get-normalized-full-path');
module.exports = (modulePath, caller) => {
    return path.dirname(getNormalizedFullPath(modulePath, caller)).split(path.sep + 'node_modules').shift();
}