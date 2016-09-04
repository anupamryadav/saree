// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:

Parse.Cloud.define("hello", function(request, response) {

var urlval="";
var method=request.params.methodname;
  //runs when Parse.Cloud.run("POSTfromCloud") on the client side is called
   Parse.Cloud.httpRequest({
        method: "GET",
       

       //adds a new class to my parse data
       url: "http://affiliate-feeds.snapdeal.com/feed/70203.json",

       success: function (httpResponse) {

     switch(method) {
      
case "deal" :{
urlval= "http://affiliate-feeds.snapdeal.com/feed/api/dod/offer";
     
 break;}
      case "Eyewear" :{
urlval= httpResponse.data.apiGroups.Affiliate.listingsAvailable.Eyewear.listingVersions.v1.get;
     
 break;}
case "Jewellery" 
:{
     urlval= httpResponse.data.apiGroups.Affiliate.listingsAvailable.Jewellery.listingVersions.v1.get;
 break;}
case "Furniture" 
:{
     urlval= httpResponse.data.apiGroups.Affiliate.listingsAvailable.Furniture.listingVersions.v1.get;
 break;}
case "Office_Equipment" 
:{
     urlval= httpResponse.data.apiGroups.Affiliate.listingsAvailable.Office_Equipment.listingVersions.v1.get;
 break;}
case "Mens_Clothing" 
:{
     urlval= httpResponse.data.apiGroups.Affiliate.listingsAvailable.Mens_Clothing.listingVersions.v1.get;
 break;}
case "Womens_Ethnic_Wear" 
:{
     urlval= httpResponse.data.apiGroups.Affiliate.listingsAvailable.Womens_Ethnic_Wear.listingVersions.v1.get;
 break;}
case "Bags_Luggage" 
:{
     urlval= httpResponse.data.apiGroups.Affiliate.listingsAvailable.Bags_Luggage.listingVersions.v1.get;
 break;}
case "Mobiles_Tablets" 
:{
     urlval= httpResponse.data.apiGroups.Affiliate.listingsAvailable.Mobiles_Tablets.listingVersions.v1.get;
 break;}
case "Mens_Footwear" 
:{
     urlval= httpResponse.data.apiGroups.Affiliate.listingsAvailable.Mens_Footwear.listingVersions.v1.get;
 break;}
case "Kitchenware" 
:{
     urlval= httpResponse.data.apiGroups.Affiliate.listingsAvailable.Kitchenware.listingVersions.v1.get;
 break;}
case "Kids_Footwear" 
:{
     urlval= httpResponse.data.apiGroups.Affiliate.listingsAvailable.Kids_Footwear.listingVersions.v1.get;
 break;}
case "Computers_Peripherals" 
:{
     urlval= httpResponse.data.apiGroups.Affiliate.listingsAvailable.Computers_Peripherals.listingVersions.v1.get;
 break;}
case "Mens_Fragrances" 
:{
     urlval= httpResponse.data.apiGroups.Affiliate.listingsAvailable.Mens_Fragrances.listingVersions.v1.get;
 break;}
case "Watches" 
:{
     urlval= httpResponse.data.apiGroups.Affiliate.listingsAvailable.Watches.listingVersions.v1.get;
 break;}
case "Kids_Footwear" 
:{
     urlval= httpResponse.data.apiGroups.Affiliate.listingsAvailable.Kids_Footwear.listingVersions.v1.get;
 break;}
 case "Fragrances" 
:{
     urlval= httpResponse.data.apiGroups.Affiliate.listingsAvailable.Fragrances.listingVersions.v1.get;
 break;}
  case "Fragrances" 
:{
     urlval= httpResponse.data.apiGroups.Affiliate.listingsAvailable.Fragrances.listingVersions.v1.get;
 break;}
 case "Womens_Clothing" 
:{
     urlval= httpResponse.data.apiGroups.Affiliate.listingsAvailable.Womens_Clothing.listingVersions.v1.get;
 break;}
case "Kitchenware" 
:{
     urlval= httpResponse.data.apiGroups.Affiliate.listingsAvailable.Kitchenware.listingVersions.v1.get;
 break;}
case "Bags_Luggage" 
:{
     urlval= httpResponse.data.apiGroups.Affiliate.listingsAvailable.Bags_Luggage.listingVersions.v1.get;
 break;}
case "Appliances" 
:{
     urlval= httpResponse.data.apiGroups.Affiliate.listingsAvailable.Appliances.listingVersions.v1.get;
 break;}
case "Beauty_Personal_Care" 
:{
     urlval= httpResponse.data.apiGroups.Affiliate.listingsAvailable.Beauty_Personal_Care.listingVersions.v1.get;
 break;}
 case "Womens_Footwear" 
:{
     urlval= httpResponse.data.apiGroups.Affiliate.listingsAvailable.Womens_Footwear.listingVersions.v1.get;
 break;}




        default:
      urlval= httpResponse.data.apiGroups.Affiliate.listingsAvailable.Beauty_Personal_Care.listingVersions.v1.get;
     break;}

 

   //runs when Parse.Cloud.run("POSTfromCloud") on the client side is called
   Parse.Cloud.httpRequest({
        method: "GET",
        headers: {
          "Snapdeal-Affiliate-Id": "70203",
          "Snapdeal-Token-Id": "bf855dde4c2336a7c0734d8dc5fd8a",
          "Content-Type": "application/json"
       },

       //adds a new class to my parse data
       url: urlval,

       success: function (httpResponse) {
                console.log(httpResponse);
                response.success(httpResponse);
       },
       error:function (httpResponse) {
                console.error('Request failed with response code ' + httpResponse);
                response.error(httpResponse.status);
       }

    });  //end of Parse.Cloud.httpRequest()




       },
       error:function (httpResponse) {
                console.error('Request failed with response code ' + httpResponse);
                response.error(httpResponse.status);
       }

    });  //end of Parse.Cloud.httpRequest()

 
});




// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:

Parse.Cloud.define("hellofk", function(request, response) {

var urlval="";
var method=request.params.methodname;

  Parse.Cloud.httpRequest({
        method: "GET",
       

       //adds a new class to my parse data
       url: "http://affiliate-feeds.snapdeal.com/feed/70203.json",

       success: function (httpResponse) {


urlval= "https://affiliate-api.flipkart.net/affiliate/offers/v1/dotd/json";

    


  //runs when Parse.Cloud.run("POSTfromCloud") on the client side is called
   Parse.Cloud.httpRequest({
        method: "GET",
        headers: {
          "Fk-Affiliate-Id": "anupamrya",
          "Fk-Affiliate-Token": "04afdf5da83744948783677b9549d181",
          "Content-Type": "application/json"
       },

       //adds a new class to my parse data
       url: urlval,

       success: function (httpResponse) {
                console.log(httpResponse);
                response.success(httpResponse);
       },
       error:function (httpResponse) {
                console.error('Request failed with response code ' + httpResponse);
                response.error(httpResponse.status);
       }

    });  //end of Parse.Cloud.httpRequest()

  },
       error:function (httpResponse) {
                console.error('Request failed with response code ' + httpResponse);
                response.error(httpResponse.status);
       }

    });  //end of Parse.Cloud.httpRequest()

 
});


// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:

Parse.Cloud.define("hellog", function(request, response) {

var urlval="";
var method=request.params.methodname;

  Parse.Cloud.httpRequest({
        method: "GET",
        headers: {
          "Fk-Affiliate-Id": "anupamrya",
          "Fk-Affiliate-Token": "04afdf5da83744948783677b9549d181",
          "Content-Type": "application/json"
       },


       //adds a new class to my parse data
       url: "https://affiliate-api.flipkart.net/affiliate/api/anupamrya.json",

       success: function (httpResponse) {

  switch(method) {
      case "kid" :{

    var value=  httpResponse.data.apiGroups.affiliate.apiListings.kids_clothing.availableVariants;

urlval =value["v1.1.0"].get;

 break;}
case "toys" 
:{
    var value=  httpResponse.data.apiGroups.affiliate.apiListings.toys.availableVariants;

urlval =value["v1.1.0"].get;

 break;}

 case "womens_clothing" 
:{
    var value=  httpResponse.data.apiGroups.affiliate.apiListings.womens_clothing.availableVariants;

urlval =value["v1.1.0"].get;

 break;}

 case "air_conditioners" 
:{
    var value=  httpResponse.data.apiGroups.affiliate.apiListings.food_nutrition.availableVariants;

urlval =value["v1.1.0"].get;

 break;}

 case "air_coolers" 
:{
    var value=  httpResponse.data.apiGroups.affiliate.apiListings.air_coolers.availableVariants;

urlval =value["v1.1.0"].get;

 break;}

 



default:
      var value=  httpResponse.data.apiGroups.affiliate.apiListings.kids_clothing.availableVariants;

urlval =value["v1.1.0"].get;
     break;}



    


  //runs when Parse.Cloud.run("POSTfromCloud") on the client side is called
   Parse.Cloud.httpRequest({
        method: "GET",
        headers: {
          "Fk-Affiliate-Id": "anupamrya",
          "Fk-Affiliate-Token": "04afdf5da83744948783677b9549d181",
          "Content-Type": "application/json"
       },

       //adds a new class to my parse data
       url: urlval,

       success: function (httpResponse) {
                console.log(httpResponse);
                response.success(httpResponse);
       },
       error:function (httpResponse) {
                console.error('Request failed with response code ' + httpResponse);
                response.error(httpResponse.status);
       }

    });  //end of Parse.Cloud.httpRequest()

  },
       error:function (httpResponse) {
                console.error('Request failed with response code ' + httpResponse);
                response.error(httpResponse.status);
       }

    });  //end of Parse.Cloud.httpRequest()

 
});
    


    

