(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['user'];
function MyInfoController(user) {

  var ctrl = this;
  ctrl.user = user;
  ctrl.userview = false;
  ctrl.imagestring = null;

  if(ctrl.user !== null)
  {
        ctrl.userview = true;
        ctrl.imagestring = ctrl.user.menunumber.replace(/[0-9]/g, '');
        console.log(ctrl);
  }


}
})();
