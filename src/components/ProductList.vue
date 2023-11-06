<template>
    <div class="card">

        <div v-if="loading" class="flex flex-row flex-wrap">

            <div v-for="i in 10" :key="i" class="col-12 sm:col-6 lg:col-4 xl:col-3 p-2">
                <div  class="p-4 border-1 surface-border surface-card border-round">
                    <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                        <Skeleton class="w-6rem border-round h-2rem" />
                        <Skeleton class="w-3rem border-round h-1rem" />
                    </div>
                    <div class="flex flex-column align-items-center gap-3 py-5">
                        <Skeleton class="w-9 shadow-2 border-round h-10rem" />
                        <Skeleton class="w-8rem border-round h-2rem" />
                        <Skeleton class="w-6rem border-round h-1rem" />
                    </div>
                    <div class="flex align-items-center justify-content-between">
                        <Skeleton class="w-4rem border-round h-2rem" />
                        <Skeleton shape="circle" class="w-3rem h-3rem" />
                    </div>
                </div>
            </div>

        </div>
    <DataView v-else :value="props.products" :layout="layout">



            


            <template #grid="slotProps">

                <div class="col-12 sm:col-6 lg:col-12 xl:col-3 p-2" >
                    <div class="p-4 border-1 h  surface-border surface-card border-round" >
                        <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                            <div class="flex    align-items-center gap-2">
                                <i class="pi pi-tag"></i>
                                <span class="font-semibold">{{ slotProps.data.category }}</span>
                            </div>
                            <!-- <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)"></Tag> -->
                        </div>
                        <div class="flex flex-column align-items-center gap-3 py-5">
                            <Image :src="slotProps.data.image" :alt="slotProps.data.title" width="250" height="250"
                                preview />
                            <!-- <img  class="w-9 shadow-2 border-round"  :src="slotProps.data.image"  :alt="slotProps.data.title" /> -->
                            <div class="text-1xl font-bold">{{ slotProps.data.title }}</div>
                            <Rating :modelValue="slotProps.data.rating" readonly :cancel="false"></Rating>
                        </div>
                        <div class="flex align-items-center justify-content-between">
                            <span class="text-2xl font-semibold">${{ slotProps.data.price }}</span>
                            <!-- <i v-badge="3" class="pi pi-shopping-cart"
          style="font-size: 2rem" /> -->
          <Button @click="addItem(slotProps.data)" icon="pi pi-shopping-cart" :badge="orders.find((element: Products) => element.id === slotProps.data.id)?.quantity !== undefined ? orders.find((element: Products) => element.id === slotProps.data.id)?.quantity.toString() : undefined" rounded></Button>
                        </div>
                    </div>
                </div>
            </template>
        </DataView>

    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';

import { useCartStore } from '../store/cart';
import { Products } from '../types/products';
import { storeToRefs } from 'pinia';
const props = defineProps({
  products: {
    type: Array as () => Products[],
    required: true
  }
});
const store = useCartStore()
const {orders}=storeToRefs(store)


const layout= ref('grid');
const loading = ref<boolean>(false);

const addItem=(item:Products)=>{
    store.addItem(item)

}
</script>
  

 