(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['user', 'ApiPath'];
function MyInfoController(user, ApiPath) {

  var ctrl = this;
  ctrl.basePath = ApiPath;

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
