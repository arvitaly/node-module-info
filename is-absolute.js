module.exports = (object) => {
    return require('path').isAbsolute(object._modulePath);
}