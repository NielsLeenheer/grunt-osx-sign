module.exports = function(grunt) {
    const sign = require('electron-osx-sign');

    grunt.registerMultiTask('sign', async function() {
        let done = this.async();

        sign(this.data, function(err) {
            if (err) {
                done(false);
                return;
            }

            done(true);
        });
    });
};
