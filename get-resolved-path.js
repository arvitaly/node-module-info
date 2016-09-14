module.exports = (object) => {
    try {
        return require.resolve(object.getFullPath());
    } catch (e) {
        return null;
    }
}