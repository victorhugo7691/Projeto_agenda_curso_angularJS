//Factory function
angular.module("listaTelefonica").factory("contatosAPI", function($http, config){
    var _getContatos= function(){
        return $http.get(config.baseUrl+"/contatos");
    };

    var _getContato= function(id){
        return $http.get(config.baseUrl+"/contatos/"+id);
    };

    var _saveContato= function (contato){
        return $http.post(config.baseUrl+"/inserir", contato);
    };
    return {
        getContatos: _getContatos,
        getContato:_getContato,
        saveContato: _saveContato
    };
})

//Constructor function

var Pessoa= function(nome, idade){
    this.nome= nome;
    this.idade= idade;
};
var carlos={};
Pessoa.call(carlos, "Carlos", 25);

