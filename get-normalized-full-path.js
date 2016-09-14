var path = require('path');
module.exports = (object) => {
    return path.normalize(object.getFullPath());
}