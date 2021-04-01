angular.module("listaTelefonica").controller("detalheContatoCtrl", function($scope, $routeParams, contato){
       $scope.contato= contato.data;
});