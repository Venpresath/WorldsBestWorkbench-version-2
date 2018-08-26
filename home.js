"use strict"
{
    let home = {
        template: `
        <div class="homePage">
            <div class="home-welcome">
                <h1>World's Best Workbench</h1>
                <p>Over 10 years of design</p>
                <a href="#!/shop">View Our Shop!</a>
            </div>
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