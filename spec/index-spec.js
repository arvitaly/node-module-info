var getInfo = require('./../index');
describe("Function tests", () => {
    it("when get self info, should return right", () => {
        var info = getInfo("./../index", __filename);
        expect(Object.keys(info.getFullInfo())).toEqual(['fullPath', 'resolvedPath', 'rootPath', 'packagePath', 'relativePath', 'relativeName', 'isDependence', 'isSystem', 'isAbsolute', 'isRelative', 'packageInfo', 'nearestPackageJSON'])
    })
})