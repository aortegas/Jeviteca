
angular.module("jeviteca").controller("AlbumesCtrl", function($scope, Albumes, $filter, $location, $timeout, GestionFavoritos) {

    // Aplicamos el filtro de ordenacion en el controlador en vez de en las vistas.
    $scope.albumes = $filter("orderBy")(Albumes.data, "title");

    // Cargamos los favoritos.
    GestionFavoritos.cargarFavoritos();

    // Obtenemos la puntuacion de favorito de un album en concreto.
    $scope.obtenerFavorito = function(idAlbum) {
        return GestionFavoritos.getFavoritoAlbum(idAlbum);
    }

    // Redirigir el navegador al detalle del album indicado.
    $scope.irDetalleAlbum = function(idAlbum) {

        // Forzamos el ciclo digest con ejecutando la redirección dentro de un $timeout.
        $timeout(function() { $location.path("/detallealbum/" + idAlbum); }, 100);
    };
});