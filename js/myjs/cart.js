'use strict';
mainApp.controller('cart', ['$scope','$uibModalInstance', function ($scope,$uibModalInstance) {
	//$scope.cartdetails = cartdetails;
 $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };
  

}]);