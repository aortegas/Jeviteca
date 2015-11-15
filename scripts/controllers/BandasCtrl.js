
angular.module("jeviteca").controller("BandasCtrl", function($scope, Bandas, $filter, $location, $timeout) {

    // Aplicamos el filtro de ordenacion en el controlador en vez de en las vistas.
    $scope.bandas = $filter("orderBy")(Bandas.data, "name");

    // Redirigir el navegador al detalle del album indicado.
    $scope.irDetalleBanda = function(idBanda) {

        // Forzamos el ciclo digest con ejecutando la redirección dentro de un $timeout.
        $timeout(function() { $location.path("/detallebanda/" + idBanda); }, 100);
    };
});