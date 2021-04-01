angular.module("listaTelefonica").directive("uiAlert", function(){
    return {
        templateUrl: "view/alert.html",
        replace: true,
        restrict: "AE",
        scope:{
            title:"@",
            //se os nomes forem iguais, pode-se manter o @
            //message: ",="
        },
        transclude: true
    };
});