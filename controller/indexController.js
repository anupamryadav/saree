var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
  
  $scope.showData = function( ){

  $http.get("data/index.json")
  .success(function (response) {
    $scope.product = response.records;
  });  


  $http.get("data/Mobile.json")
  .success(function (response) {
    $scope.product1 = response.products;
  });  

  }

});