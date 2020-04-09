(function(){
    var indivcontroller=function($scope,$routeParams,custfact)
    {
         var id1= $routeParams.id
        
         $scope.iperson=custfact.getperson(id1);

        //  function init()
        //  {
        //       for(i=0,l=$scope.persons.length;i<l;i++)
        //       {
        //           if($scope.persons[i].id==parseInt(id1))
        //           {
        //               $scope.iperson=$scope.persons[i];
        //               break;
        //           }
        //       }
        //  }


        //  init();
    }


     indivcontroller.$inject=['$scope','$routeParams','custfact'];

    angular.module('CustModule').controller('indivcontroller',indivcontroller)

}());