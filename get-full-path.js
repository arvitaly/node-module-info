var path = require('path');
module.exports = (object) => {
    return path.resolve(object._caller, object._modulePath);
}