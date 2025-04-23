(function () {
    'use strict';
    
    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService);
    
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
      var ctrl = this;
    
      ctrl.searchTerm = "";
      ctrl.found = [];
      ctrl.nothingFound = false;
    
      ctrl.search = function () {
        if (!ctrl.searchTerm) {
          ctrl.found = [];
          ctrl.nothingFound = true;
          return;
        }
    
        MenuSearchService.getMatchedMenuItems(ctrl.searchTerm)
          .then(function (foundItems) {
            ctrl.found = foundItems;
            ctrl.nothingFound = (foundItems.length === 0);
          });
      };
    
      ctrl.removeItem = function (index) {
        ctrl.found.splice(index, 1);
      };
    }
    
    })();
    