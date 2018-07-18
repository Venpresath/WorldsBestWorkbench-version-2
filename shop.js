"use strict"
{
    let shop = {
        template: `
                    <h1>Buy stuff</h1>
                    <div ng-repeat="products in $ctrl.product" class="inventoryDiv">
                        <h2>{{$ctrl.product[$index].name}}</h2>
                        <p>Price: US$ {{$ctrl.product[$index].price}}
                        <p>Quantity: {{$ctrl.product[$index].quantity}}</p>
                        <button>BUY NOW</button>
                    </div>`,
        controller: function (productService) {
            let vm = this;
            vm.product = productService.getProduct();
        }
    }
    shop.$inject = ['productService'];
    angular
        .module("app")
        .component("shop", shop);
}