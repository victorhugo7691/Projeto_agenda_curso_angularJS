angular.module("listaTelefonica").factory("timestampInterceptor", function(){
    return {
        request: function(config){
            return config;
        }
    };
});