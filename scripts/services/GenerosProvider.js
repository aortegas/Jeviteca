
angular.module("jeviteca").service("GenerosProvider", function($http, Properties) {

    this.getGeneros = function() {
        return $http.get(Properties.urlDataGeneros);
    };
});