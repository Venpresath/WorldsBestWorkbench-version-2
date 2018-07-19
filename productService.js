'use strict';
{
    function productService() {
        
        let product = [{
            name: "World's Best Workbench Mk.I",
            price: 70,
            quantity: 3,
            description: "this one is great",
            image: "unnamed.jpg"

        },{
            name: "World's Best Workbench Mk.II",
            price: 90,
            quantity: 1,
            description: "this one is good too",
            image: "unnamed.jpg"
        },{
            name: "World's Best Workbench Mk.III",
            price: 290,
            quantity: 1,
            description: "this one is really awesome",
            image: "unnamed.jpg"
        },{
            name: "World's Best Workbench Mk.IV",
            price: 700,
            quantity: 30,
            description: "this one is the best one we have",
            image: "unnamed.jpg"
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
