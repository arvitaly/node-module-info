var path = require('path');
var mock = require('mock2');
describe("GetNormalizedPath", () => {
    var f, getPackageInfo;
    beforeAll(() => {
        f = require('fixture2')();
    })
    it("when package.json existing in package path, should require it and return", () => {
        var mocks = {};
        mocks[path.normalize("a\\b\\c\\package.json")] = f("package1")        
        getPackageInfo = mock.require('./../get-package-info', mocks);
        expect(
            getPackageInfo(
                f("obj", {
                    getPackagePath: f("getPackagePath", jasmine.createSpy().and.returnValue(
                        f("packagePath", "a/b/c")
                    ))
                }))
        ).toBe(f("package1"));
    })
    it("when package.json non-existing in package path, should throw Error", () => {
        f("getPackagePath").and.returnValue("g/b/h/j/k");
        expect(getPackageInfo.bind(this, f("obj"))).toThrowError();
    })
})