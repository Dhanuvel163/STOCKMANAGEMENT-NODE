(function() {
    
    var custcontrollers = function ($scope,custfact) {
        $scope.order = 'name';
        $scope.reverse = false;
        $scope.items=custfact.getitems();
        $scope.cart=custfact.getcart();
        $scope.clickfunc = function(propName) {
           $scope.order = propName;
           $scope.reverse = !$scope.reverse;
        };
        $scope.add = function() {
            var i=document.getElementById('id').value;
            var j=document.getElementById('name').value;
            var k=document.getElementById('noofitems').value;
            var l=document.getElementById('amount').value;
            custfact.add(i,j,k,l);

         };
         
        $scope.addtocart = function(id) {
            custfact.addtocart(id);
            // $scope.cart=custfact.getcart();
        };

    };
    
    custcontrollers.$inject=['$scope','custfact'];

    angular.module('CustModule')
      .controller('custcontrollers',custcontrollers);

    
}());