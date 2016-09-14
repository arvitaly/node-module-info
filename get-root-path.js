var path = require('path');
module.exports = (object) => {
    return path.dirname(object.getFullPath()).split(path.sep + 'node_modules').shift();
}