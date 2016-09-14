declare module "node-module-info" {
    interface Package {
        name: string;
        version: string;
    }
    interface Info {
        getFullInfo: () => {
            fullPath: string,
            resolvedPath: string,
            rootPath: string,
            packagePath: string,
            relativePath: string,
            relativeName: string,
            isDependence: boolean,
            isSystem: boolean,
            isAbsolute: boolean,
            isRelative: boolean,
            packageInfo: Package,
            nearestPackageJSON: string
        },
        getCallerInfo: () => Info;
        getFullPath: () => string;
        getResolvedPath: () => string;
        getRootPath: () => string;
        getPackagePath: () => string;
        getRelativePath: () => string;
        getRelativeName: () => string;
        isAbsoulte: () => boolean;
        isDependence: () => boolean;
        isRelative: () => boolean;
        isSystem: () => boolean;
        getPackageInfo: () => Package;
    }
    function getInfo(modulePath: string, caller?: string): Info;
    export = getInfo;
}