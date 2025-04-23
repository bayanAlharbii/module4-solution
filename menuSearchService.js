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
          console.log("API Result:", result.data); // Debugging
  
          // Collect all menu_items from each letter category
          var itemsArray = [];
          var dataObject = result.data;
          for (var key in dataObject) {
            if (dataObject[key].menu_items) {
              itemsArray = itemsArray.concat(dataObject[key].menu_items);
            }
          }
  
          // Filter items by description
          var filtered = itemsArray.filter(function (item) {
            return item.description &&
                   item.description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
          });
  
          console.log("Filtered Items:", filtered); // Debugging
          return filtered;
        });
      };
    }
  
  })();
  