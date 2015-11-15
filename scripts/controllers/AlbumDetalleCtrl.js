

angular.module("jeviteca").controller("AlbumDetalleCtrl", function($scope, Album, Properties, Utilidades, GestionFavoritos) {

    $scope.album = Album[0];

    // Recuperamos y establecemos el valor de favoritos.
    GestionFavoritos.cargarFavoritos();
    $scope.valorFavorito = GestionFavoritos.getFavoritoAlbum($scope.album.id);

    // Funcion para establecer favorito, que sera llamada desde la vista cuando haya cambios en la puntuacion del favorito.
    $scope.seleccionFavorito = function(value) {

        // Invocamos al servicio que guarda el favorito, junto con su puntuacion.
        GestionFavoritos.setFavoritoAlbum($scope.album.id, value);

        // Actualizamos la puntuacion en la vista.
        $scope.valorFavorito = value;
    };

    // Llamamos a un servicio para obtener la url de Youtube para encontrar y escuchar la cancion.
    $scope.enlaceYoutubeCancion = function(banda, cancion) {
        return Utilidades.getYouTubeLink(banda, cancion)
    };

    // Volvemos atrás en el histórico del navegador.
    $scope.volver = function() {
        history.back();
    };
});

