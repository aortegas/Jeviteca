
angular.module("jeviteca").controller("BandaDetalleCtrl", function($scope, Banda, Properties, Utilidades) {

    $scope.banda = Banda[0];

    // Llamamos a un servicio para obtener la url de Wikipedia y encontrar mas informacion de la banda.
    $scope.enlaceWikipediaBanda = function(banda) {
        return Utilidades.getWikipediaLink(banda);
    };

    // Volvemos atrás en el histórico del navegador.
    $scope.volver = function() {
        history.back();
    };
});
