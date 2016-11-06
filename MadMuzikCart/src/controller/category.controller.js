(function(){
  'use strict';
  angular.module('shoppingCartApp')
  .controller('CategoryController',CategoryController);
  CategoryController.$inject = ['CategoryService'];
  function CategoryController(CategoryService){
    //debugger;
    var ctrl =this;
    ctrl.categories = CategoryService.getCategoryList();


  }


})();
