(function () {
  'use strict';

  angular.module('app').directive('dynamicTemplate', dynamicTemplate);

  function dynamicTemplate($compile) {
    var linker = function (scope, element, attrs) {
      var content = scope.$eval(attrs.content);
      element.html(content);
      $compile(element.contents())(scope);
    };

    return {
      restrict: 'E',
      link: linker,
    };
  }
})();
