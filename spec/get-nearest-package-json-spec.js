var path = require('path');
var f = require('fixture2')();
var mock = require('mock2');
describe("Get nearest package json", () => {
    it("when package.json not found in current dir, should look to level up", () => {
        var mocks = {};
        mocks[f("resolvedPath", path.resolve("/a/b/package.json"))] = {};
        console.log(f("resolvedPath"))
        var getNearest = mock.require('./../get-nearest-package-json', mocks);
        f("getResolvedPath", path.resolve("/a/b/c/p.js"));
        expect(getNearest({
            getResolvedPath: () => f("getResolvedPath")
        })).toBe(path.resolve("/a/b/package.json"));
    })
})