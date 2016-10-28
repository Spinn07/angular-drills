angular.module('apiApp')
.service('smurfice', function($http){
  var baseUrl = 'http://swapi.co/api';
  this.getShipInfo = function(){
    return $http({
      method: 'GET',
      url: baseUrl + "/starships/"
    }).then(function(response){
      if(response.status === 200){
        return response.data.results;
      }
      return "The death star blew up our request";


    });
  };
});
