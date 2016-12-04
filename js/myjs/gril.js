'use strict';
mainApp.controller('MainCtrlfkg', ['$scope', '$http','toaster', '$routeParams', function($scope, $http,toaster, $routeParams) {
    $scope.loading = true;
    var paramValue = $routeParams.test;
    $scope.totalDisplayed = 6
    $scope.users = [];
    var urlval = "";
    $scope.data = [];
    $scope.productBaseInfo = [];
    $scope.filter = {};
    var url = paramValue;

      toaster.pop({
                type: 'info',        
                body: 'Please Wait ...',
                timeout: 9000

            });

    Parse.Cloud.run('hellog', {
        methodname: url
    }, {
        success: function(result) {
           // console.log(result);
            setTimeout(function() {
                if (result.data.productInfoList != null) {
                    for (var i = result.data.productInfoList.length - 1; i >= 0; i--) {
                        $scope.productBaseInfo.push(result.data.productInfoList[i].productBaseInfoV1);
                    };
                };
                if ($scope.productBaseInfo != null) {
                  //  for (var i = $scope.productBaseInfo.length - 1; i >= 0; i--) {
                    //    $scope.data.push($scope.productBaseInfo[i]);
                    //};

                    $scope.data = $scope.productBaseInfo;
                    $scope.$apply();
                    console.log($scope.data);
                    $scope.loading = false;
                };
            }, 1000);
            $scope.loading = false;
        },
        error: function(error) {
            //console.log("Oops! Couldn't POST from Cloud Code successfully..  :" + error)
           
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
            return w.productBrand;
        }).filter(function(w, idx, arr) {
            return arr.indexOf(w) === idx;
        });
    };
    $scope.getMoreData = function() {
        $scope.totalDisplayed += 3;
    }
    $scope.filterByCategory = function(data) {
        return $scope.filter[data.productBrand] || noFilter($scope.filter);
    };

    function noFilter(filterObj) {
        for (var key in filterObj) {
            if (filterObj[key]) {
                return false;
            }
        }
        return true;
    }
}]).run(['$rootScope', function($scope) {
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