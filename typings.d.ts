declare module "node-module-info" {
    interface Package {
        name: string;
        version: string;
    }
    interface Info {
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
}