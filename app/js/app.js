'use strict';

/* App Module
Change
phonecatApp => PanduanApp
phonecatControllers => PanduanCtr
*/

var myApp = angular.module('myApp', [
  'onsen.directives',
]);

myApp.controller('DesainCtr', function($scope, $http) {
	$http.get('desain.json')
	.then(function(res){
		$scope.apps = res.data;
	});
});

myApp.controller('MultimediaCtr', function($scope, $http) {
	$http.get('http://panduan.blankonlinux.or.id/?json=get_category_posts&slug=multimedia')
	.then(function(res){
		$scope.apps = res.data;
	});
});