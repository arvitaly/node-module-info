module.exports = (object, cb) => {
    var sc;
    if (object._saved.some((c) => {
        return c.func === cb ? sc = c : null;
    })) {
        return sc.value;
    } else {
        var value = cb(object);
        object._saved.push({ func: cb, value: value });
        return value;
    }
}