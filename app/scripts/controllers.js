'use strict';

angular.module('movieApp')
.controller('movieController',['$scope','movieService',function($scope,movieService){
    

$scope.moviename="";
     $scope.showDetails = false;
     $scope.startSearch = false;
            $scope.message="Loading ...";

            $scope.movies="";    
                
            $scope.searchdb=movieService.getSummary;
  
  $scope.searching=function(){
    $scope.showSearch=true;
 $scope.searchdb().get({s:$scope.moviename})
            .$promise.then(
            
                            function(response){

                                $scope.movies= angular.fromJson(response.Search);
                                $scope.showDetails = true;
                                

                            },
                            function(response) {
                                $scope.message = "Error: "+response.status + " " + response.statusText;
                            }

            );

            

            }

            


    
}])

;