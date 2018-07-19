"use strict"
{
    let home = {
        template: `
        <div class="homePage">
            <h1>World's Best Workbench</h1>
            <h2>Featured Items</h2>
            <div class="featuredItems">
            
                <div class="itemCard">
                    <h3>{{$ctrl.product[0].name}}</h3>
                    <img src="{{$ctrl.product[0].image}}" />
                </div>
                <div class="itemCard">
                    <h3>{{$ctrl.product[1].name}}</h3>
                    <img src="{{$ctrl.product[1].image}}" />
                </div>
                <div class="itemCard">
                    <h3>{{$ctrl.product[3].name}}</h3>
                    <img src="{{$ctrl.product[3].image}}" />
                </div>
            </div>
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