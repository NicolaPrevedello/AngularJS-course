(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController )
.controller('FoundItemsController',FoundItemsController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems);

NarrowItDownController .$inject = ['MenuSearchService'];
function NarrowItDownController( MenuSearchService) {
  var nidCtrl = this;
  nidCtrl.searchTerm = "";
  nidCtrl.found = [];

  nidCtrl.getItems = function(){
    nidCtrl.found = MenuSearchService.getMatchedMenuItems(nidCtrl.searchTerm);
  }

  nidCtrl.removeItem = function(index) {
    nidCtrl.found.splice(index,1);
  }



}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {

  var service = this;
  var matchedItems;

  service.getMatchedMenuItems = function(searchTerm){
    matchedItems = [];

    var response = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")})
      .then(function (response){
        for(let i in response.data.menu_items)
        {
          if(response.data.menu_items[i].description.toLowerCase().includes(searchTerm))
            {
              matchedItems.push(response.data.menu_items[i]);
            }
        }


      }).catch(function (error) {

      console.log("Error while retrieving the data.");

    });

    return matchedItems;
  };

}

function FoundItemsController() {

}

function FoundItems(){
  var ddo = {
    restrict: "E",
    templateUrl:"foundItem.html",
    scope: {
       foundItems: "<foundItems",
       onRemove: "&"
    },
    controller: FoundItemsController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}





})();
