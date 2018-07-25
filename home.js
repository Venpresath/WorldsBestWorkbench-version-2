"use strict"
{
    let home = {
        template: `
        <div class="homePage">
            <h1>World's Best Workbench</h1>
        </div>
        <div class="offered">
            <h2>What We Offer</h2>
        </div>`,
        controller: function (productService) {
            let vm = this;
            vm.product = productService.getProduct();
        }
    }
    home.$inject = ['productService'];
    angular
        .module("app")
        .component("home", home);
}