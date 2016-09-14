module.exports = (object) => {
    var packageInfo = object.getPackageInfo();
    return packageInfo ?
        "npm!" + packageInfo.name + "@" + packageInfo.version + "#" + object.getRelativeName() :
        object.getRelativeName();
}