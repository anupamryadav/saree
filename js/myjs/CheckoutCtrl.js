mainApp.controller('CheckoutCtrl', function ($scope, totalAmount,getImage) {
		$scope.totalAmount = totalAmount;
	

	        $scope.counter = 0;
        $scope.Cart = function() {
           alert("hello");
        };


    $scope.cart = [];
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
                total += x.mrp * x.quantity;
            });
            return total;
        };
		 



		 	$scope.cart = getImage;

		console.log($scope.cart);

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
