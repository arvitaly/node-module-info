var path = require('path');
module.exports = (object) => {
    return path.relative(object.getPackagePath(), object.getFullPath());
}