(function (){
  angular.module('shoppingCartApp')
  .config(routeConfig);
  routeConfig.$inject =['$stateProvider','$urlRouterProvider'];
  function routeConfig($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home',{
      url : '/',
      templateUrl : 'src/view/category-view.html'
      // controller : 'CategoryController',
      // controllerAs : 'categoryCtrl'
    });
  }
})();
