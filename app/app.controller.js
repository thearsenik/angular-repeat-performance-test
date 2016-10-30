(function () {
  'use strict';

  angular.module('app').controller('AppController', AppController);

  function AppController() {
    var vm = this;
    var t0;

    vm.generate = generate;
    vm.stopTimer = stopTimer;
    init();

    function init () {
      vm.nbRepeat = 1000;
      vm.template = '<div>Div</div>';
      vm.stopTimerTemplate = '<div>{{appCtrl.stopTimer()}}</div>';
      vm.generatedList = [];
    }

    function generate() {
      vm.timeTaken = undefined;
      vm.generatedList.length = 0;
      if (angular.isNumber(vm.nbRepeat) && vm.template === ""){
        console.log("Erreur dans les paramètres ("+vm.nbRepeat+"/"+vm.template+")");
        return;
      }
      for (var i = 0; i < vm.nbRepeat; i++) {
        vm.generatedList.push({template: vm.template});
      }
      vm.generatedList.push({template: vm.stopTimerTemplate});

      t0 = performance.now();
    }

    function stopTimer(){
      var t1 = performance.now();
      if (vm.timeTaken === undefined) {
        vm.timeTaken = Math.round(t1 - t0);
      }
    }

  }
})();
