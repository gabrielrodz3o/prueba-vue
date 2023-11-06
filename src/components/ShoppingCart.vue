
<template>

   
            <DataView :value="orders">
    <template #list="slotProps">
        <div class="col-12">
            <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" :src="slotProps.data.image" :alt="slotProps.data.title" />
                <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                    <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                        <div class="text-2xl font-bold text-900">{{ slotProps.data.quantity }} x {{ slotProps.data.title }}</div>
                        <Rating :modelValue="slotProps.data.rating" readonly :cancel="false"></Rating>
                        <div class="flex align-items-center gap-3">
                            <span class="flex align-items-center gap-2">
                                <i class="pi pi-tag"></i>
                                <span class="font-semibold">{{ slotProps.data.category }}</span>
                            </span>
                            <!-- <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)"></Tag> -->
                        </div>
                    </div>
                    <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                        <span class="text-2xl font-semibold">${{ slotProps.data.price*slotProps.data.quantity  }}</span>
                        <Button @click="store.removeItem(slotProps.data)" icon="pi pi-times" severity="danger" rounded outlined aria-label="Cancel" />
                    </div>
                </div>
            </div>
        </div>
    </template>
</DataView>


</template>

<script setup lang="ts">
import { useCartStore } from '../store/cart';
import { storeToRefs } from 'pinia';
const store=useCartStore()
const {orders}=storeToRefs(store)
</script> 

<style scoped>

</style>