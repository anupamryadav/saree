angular.module('infiniteScrollTutorial', ['infinite-scroll'])
        .controller('infiniteScrollController', function ($scope, $http) {
$scope.totalDisplayed = 6
            
$scope.showData = function( ){

              $http.get("data/saree.json")
  .success(function (response) 
           {
           	$scope.companies=[];
                  $scope.companies = response.productInfoList;

                   angular.forEach($scope.companies, function(items)
                   {
                   	angular.forEach(items, function(item)
                   	{
                   		console.log("dsfdsfsd");
                   		if (item.productAttributes != null) 
                   		{
                   		$scope.users.push(item);
                   		 };
                   		
                   	})
                     
               })

             
                  
              }); 
}

           

                      
$scope.getMoreData = function () {
   
    
          $scope.totalDisplayed += 3;  


}
});

