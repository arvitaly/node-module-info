# node-module-info [![npm version](https://badge.fury.io/js/node-module-info.svg)](https://badge.fury.io/js/node-module-info)[![Build Status](https://travis-ci.org/arvitaly/node-module-info.svg?branch=master)](https://travis-ci.org/arvitaly/node-module-info)[![Coverage Status](https://coveralls.io/repos/github/arvitaly/node-module-info/badge.svg?branch=master)](https://coveralls.io/github/arvitaly/node-module-info?branch=master)
Full information about module in NodeJS.

# Install

    npm install node-module-info --save

# Example

    var getInfo = require("node-module-info");
    getInfo("./module1", "/path/to/caller/");
    getInfo("dependence1/file1", "/path/to/caller/");
    getInfo("/absolute/file/of/module", "/path/to/caller/");
    getInfo("/module/without/caller");

# Usage

    Lib supports:

    getCallerInfo: () => Info; //return same info about caller
    getFullPath: () => string; //get full path (resolved only for dependence)
    getResolvedPath: () => string;  //resolve module path, throw error for non-existing
    getRootPath: () => string; //root path of app (get first path, before first node_modules)
    getPackagePath: () => string; //package path for current module
    getRelativePath: () => string; //relative path from package path
    getRelativeName: () => string; //relative path without extension
    getDefineName: ()=>string;//name for use with builders, `npm!package@version#path`
    isAbsoulte: () => boolean; //is module path absolute
    isDependence: () => boolean; //is dependence of caller (if caller setted) or false
    isRelative: () => boolean; //is starts with "." if caller setted, or if not absolute
    isSystem: () => boolean; //if caller setted check for internal modules
    getPackageInfo: () => { //info from package.json from package path
        name: string;
        version: string;
        ///...full info
    };

# Typings

    export interface Info {
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
    export interface Package {
        name: string;
        version: string;
    }

# Tests

    npm install
    npm test
