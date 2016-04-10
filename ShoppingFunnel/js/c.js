
mainApp.controller('MainCtrl', function ($scope, $http,$routeParams) {


   var paramValue = $routeParams.test;;      


$scope.totalDisplayed = 6

            $scope.users=[];
               $scope.filter = {};
               

$scope.titles ="Online marketplace in India for Men, Women";
$scope.Keyword ="Shoppingfunnel, India,http://www.Shoppingfunnel.com ,Shoppingfunnel.com,online Shopping, online saree  store, online saree mall, Buy saree , Buy discount saree , discount saree,women-fashion,sarees ,designer sarees, womens sarees ,women party wear designer sarees ,cotton sarees ,designer bollywood party wear sarees,online shopping funnel";


//Parse

    Parse.Cloud.run('hello', {methodname: $routeParams.test}, {
        success: function(result) {

          $scope.data =  result.data.products;
          
        },
        error: function(error) {
        console.log("Oops! Couldn't POST from Cloud Code successfully..  :"+ error)
        }
      });
   

 

           
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

})
.run(['$rootScope', function($scope) {
  $scope.scenario = 'Sign up';
  $scope.currentUser = Parse.User.current();
  
  $scope.signUp = function(form) {
    var user = new Parse.User();
    user.set("email", form.email);
    user.set("username", form.username);
    user.set("password", form.password);
    
    user.signUp(null, {
      success: function(user) {
        $scope.currentUser = user;
        $scope.$apply();
      },
      error: function(user, error) {
        alert("Unable to sign up:  " + error.code + " " + error.message);
      }
    });    
  };
  
  $scope.logIn = function(form) {
    Parse.User.logIn(form.username, form.password, {
      success: function(user) {
        $scope.currentUser = user;
        $scope.$apply();
      },
      error: function(user, error) {
        alert("Unable to log in: " + error.code + " " + error.message);
      }
    });
  };
  
  $scope.logOut = function(form) {
    Parse.User.logOut();
    $scope.currentUser = null;
  };
}]);


