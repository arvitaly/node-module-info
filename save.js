module.exports = (object, key, cb) => {
    if (!object._saved[key]) {
        object._saved[key] = cb(object);
    }
    return object._saved[key];
}