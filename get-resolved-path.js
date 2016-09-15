var Module = require('module');
module.exports = (object) => {
    return object._caller ? Module._resolveFilename(object._modulePath, {
        paths: Module._nodeModulePaths(require('path').dirname(object._caller)),
        filename: object._caller,
        id: object._caller
    }) : Module._resolveFilename(object._modulePath);
}