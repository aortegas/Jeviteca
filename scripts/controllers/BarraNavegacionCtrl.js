
// Controlador de la barra de la navegacion.
angular.module("jeviteca").controller("BarraNavegacionCtrl", function($scope, $route){

    // Comprobamos si la ruta navegada es "/albumes". Devuelve true/false en funcion de si es la ruta albumes.
    $scope.rutaEsAlbumes = function() {

        return $route.current && $route.current.$$route && $route.current.$$route.originalPath === "/albumes";
    };

    // Comprobamos si la ruta navegada es "/bandas". Devuelve true/false en funcion de si es la ruta bandas.
    $scope.rutaEsBandas = function() {

        return $route.current && $route.current.$$route && $route.current.$$route.originalPath === "/bandas";
    };

    // Comprobamos si la ruta navegada es "/generos". Devuelve true/false en funcion de si es la ruta generos.
    $scope.rutaEsGeneros = function() {

        return $route.current && $route.current.$$route && $route.current.$$route.originalPath === "/generos";
    };
});

