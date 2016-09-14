var getFullPath = require('./get-full-path');
var getResolvedPath = require('./get-resolved-path');
var getRootPath = require('./get-root-path');
var getPackagePath = require('./get-package-path');
var getRelativePath = require('./get-relative-path');
var getRelativeName = require('./get-relative-name');
var isDependence = require('./is-dependence');
var getPackageInfo = require('./get-package-info');
module.exports = (modulePath, caller) => {
    return {
        fullPath: getFullPath(modulePath, caller),
        resolvedPath: getResolvedPath(modulePath, caller),
        rootPath: getRootPath(modulePath, caller),
        packagePath: getPackagePath(modulePath, caller),
        relativePath: getRelativePath(modulePath, caller),
        relativeName: getRelativeName(modulePath, caller),
        isDependence: isDependence(modulePath, caller),
        packageInfo: getPackageInfo(modulePath, caller)
    }
} 