(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryCtrl', CategoryCtrl);

CategoryCtrl.$inject = ['cat'];
function CategoryCtrl(cat){
var catCtrl = this;
catCtrl.categories = cat;
}

})();
