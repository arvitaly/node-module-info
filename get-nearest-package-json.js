var path = require('path');
module.exports = (object) => {
    var splittedPath = object.getResolvedPath().split(path.sep);
    var i = 0, packagePath;
    while (i < splittedPath.length) {
        splittedPath.pop();
        try {
            packagePath = path.join(splittedPath.join(path.sep), "package.json");
            console.log(packagePath)
            require.resolve(packagePath);
            break;
        } catch (e) {
            console.log(e)
            packagePath = null;
        }
        i++;
    }
    return packagePath;
}