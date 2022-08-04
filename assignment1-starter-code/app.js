(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchList = "";
  $scope.message = "";


  $scope.checkIfTooMuch = function () {
    var lunchItems = $scope.lunchList.split(',');
    var numberOfLunchItems = lunchItems.length;

    if(numberOfLunchItems==1 && lunchItems[0] == "")
    {
      $scope.message = "Please enter data first";
    }
    else if(numberOfLunchItems>3)
    {
      $scope.message = "Too much!";
    }
    else
    {
      $scope.message = "Enjoy!";
    }

  };

}

})();
