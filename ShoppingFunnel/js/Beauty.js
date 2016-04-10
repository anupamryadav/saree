angular.module('infiniteScrollTutorial', ['infinite-scroll'])
        .controller('infiniteScrollController', function ($scope, $http) {
$scope.totalDisplayed = 6
            $scope.users=[];
               $scope.filter = {};
$scope.showData = function( ){

              $http.get("data/Beauty.json")
  .success(function (response) 
           {
                  $scope.data = response.products;
                  
              }); 
}

           
             $scope.getCategories = function () {
        return ($scope.data || []).map(function (w) {
            return w.subCategoryName;
        }).filter(function (w, idx, arr) {
            return arr.indexOf(w) === idx;
        });
    };


                      
$scope.getMoreData = function () {
   
    
          $scope.totalDisplayed += 3;  


}

   $scope.filterByCategory = function (data) {
        return $scope.filter[data.subCategoryName] || noFilter($scope.filter);
    };
    
    function noFilter(filterObj) {
        for (var key in filterObj) {
            if (filterObj[key]) {
                return false;
            }
        }
        return true;
    }   

});

