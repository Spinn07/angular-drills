angular.module('arrayApp')
.controller('arrayController',function($scope, arrayService){
$scope.getData = arrayService.getData();
});
