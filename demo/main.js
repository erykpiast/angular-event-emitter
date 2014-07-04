angular
    .module('angular-event-emitter-example', [
        'angular-event-emitter.example'
    ])
    .controller('exampleCtrl', function($scope, example) {
        $scope.exampleResult = example();
    });