'use strict';
mainApp.controller('viewFilterCtrl', function ($scope,$uibModal,$uibModalInstance) {

$scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
	});