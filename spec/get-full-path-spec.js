var path = require('path');
var getFullPath = require('./../get-full-path');
describe("Get full path", () => {
    var f;
    beforeEach(() => {
        f = require('fixture2')();
        f("obj", {
            isRelative: f("isRelative", jasmine.createSpy()),
            isAbsolute: f("isAbsolute", jasmine.createSpy()),
            isDependence: f("isDependence", jasmine.createSpy()),
            isSystem: f("isSystem", jasmine.createSpy()),
            getCallerInfo: f("getCallerInfo", jasmine.createSpy())
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
    it("when caller setted and path is relative, should get caller full path dirname, concat with modulePath, resolve and return it", () => {
        f("isAbsolute").and.returnValue(false);
        f("isRelative").and.returnValue(true);
        f("getCallerInfo").and.returnValue({
            getFullPath: f("callerGetFullPath", jasmine.createSpy())
        })
        f("callerGetFullPath").and.returnValue(f("callerFullPath", "/a/b/c"));
        f("obj")._modulePath = f("relPath", "./../d/e/f");
        f("obj")._caller = f("callerFullPath");
        expect(getFullPath(f("obj"))).toBe(path.resolve(path.join(path.dirname(f("callerFullPath")), f("relPath"))));
    })
    it("when caller setted and is system, should return null", () => {
        f("obj")._caller = f("caller");
        f("isSystem").and.returnValue(true);
        expect(getFullPath(f("obj"))).toBe(null);
    })
    it("when caller setted and is dependence, should get package path and package info", () => {
        f("obj")._caller = f("caller");
        f("isSystem").and.returnValue(true);
        expect(getFullPath(f("obj"))).toBe(null);
    })    
})