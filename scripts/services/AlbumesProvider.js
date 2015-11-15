
angular.module("jeviteca").service("AlbumesProvider", function($http, Properties, $q, $filter) {

    // Obtenemos todos los albumes.
    this.getAlbumes = function() {
        return $http.get(Properties.urlDataAlbumes);
    };

    // Obtenemos un solo album por id.
    this.getAlbumById = function(idAlbum) {

        var dif = $q.defer();

        this.getAlbumes().then(
            function(response){
                dif.resolve($filter("filter")(response.data, {"id": Number(idAlbum)},true));
            }
        );

        return dif.promise;
    };
});
