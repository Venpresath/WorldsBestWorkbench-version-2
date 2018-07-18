"use strict"
{
    let about = {
    template:`<p>Description about workbenches and stuff</p>`,
    controller: function(){
        let vm = this;
        }
    }
    angular
        .module("app")
        .component("about", about);
}