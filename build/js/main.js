mainApp.controller('MainCtrl', function($scope, $http, $routeParams) {
    $scope.loading = true;
    var paramValue = $routeParams.test;;
    $scope.totalDisplayed = 6
    $scope.users = [];
    $scope.filter = [];
    $scope.filter1 = [];
    $scope.data = [];
    var urlval = "";
    Parse.Cloud.run('hello', {
        methodname: $routeParams.test
    }, {
        success: function(result) {
            $scope.data = result.data.products;
            $scope.loading = false;
            $scope.$apply();
        },
        error: function(error) {
            console.log("Oops! Couldn't POST from Cloud Code successfully..  :" + error)
            $scope.loading = false;
        }
    });
    $scope.getCategories = function() {
        return ($scope.data || []).map(function(w) {
            return w.subCategoryName;
        }).filter(function(w, idx, arr) {
            return arr.indexOf(w) === idx;
        });
    };
     $scope.getbrand = function() {
        return ($scope.data || []).map(function(w) {
            return w.brand;
        }).filter(function(w, idx, arr) {
            return arr.indexOf(w) === idx;
        });
    };
    

    $scope.getMoreData = function() {
        $scope.totalDisplayed += 3;
    }
    $scope.filterByCategory = function(data) {
        return $scope.filter[data.subCategoryName] || noFilter($scope.filter);
    };

  $scope.filterBybrand = function(data) {
        return $scope.filter1[data.brand] || noFilter($scope.filter1);
    };


    function noFilter(filterObj) {
        for (var key in filterObj) {
            if (filterObj[key]) {
                return false;
            }
        }
        return true;
    }
}).run(['$rootScope', function($scope) {
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
mainApp.controller('MainCtrldeal', function($scope, $http, $routeParams) {
    $scope.loading = true;
    var paramValue = $routeParams.test;
    $scope.totalDisplayed = 6
    $scope.users = [];
    var urlval = "";
    $scope.data = [];
    $scope.productBaseInfo = [];
    $scope.filter = {};
    var url = paramValue;
    Parse.Cloud.run('hellofk', {
        methodname: url
    }, {
        success: function(result) {
            setTimeout(function() {
                if (result.data.dotdList != null) {
                    $scope.data = result.data.dotdList;
                    $scope.$apply();
                };
            }, 500);
            $scope.loading = false;
        },
        error: function(error) {
            console.log("Oops! Couldn't POST from Cloud Code successfully..  :" + error)
            $scope.loading = false;
        }
    });
    $scope.getCategories = function() {
        return ($scope.data || []).map(function(w) {
            return w.productBrand;
        }).filter(function(w, idx, arr) {
            return arr.indexOf(w) === idx;
        });
    };
    $scope.getMoreData = function() {
        $scope.totalDisplayed += 3;
    }
    $scope.filterByCategory = function(data) {
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
}).run(['$rootScope', function($scope) {
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
mainApp.controller('MainCtrlfk',function($scope,$http,$routeParams){$scope.loading=true;var paramValue=$routeParams.test;$scope.totalDisplayed=6
$scope.users=[];var urlval="";$scope.data=[];$scope.productBaseInfo=[];$scope.filter={};var url=paramValue;Parse.Cloud.run('hellofk',{methodname:url},{success:function(result){setTimeout(function(){if(result.data.productInfoList!=null){for(var i=result.data.productInfoList.length-1;i>=0;i--){$scope.productBaseInfo.push(result.data.productInfoList[i].productBaseInfo);};};if($scope.productBaseInfo!=null){for(var i=$scope.productBaseInfo.length-1;i>=0;i--){$scope.data.push($scope.productBaseInfo[i].productAttributes);};$scope.$apply();console.log($scope.data);$scope.loading=false;};},1000);$scope.loading=false;},error:function(error){console.log("Oops! Couldn't POST from Cloud Code successfully..  :"+error)
$scope.loading=false;}});$scope.getCategories=function(){return($scope.data||[]).map(function(w){return w.productBrand;}).filter(function(w,idx,arr){return arr.indexOf(w)===idx;});};$scope.getMoreData=function(){$scope.totalDisplayed+=3;}
$scope.filterByCategory=function(data){return $scope.filter[data.productBrand]||noFilter($scope.filter);};function noFilter(filterObj){for(var key in filterObj){if(filterObj[key]){return false;}}return true;}}).run(['$rootScope',function($scope){$scope.scenario='Sign up';$scope.currentUser=Parse.User.current();$scope.signUp=function(form){var user=new Parse.User();user.set("email",form.email);user.set("username",form.username);user.set("password",form.password);user.signUp(null,{success:function(user){$scope.currentUser=user;$scope.$apply();},error:function(user,error){alert("Unable to sign up:  "+error.code+" "+error.message);}});};$scope.logIn=function(form){Parse.User.logIn(form.username,form.password,{success:function(user){$scope.currentUser=user;$scope.$apply();},error:function(user,error){alert("Unable to log in: "+error.code+" "+error.message);}});};$scope.logOut=function(form){Parse.User.logOut();$scope.currentUser=null;};}]);
mainApp.controller('MainCtrlfkg',function($scope,$http,$routeParams){$scope.loading=true;var paramValue=$routeParams.test;$scope.totalDisplayed=6
$scope.users=[];var urlval="";$scope.data=[];$scope.productBaseInfo=[];$scope.filter={};var url=paramValue;Parse.Cloud.run('hellog',{methodname:url},{success:function(result){console.log(result);setTimeout(function(){if(result.data.productInfoList!=null){for(var i=result.data.productInfoList.length-1;i>=0;i--){$scope.productBaseInfo.push(result.data.productInfoList[i].productBaseInfoV1);};};if($scope.productBaseInfo!=null){for(var i=$scope.productBaseInfo.length-1;i>=0;i--){$scope.data.push($scope.productBaseInfo[i]);};$scope.$apply();console.log($scope.data);$scope.loading=false;};},1000);$scope.loading=false;},error:function(error){console.log("Oops! Couldn't POST from Cloud Code successfully..  :"+error)
$scope.loading=false;}});$scope.getCategories=function(){return($scope.data||[]).map(function(w){return w.productBrand;}).filter(function(w,idx,arr){return arr.indexOf(w)===idx;});};$scope.getMoreData=function(){$scope.totalDisplayed+=3;}
$scope.filterByCategory=function(data){return $scope.filter[data.productBrand]||noFilter($scope.filter);};function noFilter(filterObj){for(var key in filterObj){if(filterObj[key]){return false;}}return true;}}).run(['$rootScope',function($scope){$scope.scenario='Sign up';$scope.currentUser=Parse.User.current();$scope.signUp=function(form){var user=new Parse.User();user.set("email",form.email);user.set("username",form.username);user.set("password",form.password);user.signUp(null,{success:function(user){$scope.currentUser=user;$scope.$apply();},error:function(user,error){alert("Unable to sign up:  "+error.code+" "+error.message);}});};$scope.logIn=function(form){Parse.User.logIn(form.username,form.password,{success:function(user){$scope.currentUser=user;$scope.$apply();},error:function(user,error){alert("Unable to log in: "+error.code+" "+error.message);}});};$scope.logOut=function(form){Parse.User.logOut();$scope.currentUser=null;};}]);
Parse.initialize("BtUb3tIMS0QgBhhuUlC5dcoU6bbDjHJBnIrx2sJr","BeIw56xBQw4ENNnrEFyqbMMkOselNeOEOVcSz5i6");var mainApp=angular.module("mainApp",['ngRoute','infinite-scroll']);mainApp.config(['$routeProvider',function($routeProvider){$routeProvider.when('/',{templateUrl:'deal.html',controller:'MainCtrldeal',resolve:{test:function($route){$route.current.params.test='Womens_Ethnic_Wear';}}}).when('/Mens_Clothing',{templateUrl:'Common.html',controller:'MainCtrl',resolve:{test:function($route){$route.current.params.test='Mens_Clothing';}}}).when('/men_Footware',{templateUrl:'Common.html',controller:'MainCtrl',resolve:{test:function($route){$route.current.params.test='Mens_Footwear';}}}).when('/Sunglasses',{templateUrl:'Common.html',controller:'MainCtrl',resolve:{test:function($route){$route.current.params.test='Eyewear';}}}).when('/watches',{templateUrl:'Common.html',controller:'MainCtrl',resolve:{test:function($route){$route.current.params.test='Watches';}}}).when('/Jewellery',{templateUrl:'Common.html',controller:'MainCtrl',resolve:{test:function($route){$route.current.params.test='Jewellery';}}}).when('/Furniture',{templateUrl:'Common.html',controller:'MainCtrl',resolve:{test:function($route){$route.current.params.test='Furniture';}}}).when('/Office_Equipment',{templateUrl:'Common.html',controller:'MainCtr',resolve:{test:function($route){$route.current.params.test='Office_Equipment';}}}).when('/Bags_Luggage',{templateUrl:'Common.html',controller:'MainCtrl',resolve:{test:function($route){$route.current.params.test='Bags_Luggage';}}}).when('/Mobiles_Tablets',{templateUrl:'Common.html',controller:'MainCtrl',resolve:{test:function($route){$route.current.params.test='Mobiles_Tablets';}}}).when('/Kids_Footwear',{templateUrl:'Common.html',controller:'MainCtrl',resolve:{test:function($route){$route.current.params.test='Kids_Footwear';}}}).when('/about',{templateUrl:'about.html',controller:'MainCtrl',resolve:{test:function($route){$route.current.params.test='Eyewear';}}}).when('/contact',{templateUrl:'contact.html',controller:'MainCtrl',resolve:{test:function($route){$route.current.params.test='Eyewear';}}}).when('/Computers_Peripherals',{templateUrl:'Common.html',controller:'MainCtrl',resolve:{test:function($route){$route.current.params.test='Computers_Peripherals';}}}).when('/Womens_Ethnic_Wear',{templateUrl:'Common.html',controller:'MainCtrl',resolve:{test:function($route){$route.current.params.test='Womens_Ethnic_Wear';}}}).when('/Womens_Footwear',{templateUrl:'Common.html',controller:'MainCtrl',resolve:{test:function($route){$route.current.params.test='Womens_Footwear';}}}).when('/Womens_Clothing',{templateUrl:'Common.html',controller:'MainCtrl',resolve:{test:function($route){$route.current.params.test='Womens_Clothing';}}}).when('/Beauty_Personal_Care',{templateUrl:'Common.html',controller:'MainCtrl',resolve:{test:function($route){$route.current.params.test='Beauty_Personal_Care';}}}).when('/Fragrances',{templateUrl:'Common.html',controller:'MainCtrl',resolve:{test:function($route){$route.current.params.test='Fragrances';}}}).when('/Appliances',{templateUrl:'Common.html',controller:'MainCtrl',resolve:{test:function($route){$route.current.params.test='Appliances';}}}).when('/Kitchenware',{templateUrl:'Common.html',controller:'MainCtrl',resolve:{test:function($route){$route.current.params.test='Kitchenware';}}}).when('/kid',{templateUrl:'fk.html',controller:'MainCtrlfkg',resolve:{test:function($route){$route.current.params.test='kids_clothing';}}}).when('/Toys',{templateUrl:'fk.html',controller:'MainCtrlfkg',resolve:{test:function($route){$route.current.params.test='toys';}}}).otherwise({redirectTo:'/'});}]);mainApp.directive('loading',function(){return{restrict:'E',replace:true,template:'<div class="loading"><img src="images/loading.gif" width="100" height="80" /></div>',link:function(scope,element,attr){scope.$watch('loading',function(val){if(val)$(element).show();else
$(element).hide();});}}})