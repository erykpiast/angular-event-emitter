module.exports = function (config) {
    config.set({
        basePath: '../',

        frameworks: [ 'jasmine' ],

        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'dist/angular-event-emitter.js',
            'src/**/*.spec.js',
            'test/main.js'
        ],

        reporters: [ 'dots' ],
        colors: true,
        logLevel: config.LOG_INFO,
        
        port: 9876,
        autoWatch: false,

        browsers: [ 'PhantomJS' ],
        singleRun: true
    });
};