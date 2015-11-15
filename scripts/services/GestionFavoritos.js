
angular.module("jeviteca").service("GestionFavoritos", function() {

    // El almacen sera un diccionario de claves (el id del album) y un valor (puntuacion de favorito).
    // Inicializamos el almacen de favoritos.
    var almacenFavoritos = [];

    // Metodo de carga previo de los favoritos.
    this.cargarFavoritos = function() {

        // Comprobamos si el navegador permite el almacenamiento local.
        if (typeof(Storage) !== "undefined") {
            almacenFavoritos = JSON.parse(localStorage.getItem("jevitecaAlbumes"));
        }
    }

    // Recuperamos la informacion de favoritos del local storage.
    this.getFavoritoAlbum = function(idAlbum) {

        // Comprobamos si el navegador permite el almacenamiento local.
        if (typeof(Storage) !== "undefined") {

            // Buscamos el album en el almacen de favoritos.
            for (var i = 0; i < almacenFavoritos.length; i++) {
                if (almacenFavoritos[i].id === idAlbum) {
                    return almacenFavoritos[i].rate;
                }
            }

            return 0;
        }
    }

    // Establecemos un favorito, junto con su valor.
    this.setFavoritoAlbum = function(idAlbum, valorFavorito) {

        // Comprobamos si el navegador permite el almacenamiento local.
        if (typeof(Storage) !== "undefined") {

            var favoritoEncontrado = false;

            // Buscamos previamente el album en el almacen de favoritos y si lo encontramos actualizamos el valor de favorito.
            for (var i = 0; (i < almacenFavoritos.length & !favoritoEncontrado); i++) {
                if (almacenFavoritos[i].id === idAlbum) {
                    favoritoEncontrado = true;
                    almacenFavoritos[i].rate = valorFavorito;
                }
            }

            // Si no lo hemos encontrado, lo incluimos en el array de favoritos.
            if (!favoritoEncontrado) {
                almacenFavoritos.push({id:idAlbum, rate:valorFavorito});
            }

            // Guardamos el array en el almacenamiento local.
            localStorage.setItem("jevitecaAlbumes", JSON.stringify(almacenFavoritos));
        }
    }
});
