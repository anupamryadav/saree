 Parse.initialize("BtUb3tIMS0QgBhhuUlC5dcoU6bbDjHJBnIrx2sJr","BeIw56xBQw4ENNnrEFyqbMMkOselNeOEOVcSz5i6");
 var mainApp = angular.module("mainApp", ['ngRoute','infinite-scroll']);
         mainApp.config(['$routeProvider', function($routeProvider) {
     


              $routeProvider
      .when('/', {
             templateUrl: 'home.html',
          controller: 'MainCtrl',
        resolve: {
            test: function ($route) { $route.current.params.test = 'Womens_Ethnic_Wear'; }
        }
      })
      .when('/Mens_Clothing', {
        templateUrl: 'Common.html',
        controller: 'MainCtrl',
        resolve: {
            test: function ($route) { $route.current.params.test = 'Mens_Clothing'; }
        }
      })
       .when('/men_Footware', {
        templateUrl: 'Common.html',
        controller: 'MainCtrl',
        resolve: {
            test: function ($route) { $route.current.params.test = 'Mens_Footwear'; }
        }
      })
        .when('/Sunglasses', {
        templateUrl: 'Common.html',
        controller: 'MainCtrl',
        resolve: {
            test: function ($route) { $route.current.params.test = 'Eyewear'; }
        }
      })
        .when('/watches', {
        templateUrl: 'Common.html',
        controller: 'MainCtrl',
        resolve: {
            test: function ($route) { $route.current.params.test = 'Watches'; }
        }
      })
        .when('/Jewellery', {
        templateUrl: 'Common.html',
        controller: 'MainCtrl',
        resolve: {
            test: function ($route) { $route.current.params.test = 'Jewellery'; }
        }
      })
        .when('/Furniture', {
        templateUrl: 'Common.html',
        controller: 'MainCtrl',
        resolve: {
            test: function ($route) { $route.current.params.test = 'Furniture'; }
        }
      })
        .when('/Office_Equipment', {
        templateUrl: 'Common.html',
        controller: 'MainCtrl',
        resolve: {
            test: function ($route) { $route.current.params.test = 'Office_Equipment'; }
        }
      })
        .when('/Bags_Luggage', {
        templateUrl: 'Common.html',
        controller: 'MainCtrl2',
        resolve: {
            test: function ($route) { $route.current.params.test = 'Bags_Luggage'; }
        }
      })
        .when('/Mobiles_Tablets', {
        templateUrl: 'Common.html',
        controller: 'MainCtrl',
        resolve: {
            test: function ($route) { $route.current.params.test = 'Mobiles_Tablets'; }
        }
      })
        .when('/Kids_Footwear', {
        templateUrl: 'Common.html',
        controller: 'MainCtrl',
        resolve: {
            test: function ($route) { $route.current.params.test = 'Kids_Footwear'; }
        }
      })
         .when('/about', {
        templateUrl: 'about.html',
        controller: 'MainCtrl',
        resolve: {
            test: function ($route) { $route.current.params.test = 'Eyewear'; }
        }
      })
          .when('/contact', {
        templateUrl: 'contact.html',
        controller: 'MainCtrl',
        resolve: {
            test: function ($route) { $route.current.params.test = 'Eyewear'; }
        }
      })
          .when('/Computers_Peripherals', {
        templateUrl: 'Common.html',
        controller: 'MainCtrl',
        resolve: {
            test: function ($route) { $route.current.params.test = 'Computers_Peripherals'; }
        }
      })
           .when('/Womens_Ethnic_Wear', {
        templateUrl: 'Common.html',
        controller: 'MainCtrl',
        resolve: {
            test: function ($route) { $route.current.params.test = 'Womens_Ethnic_Wear'; }
        }
      })
             .when('/Womens_Footwear', {
        templateUrl: 'Common.html',
        controller: 'MainCtrl',
        resolve: {
            test: function ($route) { $route.current.params.test = 'Womens_Footwear'; }
        }
      })
                .when('/Womens_Clothing', {
        templateUrl: 'Common.html',
        controller: 'MainCtrl',
        resolve: {
            test: function ($route) { $route.current.params.test = 'Womens_Clothing'; }
        }
      })
                .when('/Beauty_Personal_Care', {
        templateUrl: 'Common.html',
        controller: 'MainCtrl',
        resolve: {
            test: function ($route) { $route.current.params.test = 'Beauty_Personal_Care'; }
        }
      })
                 .when('/Fragrances', {
        templateUrl: 'Common.html',
        controller: 'MainCtrl',
        resolve: {
            test: function ($route) { $route.current.params.test = 'Fragrances'; }
        }
      })
                     .when('/Appliances', {
        templateUrl: 'Common.html',
        controller: 'MainCtrl',
        resolve: {
            test: function ($route) { $route.current.params.test = 'Appliances'; }
        }
      })
                      .when('/Kitchenware', {
        templateUrl: 'Common.html',
        controller: 'MainCtrl',
        resolve: {
            test: function ($route) { $route.current.params.test = 'Kitchenware'; }
        }
      })
           .when('/index', {
        templateUrl: 'home.html',
          controller: 'MainCtrl',
        resolve: {
            test: function ($route) { $route.current.params.test = 'Womens_Ethnic_Wear'; }
        }
        
      })
      .otherwise({
        redirectTo: '/'
      });


         }]);
         


			mainApp.directive('loading', function () {
      return {
        restrict: 'E',
        replace:true,
        template: '<div class="loading"><img src="images/loading.gif" width="100" height="80" /></div>',
        link: function (scope, element, attr) {
              scope.$watch('loading', function (val) {
                  if (val)
                      $(element).show();
                  else
                      $(element).hide();
              });
        }
      }
  })