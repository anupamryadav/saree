angular.module('infiniteScrollTutorial', ['infinite-scroll'])
        .controller('infiniteScrollController', function ($scope, $http) {
$scope.totalDisplayed = 6
            $scope.users=[];
$scope.showData = function( ){

              $http.get("data/saree.json")
  .success(function (response) 
           {
                  $scope.data = response.products;
                  
              }); 
}

           

                      
$scope.getMoreData = function () {
   
    
          $scope.totalDisplayed += 3;  


}
});

