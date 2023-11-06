<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCartStore } from './store/cart';
const store = useCartStore()
const { orders } = storeToRefs(store)


</script>

<template>
  <div>
    
    <div class=" flex flex-wrap justify-content-end gap-4 pa-1 " style="margin-right: 10px;margin-top: 15px;">
      <router-link to="/">    <i class="pi pi-home"  style="font-size: 2rem"></i></router-link>
      
      <router-link to="/cart"><i v-badge="orders.length" class="pi pi-fw pi-shopping-cart"
          style="font-size: 2rem" /></router-link>

    </div>
    <div class="flex justify-content-center flex-wrap">
      <div>
        <router-view />
      </div>
    </div>



  </div>
</template>

<style scoped></style>
