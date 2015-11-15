
angular.module("jeviteca").directive("bandasItems", function(){

    return{
        restrict : "AE",
        templateUrl : "views/BandasItemsView.html",
        scope : {
            bandaItem : "=",
            onBandaClick: "&" // Con & asociamos un manejador del scope padre a un evento de la directiva.
        },

        // En link establecemos la lógica de la directiva y manipulamos el DOM en caso de necesitarlo.
        link: function(scope, elemento) {

            // Añadimos el evento clic al elemento <tr>.
            // NOTA: Al suscribir un elemento a un evento usando jQuery, en vez de AngularJS con su correspondiente
            // directiva, el ciclo digest no se dispara, por lo que tendremos que forzarlo en el manejador definido.
            elemento.bind("click", function() {

                // Al definir una propiedad de la interfaz de comunicación con "&" asociamos un
                // manejador, que será siempre una función, y por tanto podemos ejecutarla como tal.
                scope.onBandaClick({ idBanda: scope.bandaItem.id });
            });
        }
    };
});
