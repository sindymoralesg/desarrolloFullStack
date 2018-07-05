var app = angular.module('aplicacion',[]);

app.controller('PrincipalCtrl', function($scope, $http){
    //$scope.ejemplo = "Hola mundo"; 
    $http.get("data/data.json")
    .then(function(response){
        $scope.ejemplo = response.data;

        $scope.encuentros = [];
        $scope.banderas = [];
        console.log("$scope.encuentros"+$scope.encuentros);
        for(var pos =0; pos<$scope.ejemplo.length; pos++){
            $scope.encuentros.push($scope.ejemplo[pos].home_team_country);
            $scope.encuentros.push($scope.ejemplo[pos].away_team_country);
            $scope.banderas.push('http://www.countryflags.io/'+$scope.ejemplo[pos].away_flag+'/flat/64.png');
            $scope.banderas.push('http://www.countryflags.io/'+$scope.ejemplo[pos].home_flag+'/flat/64.png');
            /*
            if(pos%2==0){
                $scope.encuentros.push($scope.ejemplo[pos].home_team_country);
            } else {
                $scope.encuentros.push($scope.ejemplo[pos].away_team_country);
            }
            */
        }
    });
})


app.controller('EjemploCtrl', function($scope){
        $scope.data = [
            { pais:"Colombia", capital:"Bogota"},
            { pais:"Venezuela", capital:"Caracas"},
            { pais:"Peru", capital:"Lima"},
            { pais:"Rusia", capital:"Moscú"}
    ] 

    $scope.informacionAMostrar = [];
    for(var pos =0; pos<$scope.data.length; pos++){
       
        $scope.informacionAMostrar.push($scope.data[pos].pais);
    }
})