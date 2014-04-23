'use strict';

angular.module('meetup-example')
  .directive('simple', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/simple.tpl.html'
    }
  });
