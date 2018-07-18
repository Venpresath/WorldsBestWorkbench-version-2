"use strict";
{
    function productService($http) {

        let data = [{
            product: "World's Best Workbench V1",
            price: 70,
            quantity: 3 
        }];

        const getProductDetail = function () {
            let url = `https://api.chec.io/v1/products`;
            return $http.get(url).then(function (response) {
                console.log(response);
            });
        }

        return {
            getProductDetail,
            getData,
            setData
        };
    }
    angular
        .module("app")
        .factory("productService", productService)
}
