var path = require('path');
module.exports = (object) => {
    var realPath;
    if (object.isAbsolute()) {
        realPath = object._modulePath;
    } else {
        if (object._caller) {
            if (object.isSystem()) {
                return null;
            }
            return object.getResolvedPath();
        } else {
            realPath = path.join(process.cwd(), object._modulePath);
        }
    }
    return path.resolve(realPath);
}