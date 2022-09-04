(function () {

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  //Redirect to '#/' if no other URL matches
  $urlRouterProvider.otherwise('/');

  //Set up UI states
  $stateProvider
  .state('home', {
    url:'/',
    templateUrl:'src/templates/home.html'
  })

  .state('categories', {
    url:'/categories',
    templateUrl:'src/templates/categories.html',
    controller: 'CategoryCtrl as catctrl',
    resolve:{
      cat: ['MenuDataService', function(MenuDataService){
        return MenuDataService.getAllCategories();
      }]
    }

  })

  .state('items', {
    url:'/categories/{itemId}',
    templateUrl:'src/templates/items.html',
    controller: 'ItemController as itemsCtrl',
    resolve:{
      items: ['$stateParams','MenuDataService', function($stateParams, MenuDataService){
        return MenuDataService.getItemsForCategory($stateParams.itemId);
      }]
    }

  })

}
























})();
