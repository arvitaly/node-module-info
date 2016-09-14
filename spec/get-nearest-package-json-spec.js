var path = require('path');
var f = require('fixture2')();
describe("Get nearest package json", () => {
    it("when package.json not found in current dir, should look to level up", () => {
        f("resolvedPath", path.resolve(__filename));
        var getNearest = require('./../get-nearest-package-json');
        f("getResolvedPath", f("resolvedPath"));
        expect(getNearest({
            getResolvedPath: () => f("getResolvedPath")
        })).toBe(path.resolve(__dirname + "./../package.json"));
    })
})