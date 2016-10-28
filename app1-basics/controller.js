angular.module('myApp')
.controller('mainController'), function($scope,arrayService){
  
  $scope.data = arrayService.getData();

  $scope.addNewPerson = function(name, email){
    arrayService.addNewPerson ({
      name: name,
      email: email
    });

  }
})
