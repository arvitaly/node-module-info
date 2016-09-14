describe("Get resolved path", () => {
    it("when caller is setted, should return concated path", () => {
        var getResolvedPath = require('./../get-resolved-path');
        expect(getResolvedPath({ _caller: __filename, _modulePath: "./../index" })).toBe(require.resolve('./../index'));
    })
})