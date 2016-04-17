
mainApp.controller('MainCtrl', function($scope, $http,$routeParams) {

      $scope.loading = true;
      var paramValue = $routeParams.test;;      
      $scope.totalDisplayed = 6
      $scope.users=[];
      $scope.filter = {};
      var urlval="";
   


    $http({
        method : "get",
        url : "Json/abc.json"
    }).then(function mySucces(response) {
   
      
       switch($routeParams.test) {
      case "Eyewear" :
     urlval= response.data.apiGroups.Affiliate.listingsAvailable.Eyewear.listingVersions.v1.get;
 break;
case "Jewellery" :
     urlval= response.data.apiGroups.Affiliate.listingsAvailable.Jewellery.listingVersions.v1.get;
 break;
case "Furniture" :

     urlval= response.data.apiGroups.Affiliate.listingsAvailable.Furniture.listingVersions.v1.get;
 break;
case "Office_Equipment" :

     urlval= response.data.apiGroups.Affiliate.listingsAvailable.Office_Equipment.listingVersions.v1.get;
 break;
case "Mens_Clothing" :

     urlval= response.data.apiGroups.Affiliate.listingsAvailable.Mens_Clothing.listingVersions.v1.get;
 break;
case "Womens_Ethnic_Wear" :

     urlval= response.data.apiGroups.Affiliate.listingsAvailable.Womens_Ethnic_Wear.listingVersions.v1.get;
 break;
case "Bags_Luggage" :

     urlval= response.data.apiGroups.Affiliate.listingsAvailable.Bags_Luggage.listingVersions.v1.get;
 break;
case "Mobiles_Tablets" :

     urlval= response.data.apiGroups.Affiliate.listingsAvailable.Mobiles_Tablets.listingVersions.v1.get;
 break;
case "Mens_Footwear" :

     urlval= response.data.apiGroups.Affiliate.listingsAvailable.Mens_Footwear.listingVersions.v1.get;
 break;
case "Kitchenware" :

     urlval= response.data.apiGroups.Affiliate.listingsAvailable.Kitchenware.listingVersions.v1.get;
 break;
case "Kids_Footwear" :

     urlval= response.data.apiGroups.Affiliate.listingsAvailable.Kids_Footwear.listingVersions.v1.get;
 break;
case "Computers_Peripherals" :

     urlval= response.data.apiGroups.Affiliate.listingsAvailable.Computers_Peripherals.listingVersions.v1.get;
 break;
case "Mens_Fragrances" :

     urlval= response.data.apiGroups.Affiliate.listingsAvailable.Mens_Fragrances.listingVersions.v1.get;
 break;
case "Watches" :

     urlval= response.data.apiGroups.Affiliate.listingsAvailable.Watches.listingVersions.v1.get;
 break;
case "Kids_Footwear" :

     urlval= response.data.apiGroups.Affiliate.listingsAvailable.Kids_Footwear.listingVersions.v1.get;
 break;
 case "Fragrances" :

     urlval= response.data.apiGroups.Affiliate.listingsAvailable.Fragrances.listingVersions.v1.get;
 break;
  case "Fragrances" :

     urlval= response.data.apiGroups.Affiliate.listingsAvailable.Fragrances.listingVersions.v1.get;
 break;
 case "Womens_Clothing" :

     urlval= response.data.apiGroups.Affiliate.listingsAvailable.Womens_Clothing.listingVersions.v1.get;
 break;
case "Kitchenware" :

     urlval= response.data.apiGroups.Affiliate.listingsAvailable.Kitchenware.listingVersions.v1.get;
 break;
case "Bags_Luggage" :

     urlval= response.data.apiGroups.Affiliate.listingsAvailable.Bags_Luggage.listingVersions.v1.get;
 break;
case "Appliances" :

     urlval= response.data.apiGroups.Affiliate.listingsAvailable.Appliances.listingVersions.v1.get;
 break;
case "Beauty_Personal_Care" :

     urlval= response.data.apiGroups.Affiliate.listingsAvailable.Beauty_Personal_Care.listingVersions.v1.get;
 break;
 case "Womens_Footwear" :

     urlval= response.data.apiGroups.Affiliate.listingsAvailable.Womens_Footwear.listingVersions.v1.get;
 break;

        default:
      urlval= response.data.apiGroups.Affiliate.listingsAvailable.Womens_Ethnic_Wear.listingVersions.v1.get;
     break;
}
 

parse();
    }, function myError(response) {
console.log("Error");
    });

//Parse
 function parse()
 {
      Parse.Cloud.run('hello', {methodname: urlval}, {
      success: function(result) {      
      $scope.data =  result.data.products;
      $scope.loading = false;
      },
      error: function(error) {
      console.log("Oops! Couldn't POST from Cloud Code successfully..  :"+ error)
      $scope.loading = false;
      }
      });
}
      $scope.getCategories = function () 

      {
      return ($scope.data || []).map(function (w) {
      return w.subCategoryName;
      }).filter(function (w, idx, arr) {
      return arr.indexOf(w) === idx;
      });
      };
      $scope.getMoreData = function () 
      {   
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


