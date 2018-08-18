'use strict';
{
    function productService() {
        
        let product = [{
            name: "World's Best Workbench Mk.I",
            price: 175.00,
            quantity: 7,
            description: "this one is great",
            image: "unnamed.jpg"
        }];

        const getProduct = function () {
            return product;
        };

        const payPalPayment = function(){
            paypal.Button.render({
                env: 'sandbox',
                client: {
                  sandbox: 'demo_sandbox_client_id'
                },
                payment: function (data, actions) {
                  return actions.payment.create({
                    transactions: [{
                      amount: {
                        total: product[0].price,
                        currency: 'USD'
                      }
                    }]
                  });
                },
                onAuthorize: function (data, actions) {
                  return actions.payment.execute()
                    .then(function () {
                      window.alert('Thank you for your purchase!');
                    });
                }
              }, '#paypal-button');
        }

        return {
            getProduct,
            payPalPayment
        };
    }

    angular
        .module("app")
        .factory("productService", productService);
}
