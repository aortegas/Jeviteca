
// Filtro que una su nombre y los intrumentos que toca.
angular.module("jeviteca").filter("Musico", function() {

    // Los filtros siempre retornes funciones.
    // Además, siempre tienen al menos un parámetro, que es el dato de entrada.
    return function(artista, instrumentos) {

        return artista + " [" + instrumentos.join(", ") + "]";
    };
});



