import { Products } from "../types/products";
import { defineStore } from "pinia";
import { ref, computed } from 'vue';

export const useCartStore = defineStore("cart", () => {
  const orders = ref<Products[]>([]);
  
  const removeItem = (item: Products) => {
    const index = orders.value.findIndex(
      (currItem) => currItem.id === item.id
    );
  
    if (index !== -1) {
      orders.value.splice(index, 1);
    }
  };
  const addItem = (item: Products ) => {

        let targetItem = orders.value.find(
          (currItem) => currItem.id === item.id
        );
      
        if (targetItem) {
          targetItem.quantity = +(targetItem.quantity || 0);
          targetItem.quantity += 1;
        } else {
          item.quantity=1
          orders.value.push(item)
        }
   
  };
 const totalPrice= computed(() => orders.value.reduce((total, producto, index) => {

  const subtotal = producto.price * producto.quantity;
  return total + subtotal;
}, 0))
return{orders,totalPrice,addItem,removeItem}
});
