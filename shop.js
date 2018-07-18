"use strict"
{
    let shop = {
    template:`<div><h1>Buy stuff</h1></div>`,
    controller: function(){
        let vm = this;
        }
    }
    angular
        .module("app")
        .component("shop", shop);
}