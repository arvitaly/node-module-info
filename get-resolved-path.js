var Module = require('module');
module.exports = (object) => {
    Module._resolveFilename(object._modulePath, object._caller, !!object._caller);
}