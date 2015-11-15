
// Definicion de la aplicacion.
angular.module("jeviteca", ["ngRoute", "ui.bootstrap"]);

// En fase de config inyectamos $routeProvider para configurar las rutas de la aplicacion.
angular.module("jeviteca").config(function($routeProvider) {

    // Definimos la ruta de Álbumes.
    $routeProvider.when("/albumes", {
        controller: "AlbumesCtrl",
        templateUrl: "views/AlbumesView.html",
        resolve: {
            Albumes: ["AlbumesProvider", function(AlbumesProvider) {
                return AlbumesProvider.getAlbumes();
            }]
        }
    });

    // Definimos la ruta de Bandas.
    $routeProvider.when("/bandas", {
        controller: "BandasCtrl",
        templateUrl: "views/BandasView.html",
        resolve: {
            Bandas: ["BandasProvider", function(BandasProvider) {
                return BandasProvider.getBandas();
            }]
        }
    });

    // Definimos la ruta de Géneros.
    $routeProvider.when("/generos", {
        controller: "GenerosCtrl",
        templateUrl: "views/GenerosView.html",
        resolve: {
            Generos: ["GenerosProvider", function(GenerosProvider) {
                return GenerosProvider.getGeneros();
            }]
        }
    });

    // Definimos la ruta de detalle del Album.
    $routeProvider.when("/detallealbum/:idAlbum", {
        controller: "AlbumDetalleCtrl",
        templateUrl: "views/AlbumDetalleView.html",
        resolve: {
            Album: ["AlbumesProvider", "$route", function(AlbumesProvider, $route) {
                return AlbumesProvider.getAlbumById($route.current.params.idAlbum);
            }]
        }
    });

    // Definimos la ruta de detalle de la Banda.
    $routeProvider.when("/detallebanda/:idBanda", {
        controller: "BandaDetalleCtrl",
        templateUrl: "views/BandaDetalleView.html",
        resolve: {
            Banda: ["BandasProvider", "$route", function(BandasProvider, $route) {
                return BandasProvider.getBandaById($route.current.params.idBanda);
            }]
        }
    });

    // Definimos la ruta por defecto.
    $routeProvider.otherwise({
        redirectTo: "/albumes"
    });
});