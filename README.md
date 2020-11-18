# grunt-osx-sign

> Grunt plugin for signing macOS binaries using electron-osx-sign

### Grunt
If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-osx-sign --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-osx-sign');
```


## The "sign" task

### Overview
In your project's Gruntfile, add a section named `sign` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    sign: {
        intel: {
            'app': "build/tmp/HTML5test-darwin-x64/HTML5test.app",
            'identity': 'Developer ID Application: HTML5test (JDSEI39D3E)',
            'hardenedRuntime': true,
            'entitlements': 'build/electron/entitlements.plist',
            'entitlements-inherit': 'build/electron/entitlements.plist'
        },

        arm: {
            'app': "build/tmp/HTML5test-darwin-arm64/HTML5test.app",
            'identity': 'Developer ID Application: HTML5test (JDSEI39D3E)',
            'hardenedRuntime': true,
            'entitlements': 'build/electron/entitlements.plist',
            'entitlements-inherit': 'build/electron/entitlements.plist'
        }
    }
})
```

For each app that you want to sign you can add a section. Each sections has a couple of options that you need to set, such as your development identity, entitlements and more. These options are documented in the [electron-osx-sign](https://github.com/electron/electron-osx-sign) project. Please read their documentation carefully. 
