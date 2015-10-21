module.exports = function (grunt) {
    'use strict';

    grunt.config.merge({
        watch: {
            copy: {
                files: 'js/**/*',
                tasks: ['copy']
            },
            less: {
                files: 'less/**/*',
                tasks: ['less']
            },
            jekyll: {
                files: ['dist/**/*', 'index.html', 'docs-assets/**/*'],
                tasks: ['uglify:docs', 'jekyll']
            },
            livereload: {
                options: { livereload: true },
                files: ['dist/**/*'],
            }
        }
    });
};
