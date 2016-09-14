var Module = require('module');
module.exports = (object) => {
    return Module._resolveFilename(object._modulePath, object._caller, !!object._caller);
}
/*Module._resolveFilename(modulePath, {
        paths: Module._nodeModulePaths(path.dirname(parent)),
        filename: parent,
        id: parent
    })*/