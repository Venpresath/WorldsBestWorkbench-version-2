"use strict";
{
  angular
    .module("app")
    .config(($routeProvider) => {
      $routeProvider
        .when("/home", {
          template: "<home></home>"
        })
        .when("/about", {
          template: "<about></about>"
        })
        .when("/contact", {
          template: "<contact></contact>"
        })
        .when("/shop", {
          template: "<shop></shop>"
        })
        .otherwise({ redirectTo: "/home" });
    });
}