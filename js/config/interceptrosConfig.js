angular.module("listaTelefonica").config(function($httpProvider){
    $httpProvider.interceptors.push("timestampIntercdeptor");
    $httpProvider.interceptors.push("errorInterceptor");
})