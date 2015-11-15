
// Filtro para mostrar el titulo del album junto con su año en la vista de detalle.
angular.module("jeviteca").filter("TituloAlbumDetalle", function() {

    // Los filtros siempre retornes funciones.
    // Además, siempre tienen al menos un parámetro, que es el dato de entrada.
    return function(titulo, year) {

        return titulo + " (" + year + ")";
    };
});