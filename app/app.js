(function(){

    var app=angular.module('CustModule',['ngRoute','ngAnimate']);

    app.config(function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/first.html'
            })
            .when('/add', {
                controller: 'custcontrollers',
                templateUrl: 'app/views/indiv.html'
            })
            .when('/check',{
                controller:'custcontrollers',
                templateUrl:'app/views/cus.html'
            })
            .when('/print',{
                controller:'custcontrollers',
                templateUrl:'app/views/print.html'
            })
            .otherwise( { redirectTo: '/' } );
        
    });
})();


