'use strict';

angular.module('smarketApp')
  .controller('MainCtrl', function ($scope, $http) {
	
	
	$scope.getProducts = function(){
	$http({method:'GET', url:'http://localhost/API/api.php?method=getProducts'}).success(function(data, status, headers){
		
		// var jArr =data;
		// console.log(jArr);
		// var tableData = '<table><tr><td>Name</td><td>Price</td></tr>';
		// $.each(jArr, function(index, data) {
		 // tableData += '<tr><td>'+data.name+'</td><td>'+data.price+'</td></tr>';
		// });

		// $('div').html(tableData);
		$scope.posts = data;
		//console.log(data);
		$scope.status = status;
		//$scope.json = data;
		});
	}
	
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	$scope.getProducts();
	console.log("QWRQW");
  });
