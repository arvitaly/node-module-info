declare module "node-module-info" {
    interface Package {
        name: string;
        version: string;
    }
    interface Info {
        getFullPath: () => string;
        getResolvedPath: () => string;
        getRootPath: () => string;
        getPackagePath: () => string;
        getRelativePath: () => string;
        getRelativeName: () => string;
        isDependence: () => boolean;
        getPackageInfo: () => Package;
    }
}