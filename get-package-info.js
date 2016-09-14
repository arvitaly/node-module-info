var path = require('path');
module.exports = (object) => {
    return require(path.join(object.getPackagePath(), "package.json"));
}