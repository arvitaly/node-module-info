describe("get relative name", () => {
    it("when path is not only file (have dir), should return full path without extension and replace slashes", () => {
        var p = ".\\..\\..\\name.js";
        expect(require('./../get-relative-name')({
            getRelativePath: () => p
        })).toBe("./../../name")
    })
})