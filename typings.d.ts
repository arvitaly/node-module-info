declare module "node-module-info" {
    function NodeModuleInfo(modulePath: string, caller?: string): NodeModuleInfo.Info;
    namespace NodeModuleInfo {
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
                defineName: string,
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
            getDefineName: () => string;
            isAbsoulte: () => boolean;
            isDependence: () => boolean;
            isRelative: () => boolean;
            isSystem: () => boolean;
            getPackageInfo: () => Package;
        }
    }
    export = NodeModuleInfo;
}