'use strict';
mainApp.controller('cart', function ($scope,$uibModalInstance) {
	//$scope.cartdetails = cartdetails;
 $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };
  

});