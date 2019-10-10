export const state = ()  => ({
                               items: [
                                 {
                                   label: 'Yeah Keto',
                                   prise: 80,
                                   sale: 69,
                                   description: '1'
                                 },
                                 {
                                   label: 'Yeah Keto mini',
                                   prise: 60,
                                   sale: 39,
                                   description: '2'
                                 },
                                 {
                                   label: 'Yeah Keto max',
                                   prise: 90,
                                   sale: 79,
                                   description: '3'
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
                                 }]
                             });

export const mutations = {
  addQuantity(state, id) {
    state.cart[id].amount++;
  },
  deleteItem(state, id) {
    state.cart[id].amount = 0;
  }
};
