angular.module("listaTelefonica").config(function ($routeProvider){
    $routeProvider.when("/contatos", {
        templateUrl: "view/contatos.html",
        controller: "listaTelefonicaCtrl",
        resolve: {
            contatos: function(contatosApi){
                return contatosApi.getContatos();
            },
            operadoras: function(operadorasApi){
                return operadorasApi.getOperadoras();
            }
        }
    });

    $routeProvider.when("/novoContato", {
        templateUrl:"view/novoContato.html",
        controller: "novoContatoCtrl",
        resolve: {
            operadoras: function(operadorasApi){
                return operadorasApi.getOperadoras();
            }
        }
    });

    $routeProvider.when("/detalhesContato/:id", {
        templateUrl:"view/detalhesContato.html",
        controller: "detalheContatoCtrl",
        resolve:{
            contato: function(contatosApi, $route){
                return contatosApi.getContatos($route.current.params.id);
            }
        }
    });

    $routeProvider.otherwise({redirectTo: "/contatos"});
});