<template>
 
    <div class="flex flex-wrap justify-content-center gap-4 pa-1 ">
        <div class="col-12">
        <h1>Carrito</h1>
     
            <ShoppingCart v-if="orders.length>0" />
                <div v-else>
                    <h3 >No hay articulos </h3>
                    <router-link to="/">    <Button label="Agregar articulos" raised /></router-link>
                
                </div>
                <div v-if="orders.length>0"  class="flex justify-content-end">
                    <h2 >Total $ {{ totalPrice }}</h2>
                   
                </div>
                <div v-if="orders.length>0"  class="flex justify-content-end">
                    <Button label="Continuar" raised />
                   
                </div>
     
            
        </div>
   
    </div>

</template>

<script setup lang="ts">
import ShoppingCart from '../components/ShoppingCart.vue';
import { useCartStore } from '../store/cart';
import { storeToRefs } from 'pinia';
const store=useCartStore()
const {orders,totalPrice}=storeToRefs(store)
</script>

<style scoped>

</style>