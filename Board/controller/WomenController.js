var myapp = angular.module('sampleapp', [ ]);

myapp.controller('samplecontoller', function ($scope,$http) {

  
 $scope.showData = function( ){

 $scope.curPage = 0;
 $scope.pageSize = 45;


  $http.get("data/saree.json")
  .success(function (response) {$scope.datalists = response.products;});  


     $scope.numberOfPages = function() {
        return Math.ceil($scope.datalists.length / $scope.pageSize);
      };
         
}

});

angular.module('sampleapp').filter('pagination', function()
{
 return function(input, start)
 {
  start = +start;
  return input.slice(start);
 };
});