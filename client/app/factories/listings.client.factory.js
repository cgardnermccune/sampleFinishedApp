angular.module('listings').factory('Listings', ['$http', 
  function($http) {
    var methods = {
      getAll: function() {
        return $http.get('http://localhost:8080/api/listings');
      },

      create: function(listing) {
        return $http.post('http://localhost:8080/api/listings', listing);
      }, 

      read: function(id) {
        return $http.get('http://localhost:8080/api/listings/' + id);
      }, 

      update: function(id, listing) {
        return $http.put('http://localhost:8080/api/listings/' + id, listing);
      }, 

      delete: function(id) {
        return $http.delete('http://localhost:8080/api/listings/' + id);
      }
    };

    return methods;

    /*
      In the mean.js framework, this same factory shows up in the 'services' folder, and uses $ngResource. 
      $ngResource is an abstracted service that interfaces with RESTful APIs. Learn more at the following link: 
        http://jacopretorius.net/2013/04/using-ngresource-with-angularjs.html
     */
  }
]);