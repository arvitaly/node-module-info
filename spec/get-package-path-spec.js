var getPackagePath = require('./../get-package-path');
describe("GetNormalizedPath", () => {
    var f;
    beforeAll(() => {
        f = require('fixture2')();
    })
    it("when path not inside package path, should previous package path", () => {
        expect(
            getPackagePath(
                f("obj",
                    {
                        getNormalizedFullPath: jasmine.createSpy().and.returnValue(
                            f("path", "a\\node_modules\\d\\node_modules\c")
                        )
                    }
                ))
        ).toBe("a\\node_modules\\d");
    })
    it("when path inside package path, should return package path", () => {
        f("obj").getNormalizedFullPath.and.returnValue(f("path", "\a\\node_modules\\b\\node_modules\\c\\d"))
        expect(getPackagePath(f("obj"))).toBe(require('path').normalize("a/node_modules/b/node_modules/c"))
    })
    it("when path inside root path, should return root path", () => {
        f("obj").getNormalizedFullPath.and.returnValue(f("path", "a\\node_modules\\b"))
        expect(getPackagePath(f("obj"))).toBe("a")
    })
})