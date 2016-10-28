angular.module('app6')
.service('petsService',function($http){
  var baseUrl = 'http://practiceapi.devmountain.com';
  this.getPets = function(){
    return $http({
      method: 'GET',
      url: baseUrl + '/pets'
    })
  }
  this.getOnePet = function(id){
    return $http({
      method: 'GET',
      url: baseUrl + '/pets' + id
    })

  }

})
