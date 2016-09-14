var path = require('path');
module.exports = (object) => {
    if (object.isSystem()) {
        return null;
    }
    if (object.isRelative) {
        if (object._caller) {
            return object.getCallerInfo().getPackagePath();
        } else {

        }
    }
    if (object.isAbsolute()) {
        var pp = path.dirname(object.getNormalizedFullPath()).split(path.sep + 'node_modules');
        var rd = pp.pop();
        var fp = rd.split(path.sep);
        if (fp[1]) {
            return pp.join(path.sep + 'node_modules') + path.sep + 'node_modules' + path.sep + fp[1];
        } else {
            return pp.join(path.sep + 'node_modules');
        }
    }
    if (object.isDependence()) {
        try {

        } catch (e) {

        }
    }
}