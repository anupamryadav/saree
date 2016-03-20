angular.module('infiniteScrollTutorial', ['infinite-scroll'])
				.controller('infiniteScrollController', function ($scope, $http) {
$scope.totalDisplayed = 6

						$scope.users=[];
							 $scope.filter = {};
$scope.showData = function( ){

$scope.titles ="Online marketplace in India for Men, Women";
$scope.Keyword ="Shoppingfunnel, India,http://www.Shoppingfunnel.com ,Shoppingfunnel.com,online Shopping, online saree  store, online saree mall, Buy saree , Buy discount saree , discount saree,women-fashion,sarees ,designer sarees, womens sarees ,women party wear designer sarees ,cotton sarees ,designer bollywood party wear sarees,online shopping funnel";


//Parse

 Parse.initialize("BtUb3tIMS0QgBhhuUlC5dcoU6bbDjHJBnIrx2sJr","BeIw56xBQw4ENNnrEFyqbMMkOselNeOEOVcSz5i6");
  


    Parse.Cloud.run('hello', {}, {
        success: function(result) {

        	$scope.data =  result.data.products;
          
        },
        error: function(error) {
        console.log("Oops! Couldn't POST from Cloud Code successfully..  :"+ error)
        }
      });
   
}
   //end parse



							/*$http.get("data/saree.json")
	.success(function (response) 
					 {
									$scope.data = response.products;
									
							}); 
}*/

					 
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

