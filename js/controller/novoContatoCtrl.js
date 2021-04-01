angular.module("listaTelefonica").controller("novoContatoCtrl", function($scope, contatosApi, serialGenerator, $location, operadoras){
    $scope.app="Lista Telefonica";
    $scope.operadoras. operadoras.data;
    $scope.adicionarContato= function(contato){
        contato.serial= serialGenerator.generate();
        contatosApi.saveContato(contato).then(function(data){
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            $location.path("/contatos");
        });
    };
});