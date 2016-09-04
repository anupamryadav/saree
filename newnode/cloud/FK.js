// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:

Parse.Cloud.define("hellofk", function(request, response) {

var urlval="";
var method=request.params.methodname;
  //runs when Parse.Cloud.run("POSTfromCloud") on the client side is called
   Parse.Cloud.httpRequest({
        method: "GET",
        headers: {
          "Fk-Affiliate-Id": "anupamrya",
          "Fk-Affiliate-Token": "04afdf5da83744948783677b9549d181",
          "Content-Type": "application/json"
       },

       //adds a new class to my parse data
       url: method,

       success: function (httpResponse) {
                console.log(httpResponse);
                response.success(httpResponse);
       },
       error:function (httpResponse) {
                console.error('Request failed with response code ' + httpResponse);
                response.error(httpResponse.status);
       }

    });  //end of Parse.Cloud.httpRequest()


    });  //end of Parse.Cloud.httpRequest()

