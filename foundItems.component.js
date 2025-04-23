(function () {
    'use strict';
    
    angular.module('NarrowItDownApp')
    .component('foundItems', {
      template: `
        <div ng-if="$ctrl.nothingFound">
          <p>Nothing found!</p>
        </div>
        <ul>
          <li ng-repeat="item in $ctrl.items track by $index">
            {{ item.name }}: {{ item.description }}
            <button ng-click="$ctrl.onRemove({index: $index})">Remove</button>
          </li>
        </ul>
      `,
      bindings: {
        items: '<',
        onRemove: '&',
        nothingFound: '<'
      }
    });
    
    })();
    