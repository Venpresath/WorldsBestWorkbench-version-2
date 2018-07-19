'use strict';
{
    function productService() {
        
        let product = [{
            name: "World's Best Workbench Mk.I",
            price: 70,
            quantity: 3,
            image: "unnamed.jpg",
            description: "this one is great"

        },{
            name: "World's Best Workbench Mk.II",
            price: 90,
            quantity: 1,
            image: "unnamed.jpg",
            description: "this one is good too"
        },{
            name: "World's Best Workbench Mk.III",
            price: 290,
            quantity: 1,
            image: "unnamed.jpg",
            description: "this one is really awesome"
        },{
            name: "World's Best Workbench Mk.IV",
            price: 700,
            quantity: 30,
            image: "unnamed.jpg",
            description: "this one is the best one we have"
        }];

        const getProduct = function () {
            return product;
        };

        // const setProduct = function(newProduct){
        //     product = newProduct;
        // }

        return {
            getProduct
        };
    }

    angular
        .module("app")
        .factory("productService", productService);
}
