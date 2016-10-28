angular.module('app6')
.controller('homeCtrl',function($scope, petsService) {
  $scope.title = "home";
  petsService.getPets().then(function(response){
    $scope.pets = response.data;
  })
})
