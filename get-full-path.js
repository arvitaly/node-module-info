var Module = require('module');
var path = require('path');
module.exports = (object) => {
    var realPath;
    if (object.isAbsolute()) {
        realPath = object._modulePath;
    } else {
        if (object._caller) {
            if (object.isRelative()) {
                Module._resolveFilename
                realPath = path.join(path.dirname(object.getCallerInfo().getFullPath()), object._modulePath);
            }
            if (object.isDependence()) {
                realPath = path.join(object.getPackagePath(), object.getRelativeName())
            }
            if (object.isSystem()) {
                return null;
            }
        } else {
            realPath = path.join(process.cwd(), object._modulePath);
        }
    }
    return path.resolve(realPath);
}