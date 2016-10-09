mainApp.controller('MainCtrl', function($scope, $http, $routeParams,$uibModal,toaster) {
    $scope.loading = true;
    var paramValue = $routeParams.test;;
    $scope.totalDisplayed = 6
    $scope.users = [];
    $scope.filter = [];
    $scope.filter1 = [];
       $scope.filter2 = [];

    $scope.data = [];
    var urlval = "";


     toaster.pop({
                type: 'info',        
                body: 'Please Wait ...',
                timeout: 9000              
            });

        $scope.demo1 = {
                    min: 20,
                    max: 80
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

        $scope.viewProduct = function (x) {

              var found = false;
            $scope.cart.forEach(function (item) {
                if (item.id === x.id) {
                    item.quantity++;
                    found = true;
                }
            });
            if (!found) {
                $scope.cart=[];
                $scope.cart.push(angular.extend({quantity: 1}, x));
               
            }


          $uibModal.open({
                templateUrl: 'checkout.html',
                controller: 'CheckoutCtrl',
                size: 'lg',
                resolve: {
                    totalAmount: $scope.getCartPrice,
                    getImage: $scope.getImage
                    
                }
            });
        };

        $scope.getCartPrice = function () {
            var total = 0;
            $scope.cart.forEach(function (x) {
                total += x.mrp * x.quantity;
            });
            return total;
        };


 $scope.getImage = function () {
            var Image =[];
            $scope.cart.forEach(function (x) {
                Image.push(x);
            });
            return Image;
        };


        $scope.checkout = function () {
            $uibModal.open({
                templateUrl: 'checkout.html',
                controller: 'CheckoutCtrl',
                size: 'lg',
                resolve: {
                    totalAmount: $scope.getCartPrice,
                    getImage: $scope.getImage
                    
                }
            });
        };




    Parse.Cloud.run('hello', {
        methodname: $routeParams.test
    }, {
        success: function(result) {
            $scope.data = result.data.products;
            $scope.loading = false;
            $scope.$apply();
        },
        error: function(error) {
                     toaster.pop({
                type: 'error',        
                body: 'Unable to connect service, Please Reload page!',
                timeout: 4000

            });
            $scope.loading = false;
        }
    });
    $scope.getCategories = function() {
        return ($scope.data || []).map(function(w) {
            return w.subCategoryName;
        }).filter(function(w, idx, arr) {
            return arr.indexOf(w) === idx;
        });
    };
     $scope.getbrand = function() {
        return ($scope.data || []).map(function(w) {
            return w.brand;
        }).filter(function(w, idx, arr) {
            return arr.indexOf(w) === idx;
        });
    };

      $scope.getmrp = function() {
        return ($scope.data || []).map(function(w) {
            return w.mrp;
        }).filter(function(w, idx, arr) {
            return arr.indexOf(w) === idx;
        });
    };
    

    $scope.getMoreData = function() {
        $scope.totalDisplayed += 3;
    }
    $scope.filterByCategory = function(data) {
        return $scope.filter[data.subCategoryName] || noFilter($scope.filter);
    };

  $scope.filterBybrand = function(data) {
        return $scope.filter1[data.brand] || noFilter($scope.filter1);
    };

  $scope.getmrp = function(data) {
        return $scope.filter2[data.mrp] || noFilter($scope.filter2);
    };




    function noFilter(filterObj) {
        for (var key in filterObj) {
            if (filterObj[key]) {
                return false;
            }
        }
        return true;
    }
}).run(['$rootScope', function($scope) {
    $scope.scenario = 'Sign up';
    $scope.currentUser = Parse.User.current();
    $scope.signUp = function(form) {
        var user = new Parse.User();
        user.set("email", form.email);
        user.set("username", form.username);
        user.set("password", form.password);
        user.signUp(null, {
            success: function(user) {
                $scope.currentUser = user;
                $scope.$apply();
            },
            error: function(user, error) {
                alert("Unable to sign up:  " + error.code + " " + error.message);
            }
        });
    };
    $scope.logIn = function(form) {
        Parse.User.logIn(form.username, form.password, {
            success: function(user) {
                $scope.currentUser = user;
                $scope.$apply();
            },
            error: function(user, error) {
                alert("Unable to log in: " + error.code + " " + error.message);
            }
        });
    };
    $scope.logOut = function(form) {
        Parse.User.logOut();
        $scope.currentUser = null;
    };
}]);