angular.module('infiniteScrollTutorial', ['infinite-scroll'])
        .controller('infiniteScrollController', function ($scope, $http) {
$scope.totalDisplayed = 6
            scope.users=[];
  $scope.productBaseInfo=[];
 

$scope.showData = function( ){

        $http.get("data/Footware.json")
  .success(function (response) {

   //scope.users = response.productInfoList;

    if (response.productInfoList!=null) {
      for (var i = response.productInfoList.length - 1; i >= 0; i--) 
      {
       $scope.productBaseInfo.push(response.productInfoList[i].productBaseInfo);
     };
    };
      
       if ($scope.productBaseInfo!=null) {
      for (var i = $scope.productBaseInfo.length - 1; i >= 0; i--) 
      {
       $scope.users.push($scope.productBaseInfo[i].productAttributes);
     };
    };
    
      

  });   
}

           

          


                      
$scope.getMoreData = function () {
   
    
          $scope.totalDisplayed += 3;  


}
});

