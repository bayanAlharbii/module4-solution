(function () {
    'use strict';
    
    angular.module('NarrowItDownApp')
    .service('MenuSearchService', MenuSearchService);
    
    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
      var service = this;
    
      service.getMatchedMenuItems = function (searchTerm) {
        return $http({
          method: "GET",
          url: "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json"
        }).then(function (result) {
            console.log("API Result:", result.data); // ADD THIS LINE
          
            var itemsArray = result.data.menu_items || [];
          
            var filtered = itemsArray.filter(function (item) {
              return item.description &&
                     item.description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
            });
          
            return filtered;
          });
      };
      
    }
    
    })();
    