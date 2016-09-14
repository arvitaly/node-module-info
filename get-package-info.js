var path = require('path');
module.exports = (object) => {
    return object.getPackagePath() ? require(path.join(object.getPackagePath(), "package.json")) : null;
}