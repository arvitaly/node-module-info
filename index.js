var save = require('./save');
var getFullPath = require('./get-full-path'),
    getResolvedPath = require('./get-resolved-path'),
    getRootPath = require('./get-root-path'),
    getPackagePath = require('./get-package-path'),
    getRelativePath = require('./get-relative-path'),
    getRelativeName = require('./get-relative-name'),
    getDefineName = require('./get-define-name'),
    isDependence = require('./is-dependence'),
    isAbsolute = require('./is-absolute'),
    isSystem = require('./is-system'),
    isRelative = require('./is-relative'),
    getPackageInfo = require('./get-package-info'),
    getNearestPackageJSON = require('./get-nearest-package-json'),
    getFullInfo = require('./get-full-info');
var factory = (modulePath, caller) => {
    var obj = {
        _caller: caller,
        _modulePath: modulePath,
        _saved: [],
        _funcs: {
            fullPath: getFullPath,
            resolvedPath: getResolvedPath,
            rootPath: getRootPath,
            packagePath: getPackagePath,
            relativePath: getRelativePath,
            relativeName: getRelativeName,
            defineName: getDefineName,
            isDependence: isDependence,
            isSystem: isSystem,
            isAbsolute: isAbsolute,
            isRelative: isRelative,
            packageInfo: getPackageInfo,
            nearestPackageJSON: getNearestPackageJSON
        }
    };
    for (var key in obj._funcs) {
        if (key.indexOf("is") === 0) {
            obj[key] = save.bind(this, obj, key, obj._funcs[key])
        } else {
            obj["get" + key.charAt(0).toUpperCase() + key.substr(1)] = save.bind(this, obj, key, obj._funcs[key])
        }
    }
    obj.getCallerInfo = save.bind(this, obj, "callerInfo", factory.bind(this, caller, undefined));
    obj.getFullInfo = save.bind(this, obj, "fullInfo", getFullInfo);
    return obj;
}
module.exports = factory;