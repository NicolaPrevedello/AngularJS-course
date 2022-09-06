(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {

  var reg = this;

  reg.submit = function () {
    reg.completed = true;
    console.log(reg);
    MenuService.setUser(reg.user);
  };
}
})();
