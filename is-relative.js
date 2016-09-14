module.exports = (object) => {
    return object._caller ? object._modulePath.substr(0, 1) === "." : !object.isAbsolute();
}