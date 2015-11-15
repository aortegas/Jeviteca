
// En los constants definimos las propiedades de la aplicación.
// Usamos constant en este caso porque necesito inyectarlo en fase de config.
angular.module("jeviteca").constant("Properties", {
    urlDataAlbumes: "data/albums.json",
    urlDataBandas: "data/bands.json",
    urlDataGeneros: "data/genres.json",
    urlYouTubeQuery: "https://www.youtube.com/results?search_query=",
    urlWikipediaQuery: "https://es.wikipedia.org/wiki/Special:Search?search="
});