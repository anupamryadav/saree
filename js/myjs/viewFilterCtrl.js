'use strict';
mainApp.controller('viewFilterCtrl', ['$scope','$uibModal','$uibModalInstance', function ($scope,$uibModal,$uibModalInstance) {

$scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
	}]);