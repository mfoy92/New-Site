

let app = new Vue({
    el: '#cart-page',
    data: {
        cart: [
            { size: '8x10', quantity: 0, price: 50 },
            { size: '16x20', quantity: 0, price: 110 }
        ]
    },
    computed: {
        totalCost() {
            return this.cart.reduce((total, item) => total + (item.quantity * item.price), 0);
        }
    }
});