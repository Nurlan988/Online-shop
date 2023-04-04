import axios from 'axios';

export default {
  GET_PRODUCTS_FROM_API({ commit }) {
    return axios('http://localhost:3000/products', {
      method: 'GET'
    })
      .then((response) => {
        commit('SET_RPODUCT_FROM_STATE', response.data);
        return response;
      })
      .catch((error) => {
        console.log(error);
        return error;
      })
  },
  ADD_TO_CART({commit}, product){
    commit('SET_CART', product);
  },
  DLETE_FROM_CART({commit}, index){
    commit('REMOVE_FROM_CART', index)
  },
  INCREMENT_CART_ITEM({commit}, index){
    commit('INCREMENT', index);
  },
  DECREMENT_CART_ITEM({commit}, index){
    commit('DECREMENT', index);
  }
}