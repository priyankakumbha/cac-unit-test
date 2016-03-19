angular.module('cacApp', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider.when("/", {
            controller: 'HomeCtrl',
            templateUrl: "home.html",
             resolve : {
                currentUser : function($http) {
                    return $http.get("/api/current-user");
                }
            }
        });
    })
    .controller("HomeCtrl", function(currentUser) {
    });