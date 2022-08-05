(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtCOntroller', AlreadyBoughtCOntroller)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


var items = [
    {name:"Cookies", quantity:"10"},
    {name:"Jelly Beans", quantity:"5"},
    {name:"Chocolate Bars", quantity:"3"},
    {name:"Marshmallow bag", quantity:"2"},
    {name:"Candy Box", quantity:"7"}
];


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var tbCtrl = this;
  tbCtrl.tbItems = ShoppingListCheckOffService.getTBItems();

  tbCtrl.buyItem = function (index){

    ShoppingListCheckOffService.buyItem(index);
  };

}

AlreadyBoughtCOntroller.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtCOntroller(ShoppingListCheckOffService) {
  var abCtrl = this;
  abCtrl.abItems = ShoppingListCheckOffService.getABItems();
}

function ShoppingListCheckOffService() {

  var service = this;
  var tbItems = items;
  var abItems = [];

  service.buyItem = function (index) {
    var item = {
      name: tbItems[index].name,
      quantity: tbItems[index].quantity
    };
    abItems.push(item);
    tbItems.splice(index, 1);
  };

  service.getTBItems = function () {
  return tbItems;
  };

  service.getABItems = function () {
  return abItems;
  };

}


})();
