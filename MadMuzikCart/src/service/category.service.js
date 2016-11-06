(function(){
  'use strict';
  var app = angular.module('shoppingCartApp');
  app.service('CategoryService',CategoryService);
  CategoryService.$inject = ['$http'];
  function CategoryService($http){
    var service = this;
    var categoryLst = [];
    //get all the categories
    service.getCategoryList = function(){
      categoryLst.push({
        name : 'Album',
        id : '1',
        imgPath : 'http://www.alexrox.com/wp-content/uploads/Mayhem-music-Magazine-Fates-Warning-12-1024x536.jpg'
      });

      categoryLst.push({
          name : 'Accessories',
          id : '2',
          imgPath : 'https://www.stagstuff.co.uk/content/ss/images/tshirts-490.png'

      });

      // categoryLst.push({
      //     name : 'Accessories',
      //     id : '2'
      // });


      return categoryLst;
    };
  }


})();
