
mainApp.controller('MainCtrldeal', function($scope, $http,$routeParams) {

      $scope.loading = true;
      var paramValue = $routeParams.test;     
      $scope.totalDisplayed = 6
      $scope.users=[];
      
      var urlval="";
   $scope.data=[];
            $scope.productBaseInfo=[];
               $scope.filter = {};
    
//Parse

       var url=paramValue;
          Parse.Cloud.run('hellofk', {methodname: url}, {
          success: function(result) {      
        setTimeout(function(){     
        
       if (result.data.dotdList!=null) 
       {
         $scope.data =result.data.dotdList;
        };
          
           
              
        }, 1000);
            


      
      $scope.loading = false;
      },
      error: function(error) {
      console.log("Oops! Couldn't POST from Cloud Code successfully..  :"+ error)
      $scope.loading = false;
      }
      });
    


 $scope.getCategories = function () {
        return ($scope.data || []).map(function (w) {
            return w.productBrand;
        }).filter(function (w, idx, arr) {
            return arr.indexOf(w) === idx;
        });
    };
      $scope.getMoreData = function () 
      {   
      $scope.totalDisplayed += 3;  
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


