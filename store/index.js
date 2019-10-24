export const state = () => ({
    corpInfo: {
        nameCorp: '',
        addressCorp: '',
        phoneCorp: '',
        linkCorp: '',
        brandName: ''
    },
    items: [
        {
            label: 'Yogurt Skin Under-Eya Cream',
            prise: 69,
            description: 'lorem ipsum'
        },
        {
            label: 'Yogurt Skin Lifting Cream',
            prise: 49,
            description: 'lorem ipsum'
        },
        {
            label: 'Yogurt Skin Aging Cream',
            prise: 59,
            description: 'lorem ipsum'
        }],
    cart: [
        {
            id: 0,
            amount: 0
        },
        {
            id: 1,
            amount: 0
        },
        {
            id: 2,
            amount: 0
        }],
    shipping: {
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        address2: '',
        city: '',
        country: '',
        states: '',
        zipCode: ''
    }
});

export const mutations = {
    addQuantity(state, obj) {
        state.cart[parseInt(obj.id)].amount += parseInt(obj.quantity);
    },
    changeQuantity(state, obj) {
        state.cart[parseInt(obj.id)].amount = parseInt(obj.quantity);
    },
    deleteItem(state, id) {
        state.cart[id].amount = 0;
    },
    clearShipping(state) {
        state.shipping = {
            email: '',
            firstName: '',
            lastName: '',
            address: '',
            address2: '',
            city: '',
            country: '',
            states: '',
            zipCode: ''
        };
    },
    editShipping(state, obj) {
        state.shipping[obj.param] = obj.value;
    }
};
