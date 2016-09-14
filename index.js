var save = require('./save');
var getFullPath = require('./get-full-path');
var getResolvedPath = require('./get-resolved-path');
var getRootPath = require('./get-root-path');
var getPackagePath = require('./get-package-path');
var getRelativePath = require('./get-relative-path');
var getRelativeName = require('./get-relative-name');
var isDependence = require('./is-dependence');
var getPackageInfo = require('./get-package-info');
var getFullInfo = require('./get-full-info');
module.exports = (modulePath, caller) => {
    var obj = {
        _caller: caller,
        _modulePath: modulePath,
        _saved: [],
        getFullInfo: save(getFullInfo),
        getFullPath: save(obj, getFullPath),
    }
}
