"use strict"
{
    let shop = {
        template: `
                    <h1>Buy stuff</h1>
                    <div ng-repeat="products in $ctrl.product" class="inventoryDiv">
                    <div class="inventoryContainer">
                        <h2>{{$ctrl.product[$index].name}}</h2>
                        <p>Price: US&#36{{$ctrl.product[$index].price}}</p>
                        <p>{{$ctrl.product[$index].description}}</p>
                        <input type="number" min="0" max="{{$ctrl.product[$index].quantity}}" placeholder="{{$ctrl.product[$index].quantity}} available">
                    </div>
                    <div class="imageContainer">
                        <img src="{{$ctrl.product[$index].image}}">
                    </div>
                    </div>
                    <div id="paypal-button"></div>`,
        controller: function (productService) {
            let vm = this;
            vm.product = productService.getProduct();
            vm.payPalPayment = productService.payPalPayment();
        }
    }
    shop.$inject = ['productService'];
    angular
        .module("app")
        .component("shop", shop);
}