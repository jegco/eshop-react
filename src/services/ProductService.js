 import axios from 'axios';

 const url = "https://eshop-752ae.firebaseio.com/stock.json"
 
 const productService = {
     getProducts: async () => {
         const response = await axios.get(url);
         return response.data;
     }
 }

 export default productService;