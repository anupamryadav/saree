var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
  
  $scope.showData = function( ){

  $http.get("data/index.json")
  .success(function (response) {
    $scope.product = response.records;
  });  


  $http.get("data/Mobile.json")
  .success(function (response) {
    $scope.Mobile = response.products;
  });  


$http.get("data/Boy.json")
  .success(function (response) {
    $scope.Boy = response.products;
  });  


  $http.get("data/Girls.json")
  .success(function (response) {
    $scope.Girls = response.products;
  });  

  $http.get("data/computer.json")
  .success(function (response) {
    $scope.computer = response.products;
  });  


  $http.get("data/Kitchenware.json")
  .success(function (response) {
    $scope.Kitchenware = response.products;
  });  

  $http.get("data/KidFootwear.json")
  .success(function (response) {
    $scope.KidFootwear = response.products;
  });  

  $http.get("data/Watches.json")
  .success(function (response) {
    $scope.Watches = response.products;
  });  

  $http.get("data/Sunglasses.json")
  .success(function (response) {
    $scope.Sunglasses = response.products;
  });  
  
 $http.get("data/Beauty.json")
  .success(function (response) {
    $scope.Beauty = response.products;
  });  

  }

});