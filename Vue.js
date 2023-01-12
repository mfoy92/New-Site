let app = new Vue({
    el: '#cart-page',
    data: {
        cart: {
            items: [
                { size: '8x10', quantity: 2, price: 50 },
                { size: '16x20', quantity: 1, price: 110 }
            ],
            totalCost: 210
        }
    }
});