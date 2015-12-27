angular.module('infiniteScrollTutorial', ['infinite-scroll'])
        .controller('infiniteScrollController', function ($scope, $http) {
$scope.totalDisplayed = 6
            $scope.data=[];
            $scope.productBaseInfo=[];
               $scope.filter = {};
$scope.showData = function( ){

        $http.get("DATA_Flip/men.json")
  .success(function (response) {

   //scope.data = response.productInfoList;

    if (response.productInfoList!=null) {
      for (var i = response.productInfoList.length - 1; i >= 0; i--) 
      {
       $scope.productBaseInfo.push(response.productInfoList[i].productBaseInfo);
     };
    };
      
       if ($scope.productBaseInfo!=null) {
      for (var i = $scope.productBaseInfo.length - 1; i >= 0; i--) 
      {
       $scope.data.push($scope.productBaseInfo[i].productAttributes);
     };
    };
    
      

  });   
}

           
             $scope.getCategories = function () {
        return ($scope.data || []).map(function (w) {
            return w.productBrand;
        }).filter(function (w, idx, arr) {
            return arr.indexOf(w) === idx;
        });
    };


                      
$scope.getMoreData = function () {
   
    if ($scope.totalDisplayed <$scope.data.length) {

          $scope.totalDisplayed += 3;  
    };
      


}

   $scope.filterByCategory = function (data) {
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

/*Flip_kart

$scope.totalDisplayed1 = 6
            $scope.users1=[];
  $scope.productBaseInfo=[];
 

$scope.showData = function( ){

        $http.get("DATA_Flip/men.json")
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
       $scope.users1.push($scope.productBaseInfo[i].productAttributes);
     };
    };
    
      

  });   
}



$scope.getMoreData1 = function () {
   
    
          $scope.totalDisplayed1 += 3;  


}

*/

});

