'use strict';

var myApp = angular.module('myApp', [
  'onsen.directives',
]);

myApp.config(['$httpProvider', function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }
]);

myApp.controller('DesainCtr', function($scope, $http) {
	$http.get('desain.json')
	.then(function(res){
		$scope.apps = res.data;
	});
});

// http://www.malioboro.org/?json=get_category_posts&slug=malioboro&count=5&status=publish

myApp.controller('MultimediaCtr', function($scope, $http) {
	$http.get('http://www.malioboro.org/?json=get_category_posts&slug=malioboro&count=10&status=publish')
	.then(function(res){
		$scope.apps = res.data;
	});
});