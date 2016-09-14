var path = require('path');
var getInfo = require('./../index');
describe("Functional tests", () => {
    it("when get self info, should return right", () => {
        var info = getInfo("./../index", __filename);
        var fullInfo = info.getFullInfo();
        expect(Object.keys(fullInfo)).toEqual(
            ['fullPath', 'resolvedPath', 'rootPath', 'packagePath', 'relativePath', 'relativeName', 'defineName',
                'isDependence', 'isSystem', 'isAbsolute', 'isRelative', 'packageInfo', 'nearestPackageJSON']);
        var fullPath = require.resolve('./../index');
        var packageInfo = require('./../package.json');
        expect(info.getFullPath()).toBe(fullPath);
        expect(info.getResolvedPath()).toBe(fullPath);
        expect(info.getRootPath()).toBe(path.dirname(fullPath));
        expect(info.getPackagePath()).toBe(path.dirname(fullPath));
        expect(info.getRelativePath()).toBe("index.js");
        expect(info.getRelativeName()).toBe("index");
        expect(info.getDefineName()).toBe(`npm!${packageInfo.name}@${packageInfo.version}#index`);
        expect(info.isDependence()).toBe(false);
        expect(info.isSystem()).toBe(false);
        expect(info.isAbsolute()).toBe(false);
        expect(info.isRelative()).toBe(true);
        expect(info.getPackageInfo()).toEqual(packageInfo);
        expect(info.getNearestPackageJSON()).toBe(require.resolve("./../package.json"));
    })
})