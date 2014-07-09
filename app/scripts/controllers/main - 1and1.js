'use strict';

angular.module('smarketApp')
  .controller('MainCtrl', function ($scope, $http) {
	
	
	$scope.getFB = function(){
	$http({method:'GET', url:'http://defyent.com/Johnny/API/api.php?method=getFB'}).success(function(data, status, headers){
		
		// var jArr =data;
		// console.log(jArr);
		// var tableData = '<table><tr><td>Name</td><td>Price</td></tr>';
		// $.each(jArr, function(index, data) {
		 // tableData += '<tr><td>'+data.name+'</td><td>'+data.price+'</td></tr>';
		// });

		// $('div').html(tableData);
		$scope.ps = data;
		//console.log(data);
		$scope.status = status;
		//$scope.json = data;
		});
	}
	
	$scope.getNoFrills = function(){
		$http({method:'GET', url:'http://defyent.com/Johnny/API/api.php?method=getNoFrills'}).success(function(data, status, headers){
		$scope.posts = data;
		//console.log(data);
		$scope.status = status;
		});
	}
	
	$scope.getMetro = function(){
		$http({method:'GET', url:'http://defyent.com/Johnny/API/api.php?method=getMetro'}).success(function(data, status, headers){
		$scope.posts = data;
		//console.log(data);
		});
	}
	// $scope.searchFilter = function ($scope.posts){
		// console.log($scope.posts);
		// var keyword = new RegExp($scope.nameFilter, 'i');
		// return !$scope.nameFilter 
	// }

	$scope.getFB();
	$scope.getNoFrills();
	$scope.getMetro();
  });
