var path = require('path');
module.exports = (object) => {
    var realPath;
    if (object.isAbsolute()) {
        realPath = object._modulePath;
    } else {
        if (object._caller) {

        } else {
            realPath = path.join(process.cwd(), object._modulePath);
        }
    }
    return path.resolve(realPath);
}