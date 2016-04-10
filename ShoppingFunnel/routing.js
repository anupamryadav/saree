 var mainApp = angular.module("mainApp", ['ngRoute','infinite-scroll']);
         mainApp.config(['$routeProvider', function($routeProvider) {
     


              $routeProvider
      .when('/', {
        templateUrl: 'WomenClothing.html',
        controller: 'WomenClothingController',
        resolve: {
            test: function ($route) { $route.current.params.test = 'Womens_Ethnic_Wear'; }
        }
      })
      .when('/Mens_Clothing', {
        templateUrl: 'men.html',
        controller: 'ViewmenController',
        resolve: {
            test: function ($route) { $route.current.params.test = 'Mens_Clothing'; }
        }
      })
       .when('/men_Footware', {
        templateUrl: 'men.html',
        controller: 'MainCtrl',
        resolve: {
            test: function ($route) { $route.current.params.test = 'Mens_Footwear'; }
        }
      })
        .when('/Sunglasses', {
        templateUrl: 'men.html',
        controller: 'MainCtrl',
        resolve: {
            test: function ($route) { $route.current.params.test = 'Eyewear'; }
        }
      })
        .when('/watches', {
        templateUrl: 'men.html',
        controller: 'MainCtrl',
        resolve: {
            test: function ($route) { $route.current.params.test = 'Watches'; }
        }
      })
        .when('/Jewellery', {
        templateUrl: 'men.html',
        controller: 'MainCtrl',
        resolve: {
            test: function ($route) { $route.current.params.test = 'Jewellery'; }
        }
      })
        .when('/Furniture', {
        templateUrl: 'men.html',
        controller: 'MainCtrl',
        resolve: {
            test: function ($route) { $route.current.params.test = 'Furniture'; }
        }
      })
        .when('/Office_Equipment', {
        templateUrl: 'men.html',
        controller: 'MainCtrl',
        resolve: {
            test: function ($route) { $route.current.params.test = 'Office_Equipment'; }
        }
      })
        .when('/Bags_Luggage', {
        templateUrl: 'men.html',
        controller: 'MainCtrl',
        resolve: {
            test: function ($route) { $route.current.params.test = 'Bags_Luggage'; }
        }
      })
        .when('/Mobiles_Tablets', {
        templateUrl: 'men.html',
        controller: 'MainCtrl',
        resolve: {
            test: function ($route) { $route.current.params.test = 'Mobiles_Tablets'; }
        }
      })
        .when('/Kids_Footwear', {
        templateUrl: 'men.html',
        controller: 'MainCtrl',
        resolve: {
            test: function ($route) { $route.current.params.test = 'Computers_Peripherals'; }
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
        templateUrl: 'contact.html',
        controller: 'MainCtrl',
        resolve: {
            test: function ($route) { $route.current.params.test = 'Computers_Peripherals'; }
        }
      })
           .when('/Womens_Ethnic_Wear', {
        templateUrl: 'men.html',
        controller: 'MainCtrl',
        resolve: {
            test: function ($route) { $route.current.params.test = 'Womens_Ethnic_Wear'; }
        }
      })
      .otherwise({
        redirectTo: '/a'
      });


         }]);
         

			