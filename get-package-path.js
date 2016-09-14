var path = require('path');
module.exports = (object) => {
    if (object.isSystem()) {
        return null;
    }
    if (object.isRelative && object._caller) {
        return object.getCallerInfo().getPackagePath();
    }
    var packagePath = object.getNearestPackageJSON();
    return packagePath ? path.dirname(packagePath) : null;
}