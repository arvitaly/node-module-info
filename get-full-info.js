module.exports = (object) => {
    var fullInfo = {};
    for (var key in object._funcs) {
        if (key.indexOf("is") === 0) {
            fullInfo[key] = object[key](object);
        } else {
            fullInfo[key] = object["get" + key.charAt(0).toUpperCase() + key.substr(1)](object);
        }
    }
    return fullInfo;
} 