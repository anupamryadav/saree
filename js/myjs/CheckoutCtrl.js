mainApp.controller('CheckoutCtrl', function ($scope, totalAmount,getImage) {
		$scope.totalAmount = totalAmount;
	

	        $scope.counter = 0;
        $scope.Cart = function() {
           alert("hello");
        };


    $scope.cart = [];
      $scope.detailProduct = [];
$scope.addToCart = function (x) {

            var found = false;
            $scope.cart.forEach(function (item) {
                if (item.id === x.id) {
                    item.quantity++;
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
