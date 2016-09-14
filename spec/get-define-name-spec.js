var fixtures = require("fixture2"), f;
var getDefineName = require('./../get-define-name');
describe("Get define name", () => {
    beforeEach(() => {
        f = fixtures();
    })
    it("when package info setted, should return full path", () => {
        expect(
            getDefineName({
                getPackageInfo: () => ({ name: f("packageName"), version: f("packageVersion") }),
                getRelativeName: () => (f("relativeName"))
            })
        ).toBe("npm!" + f("packageName") + "@" + f("packageVersion") + "#" + f("relativeName"));
    })
    it("when package info empty, should return relative name", () => {
        expect(
            getDefineName({
                getPackageInfo: () => null,
                getRelativeName: () => (f("relativeName"))
            })
        ).toBe(f("relativeName"));
    })
})