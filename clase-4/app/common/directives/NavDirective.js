var backendEcommerce = angular.module("backendEcommerce");

backendEcommerce.directive("menu", function(){
    return {
        restrict : "E",
        templateUrl : "app/common/directives/NavTemplate.html"
    }
});