angular.module('infiniteScrollTutorial', ['infinite-scroll'])
        .controller('infiniteScrollController', function ($scope, $http) {

            $scope.users=[];
$scope.showData = function( ){

              $http.get("data/saree.json")
  .success(function (response) {$scope.users = response.products;}); 
}

           

                        $scope.data = $scope.users.slice(0, 3);
$scope.getMoreData = function () {
    console.log($scope.data.length);
    $scope.data = $scope.users.slice(0, $scope.data.length + 3);

}
});

