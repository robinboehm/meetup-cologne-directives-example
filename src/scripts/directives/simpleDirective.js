'use strict';

angular.module('meetup-example')
  .directive('simple', function () {
    return {
      restrict: 'E',
      //template: '<h1>Hello World!</h1>'
      templateUrl: 'views/simple.tpl.html'
    }
  });
