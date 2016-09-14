var fixtures = require('fixture2');
var isSystem = require('./../is-system');
describe("isSystem", () => {
    var f;
    beforeEach(() => {
        f = fixtures();
        f("obj", {
            _modulePath: "",
            isAbsolute: f("isAbsolute", jasmine.createSpy()),
            isRelative: f("isRelative", jasmine.createSpy())
        })
    })
    it("when module is absolute, should return false", () => {
        f("isAbsolute").and.returnValue(true);
        expect(isSystem(f("obj"))).toBe(false);
    })
    it("when module is relative, should return false", () => {
        f("isRelative").and.returnValue(true);
        expect(isSystem(f("obj"))).toBe(false);
    })
    it("when module is not absolute and not relative and exists in natives, should return true", () => {
        f("obj")._modulePath = "fs";
        expect(isSystem(f("obj"))).toBe(true);
    })
    it("when module is not absolute and not relative and not exists in natives, should return false", () => {
        f("obj")._modulePath = "fs_NST~ OPIT";
        expect(isSystem(f("obj"))).toBe(false);
    })
})