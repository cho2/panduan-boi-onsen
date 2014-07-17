'use strict';

/* App Module
Change
phonecatApp => PanduanApp
phonecatControllers => PanduanCtr
*/

var myApp = angular.module('myApp', [
  'onsen.directives',
  //'PanduanCtr',
]);

// var PanduanCtr = angular.module('PanduanCtr', []);

myApp.controller('ShowCtr', function($scope, $http) {
  $http.get('multimedia.json')
       .then(function(res){
          $scope.todos = res.data;                
        });
});