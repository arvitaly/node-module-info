var path = require('path');
var getFullPath = require('./../get-full-path');
describe("Get full path", () => {
    var f;
    beforeEach(() => {
        f = require('fixture2')();
        f("obj", {
            isRelative: f("isRelative", jasmine.createSpy()),
            isAbsolute: f("isAbsolute", jasmine.createSpy())
        });
    })
    it("when caller not setted and path is relative, should join process.cwd and modulePath and resolve it", () => {
        f("isRelative").and.returnValue(true);
        f("obj")._modulePath = f("relPath", "./test")
        expect(getFullPath(f("obj"))).toBe(path.resolve(path.join(process.cwd(), f("relPath"))));
    })
    it("when caller not setted and path is absolute, should resolve modulePath and return it", () => {
        f("isAbsolute").and.returnValue(true);
        f("obj")._modulePath = f("relPath", "/test/a/b/c")
        expect(getFullPath(f("obj"))).toBe(path.resolve(f("relPath")));
    })
    it("when caller setted and path is absolute, should resolve modulePath and return it", () => {
        f("isAbsolute").and.returnValue(true);
        f("obj")._modulePath = f("relPath", "/test/a/b/c");
        f("obj")._caller = "/g/h/d";
        expect(getFullPath(f("obj"))).toBe(path.resolve(f("relPath")));
    })
})