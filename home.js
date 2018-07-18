"use strict"
{
    let home = {
        template: `<div><h1>World's Best Workbench</h1></div>`,
        controller: function () {
            let vm = this;
        }
    }
    angular
        .module("app")
        .component("home", home);
}