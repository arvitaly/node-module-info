module.exports = (object) => {
    return require('path').parse(object.getRelativePath()).name;
}