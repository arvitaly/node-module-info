var normalizedFullPath = require('./../get-normalized-full-path');
describe("GetNormalizedPath", () => {
    var f;
    beforeAll(() => {
        f = require('fixture2')();
    })
    it("when path have different slashes, should get full path and change slashes", () => {
        expect(
            normalizedFullPath(
                f("obj",
                    {
                        getFullPath: f("getFullPath", jasmine.createSpy().and.returnValue(
                            f("fullPath", "/a\b/c")
                        ))
                    }
                ))
        ).toBe(require("path").normalize(f("fullPath")));
    })
})