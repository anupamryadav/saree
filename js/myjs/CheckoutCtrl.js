mainApp.controller('CheckoutCtrl', function ($scope, totalAmount,getImage,$uibModal,$uibModalInstance) {
		$scope.totalAmount = totalAmount;
	

	        $scope.counter = 0;
            $scope.count =1;
        $scope.checkout = function() {
          $uibModal.open({
                templateUrl: 'cart.html',
                 controller: 'cart',
                size: 'lg'
              
            });
        };


    $scope.cart = [];
      $scope.detailProduct = [];

$scope.removeToCart = function (x) 
{
  $scope.count--;

       $scope.cart.forEach(function (item) {
                if (item.id === x.id) {
                    item.quantity--;
                    $scope.count =item.quantity;
                    found = true;
                }
            });

}

$scope.checkout = function () {

     $uibModal.open({
                templateUrl: 'cart.html',
                controller: 'cart',
                size: 'lg',
                
            });

}

$scope.ContinueShopping = function () 
{
    
}


$scope.addToCart = function (x) {



console.log($scope.cart);
            var found = false;
            $scope.cart.forEach(function (item) {
                if (item.id === x.id) {
                    item.quantity++;
                    $scope.count =item.quantity;
                    found = true;
                }
            });
            if (!found) {
                $scope.cart.push(angular.extend({quantity: 1}, x));
               
            }
        };


        $scope.getCartPrice = function () {
            var total = 0;
            $scope.cart.forEach(function (x) {            		
                total += x.effectivePrice * x.quantity;
            });
            return total;
        };
		 
$scope.remove = function(item) { 
  var index = $scope.cart.indexOf(item);
  $scope.cart.splice(index, 1);     
}

		$scope.detailProduct = getImage;


 $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };
  
	
		$scope.onSubmit = function () {
			$scope.processing = true;
		};

		$scope.stripeCallback = function (code, result) {
			$scope.processing = false;
			$scope.hideAlerts();
			if (result.error) {
				$scope.stripeError = result.error.message;
			} else {
				$scope.stripeToken = result.id;
			}
		};

		$scope.hideAlerts = function () {
			$scope.stripeError = null;
			$scope.stripeToken = null;
		};
	});

