
angular.module("jeviteca").directive("generosItems", function(){

    return{
        restrict : "AE",
        templateUrl : "views/GenerosItemsView.html",
        scope : {
            generoItem : "="
        }
    };
});
