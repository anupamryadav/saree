var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
  

  $http.get("data/index.json")
  .success(function (response) {
    $scope.product = response.records;
  });  


  $http.get("data/Mobile.json")
  .success(function (response) {
    $scope.product1 = response.products;
  });  

});
