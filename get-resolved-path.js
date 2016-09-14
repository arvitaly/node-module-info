module.exports = (object) => {
    return require.resolve(object.getFullPath());
}