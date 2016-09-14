module.exports = (object) => {
    return !object.isRelative() && !object.isSystem() && !object.isAbsolute() && (object._caller ? true : false);
}