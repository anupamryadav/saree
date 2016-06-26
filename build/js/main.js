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
mainApp.controller('MainCtrlfk',function($scope,$http,$routeParams){$scope.loading=true;var paramValue=$routeParams.test;$scope.totalDisplayed=6
$scope.users=[];var urlval="";$scope.data=[];$scope.productBaseInfo=[];$scope.filter={};var url=paramValue;Parse.Cloud.run('hellofk',{methodname:url},{success:function(result){setTimeout(function(){if(result.data.productInfoList!=null){for(var i=result.data.productInfoList.length-1;i>=0;i--){$scope.productBaseInfo.push(result.data.productInfoList[i].productBaseInfo);};};if($scope.productBaseInfo!=null){for(var i=$scope.productBaseInfo.length-1;i>=0;i--){$scope.data.push($scope.productBaseInfo[i].productAttributes);};$scope.$apply();console.log($scope.data);$scope.loading=false;};},1000);$scope.loading=false;},error:function(error){console.log("Oops! Couldn't POST from Cloud Code successfully..  :"+error)
$scope.loading=false;}});$scope.getCategories=function(){return($scope.data||[]).map(function(w){return w.productBrand;}).filter(function(w,idx,arr){return arr.indexOf(w)===idx;});};$scope.getMoreData=function(){$scope.totalDisplayed+=3;}
$scope.filterByCategory=function(data){return $scope.filter[data.productBrand]||noFilter($scope.filter);};function noFilter(filterObj){for(var key in filterObj){if(filterObj[key]){return false;}}return true;}}).run(['$rootScope',function($scope){$scope.scenario='Sign up';$scope.currentUser=Parse.User.current();$scope.signUp=function(form){var user=new Parse.User();user.set("email",form.email);user.set("username",form.username);user.set("password",form.password);user.signUp(null,{success:function(user){$scope.currentUser=user;$scope.$apply();},error:function(user,error){alert("Unable to sign up:  "+error.code+" "+error.message);}});};$scope.logIn=function(form){Parse.User.logIn(form.username,form.password,{success:function(user){$scope.currentUser=user;$scope.$apply();},error:function(user,error){alert("Unable to log in: "+error.code+" "+error.message);}});};$scope.logOut=function(form){Parse.User.logOut();$scope.currentUser=null;};}]);
mainApp.controller('MainCtrlfkg',function($scope,$http,$routeParams){$scope.loading=true;var paramValue=$routeParams.test;$scope.totalDisplayed=6
$scope.users=[];var urlval="";$scope.data=[];$scope.productBaseInfo=[];$scope.filter={};var url=paramValue;Parse.Cloud.run('hellog',{methodname:url},{success:function(result){console.log(result);setTimeout(function(){if(result.data.productInfoList!=null){for(var i=result.data.productInfoList.length-1;i>=0;i--){$scope.productBaseInfo.push(result.data.productInfoList[i].productBaseInfoV1);};};if($scope.productBaseInfo!=null){for(var i=$scope.productBaseInfo.length-1;i>=0;i--){$scope.data.push($scope.productBaseInfo[i]);};$scope.$apply();console.log($scope.data);$scope.loading=false;};},1000);$scope.loading=false;},error:function(error){console.log("Oops! Couldn't POST from Cloud Code successfully..  :"+error)
$scope.loading=false;}});$scope.getCategories=function(){return($scope.data||[]).map(function(w){return w.productBrand;}).filter(function(w,idx,arr){return arr.indexOf(w)===idx;});};$scope.getMoreData=function(){$scope.totalDisplayed+=3;}
$scope.filterByCategory=function(data){return $scope.filter[data.productBrand]||noFilter($scope.filter);};function noFilter(filterObj){for(var key in filterObj){if(filterObj[key]){return false;}}return true;}}).run(['$rootScope',function($scope){$scope.scenario='Sign up';$scope.currentUser=Parse.User.current();$scope.signUp=function(form){var user=new Parse.User();user.set("email",form.email);user.set("username",form.username);user.set("password",form.password);user.signUp(null,{success:function(user){$scope.currentUser=user;$scope.$apply();},error:function(user,error){alert("Unable to sign up:  "+error.code+" "+error.message);}});};$scope.logIn=function(form){Parse.User.logIn(form.username,form.password,{success:function(user){$scope.currentUser=user;$scope.$apply();},error:function(user,error){alert("Unable to log in: "+error.code+" "+error.message);}});};$scope.logOut=function(form){Parse.User.logOut();$scope.currentUser=null;};}]);