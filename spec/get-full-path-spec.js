var f = require('fixture2')();
describe("Full path", () => {
    it("when caller setted and module path is absoulute, should be without caller", () => {
        expect(
            require('./../get-full-path')({ _caller: "/a", _modulePath: f("modulePath", "/b/c") })
        ).toBe(require('path').resolve(f("modulePath")));
    })
    it("when caller setted and module path is relative, should concat", () => {
        expect(
            require('./../get-full-path')({ _caller: f("_caller", "/a"), _modulePath: f("modulePath", "../b/c") })
        ).toBe(require('path').resolve(f("_caller"), f("modulePath")));
    })
})