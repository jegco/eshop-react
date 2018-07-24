 import axios from 'axios';

 const url = "https://eshop-752ae.firebaseio.com/stock.json"
 
 const productService = {
     getProducts: async() => {
         const response = await axios.get(url);
         return response.data;
     },

     updateStack: async(stack) => {
        const data = JSON.stringify(stack);
        return axios.put('https://eshop-752ae.firebaseio.com/stock/' +
          stack.id + '.json', data);
      },

      addToCar: async(stack) => {
        const data = JSON.stringify(stack);
        return axios.put('https://eshop-752ae.firebaseio.com/paycar/' +
        stack.id + '.json', data)
      },
    
      getProduct: async(id) => {
        const response = await axios.get('https://eshop-752ae.firebaseio.com/stock/' + id + '.json');
        return response.data;
      },
    
      getPaycar: async() => {
        const response = await axios
          .get('https://eshop-752ae.firebaseio.com/paycar.json');
        return response.data
      },
    
      pay: async() => {
        const response = axios.delete('https://eshop-752ae.firebaseio.com/paycar/.json');
          return response.data;
      }
 }

 export default productService;