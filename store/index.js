export const state = () => ({
    corpInfo: {
        nameCorp: 'AVG Marketing LLC',
        addressCorp: '2515 E Thomas Rd Suite 16-1071 Phoenix, Arizona 85016',
        stateCorp: 'SC',
        phoneCorp: '+1 833-799-7853',
        linkCorp: 'yogurtskincream.com',
        brandName: 'Yogurt Skin Cream'
    },
    sliderText: {
        slide1: 'INCREASE HYDRATION',
        slide2: 'IMPROVE APPEARANCE',
        slide3: 'REDUCE WRINKLES'
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

//--------------- Don`t change ---------------
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
