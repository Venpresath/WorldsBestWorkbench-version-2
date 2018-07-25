'use strict';
{
    function productService() {
        
        let product = [{
            name: "World's Best Workbench Mk.I",
            price: 70,
            quantity: 7,
            description: "this one is great",
            image: "unnamed.jpg"
        }];

        const getProduct = function () {
            return product;
        };

        return {
            getProduct
        };
    }

    angular
        .module("app")
        .factory("productService", productService);
}
