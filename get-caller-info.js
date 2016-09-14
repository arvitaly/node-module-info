module.exports = (object) => {
    return require('.')(object._caller);
}