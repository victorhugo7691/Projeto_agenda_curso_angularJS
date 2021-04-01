//        angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, $filter, $http){
  //  console.log(serialGenerator.generate());
    angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, $http, operadorasAPI, serialGenerator, operadoras, $filter){
                $scope.app=$filter('upper')("Lista Telefonica");  
                $scope.contatos= contatos.data;  /*
                    {nome: $filter('uppercase') ("Pedro"), telefone: "99998888", cor: "blue", data: new Date()},
                    {nome: "Ana", telefone: "88888877", cor: "yellow", data: new Date()},
                    {nome: "Maria", telefone: "88556644", cor: "red", data: new Date()}
                ];*/
        
                /*var carregarContatos = function(){
                   // $http.get("http://localhost:3001/lista-telefonica").then(function (response){ 
                       contatosAPI.getContatos().then(function (response){ 
                        //console.log(data);
                        $scope.contatos=response.data;
                    }).catch(function(data, $status){
                        $scope.message= "Aconteceu um problema! "+data;
                    });
                };*/
                var counter=0;
                var calcularImposto= function(preco){
                    console.log(counter++);
                    var imposto=1.2;
                    return preco*imposto;
                };

                var calcularImpostos= function(contatos){
                    contatos.forEach(function(contato){
                        contato.operadora.precoComIposto= calcularImposto(contato.operadora.preco);
                    });
                };

                var generateSerial = function(contatos){
                    contatos.forEach(function(item){
                        item.serial= serialGenerator.generate();
                    });
                 };

        
                $scope.operadoras= operadoras.data; /*
                    {nome: "Oi", codigo: "14",  categoria: "Celular", preco:2},,
                    {nome: "Vivo", codigo: "15",  categoria: "Celular", preco:1},
                    {nome: "GVT", codigo: "25",  categoria: "Fixo", preco:3},
                    {nome: "Embratel", codigo: "21",  categoria: "Fixo", preco:1},
                    {nome: "Tim", codigo: "41",  categoria: "Celular", preco:2}
                ]*/
             /*   var carregarOperadoras = function(){
                    //$http.get("http://localhost:3001/operadora").then(function (response){
                        operadorasAPI.getOperadoras().then(function(response){
                        $scope.operadoras=response.data;
                    });
                };*/
                
                /*$scope.adicionarContato= function(contato) {
                    $scope.contatos.push(angular.copy(contato));
                    delete $scope.contato;
                    $scope.contatoForm.$setPristine();
                }*/
                
                $scope.adicionarContato= function(contato) {
                    contato.serial= serialGenerator.generate();
                    contato.data= new Date();
                   // $http.post("http://localhost:3001/lista", contato).then(function(data){
                       contatosAPI.saveContato(contato).then(function(data){
                        delete $scope.contato;
                        $scope.contatoForm.$setPristine();
                        carregarContatos();
                    });
                };
        
                $scope.classe1="selecionado";
                $scope.classe2="negrito";
                $scope.apagarContatos= function(contatos){
                        $scope.contatos= contatos.filter(function (contato){
                            if(!contato.selecionado) return contato;
                        });
                };
        
                $scope.isContatoSelecionado = function(contatos){
                    return contatos.some(function(contato){
                        return contato.selecionado;
                    });
                };
        
                $scope.ordernarPor = function(campo){
                    $scope.criterioDeOrdenacao=campo;
                    $scope.direcaoDaOrdenacao= !$scope.direcaoDaOrdenacao;
                };
                
                generateSerial($scope.contatos);
                carregarContatos();
              //  carregarOperadoras();
            });