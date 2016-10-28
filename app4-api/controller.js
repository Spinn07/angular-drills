angular.module('apiApp')
.controller('smurfController', function($scope, smurfice ){
  smurfice.getShipInfo().then(function(ships) {
    $scope.ships = ships;

  }


);

});
