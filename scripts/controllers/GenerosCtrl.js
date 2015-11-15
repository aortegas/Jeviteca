
angular.module("jeviteca").controller("GenerosCtrl", function($scope, Generos, $filter) {

    // Aplicamos el filtro de ordenacion en el controlador en vez de en las vistas.
    $scope.generos = $filter("orderBy")(Generos.data, "name");
});
