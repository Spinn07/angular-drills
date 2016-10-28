angular.module('app6')
.controller('detailsCtrl',function($scope){
  $scope.title = "details!";
  petsService.getOnePet($stateParam.id).then(function(response){
    $scope.pet = response.data
  })
})
