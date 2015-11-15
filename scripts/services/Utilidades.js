
angular.module("jeviteca").service("Utilidades", function(Properties) {

    // Funcion con la url de Wikipedia para encontrar mas informacion de la banda.
    this.getWikipediaLink = function(banda) {

        var query = encodeURIComponent(banda);
        return Properties.urlWikipediaQuery + query;
    };

    // Funcion con la url de Youtube para encontrar y escuchar la cancion.
    this.getYouTubeLink = function(banda, cancion) {

        var query = encodeURIComponent((banda + " " + cancion).toLowerCase());
        return Properties.urlYouTubeQuery + query;
    };
});