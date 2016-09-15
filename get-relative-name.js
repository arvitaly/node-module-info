module.exports = (object) => {
    var parsed = require('path').parse(object.getRelativePath());
    return ((parsed.dir ? parsed.dir + "/" : "") + parsed.name).replace(/\\/gi, "/");
}