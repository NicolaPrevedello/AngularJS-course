(function () {
'use strict';

angular.module('MenuApp')
.component('myItems', {
  templateUrl: 'src/templates/items.html',
  bindings: {
    items: '<'
  }
});

})();
