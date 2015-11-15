
angular.module("jeviteca").service("BandasProvider", function($http, Properties, $q, $filter) {

    this.getBandas = function() {
        return $http.get(Properties.urlDataBandas);
    };

    // Obtenemos un sola banda por id.
    this.getBandaById = function(idBanda) {

        var dif = $q.defer();

        this.getBandas().then(
            function(response){
                dif.resolve($filter("filter")(response.data, {"id": Number(idBanda)},true));
            }
        );

        return dif.promise;
    };
});
