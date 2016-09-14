const modules = Object.keys(process.binding('natives'));
module.exports = (object) => {
    if (object.isAbsolute()) {
        return false;
    }
    if (object.isRelative()) {
        return false;
    }
    return modules.indexOf(object._modulePath) > -1;
}