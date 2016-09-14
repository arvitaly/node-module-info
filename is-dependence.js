module.exports = (object) => {
    return !object.isRelative() && !object.isSystem() && !object.isAbsoulte();
}