var Module = require('module');
module.exports = (object) => {
    return Module._resolveFilename(object._modulePath, object._caller, !!object._caller);
}