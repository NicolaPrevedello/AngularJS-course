(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http'];
function MenuDataService($http) {

  var service = this;
  var categories;
  var matchedItems;

  service.getAllCategories = function(){
    categories = [];

    var response = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/categories.json")})
      .then(function (response){
        for(let i in response.data)
        {
          categories.push(response.data[i]);
        }
      }).catch(function (error) {
      console.log("Error while retrieving categories.");
    });
    return categories;
  };

  service.getItemsForCategory = function(categoryShortName){
    matchedItems = [];

    var response = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName)})
      .then(function (response){
        console.log(response.data.menu_items);
        for(let i in response.data.menu_items)
        {
          matchedItems.push(response.data.menu_items[i]);
        }
      }).catch(function (error) {
      console.log("Error while retrieving matchedItems.");
    });
    return matchedItems;
  };

}

})();
