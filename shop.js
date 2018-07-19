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
                        <button>BUY NOW</button>
                    </div>
                    
                        <img src="{{$ctrl.product[$index].image}}">
                    
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