<template>
    <div v-if="!loading">
        <div class=" flex flex-wrap justify-content-center gap-4 pa-1 ">
            <CategoryList :categories="categories" @update-categories="updateCategorie" />
            <SearchBar @update-list="updateList" />
        </div>
        <div>
            <ProductList v-if="filteredProducts.length > 0" :products="filteredProducts" />
            <h1 v-else>No se encontraron productos</h1>
        </div>

    </div>
    <div v-else class="flex flex-row flex-wrap">
     

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
</template>

<script setup lang="ts">
import ProductList from '../components/ProductList.vue';
import SearchBar from '../components/SearchBar.vue';
import CategoryList from '../components/CategoryList.vue';
import { Products } from '../types/products';
// import ProductList from '@';
import { computed, onMounted, ref } from 'vue';
import { api_Get } from '../api/api';
interface Categories {
    name: string
}
const products = ref<Products[]>([]);
const categories = ref<Categories[]>([]);
const loading = ref<boolean>(false);
const searchQuery = ref<string>('');
const searchCategories = ref<Categories>();
onMounted(async () => {
    loading.value = true
    // setTimeout(async () => {
    searchCategories.value = { name: "Todas" }
    const responseProducts = await api_Get('products')
    products.value = await responseProducts.json();
    const responseCategories = await api_Get('products/categories')
    let all_categories = []
    all_categories.push({ name: "Todas" })
    for (var item of await responseCategories.json()) {
        all_categories.push({ name: item })
    }
    categories.value = all_categories


    loading.value = false
    // }, 4000);

});

const updateList = (name: string) => {
    searchQuery.value = name;
};
const updateCategorie = (categorie: Categories) => {

    searchCategories.value = categorie;
};
const filteredProducts = computed(() => {

    if (searchCategories.value?.name === 'Todas' && searchQuery.value === '') {
        return products.value;
    } else {

        return products.value.filter(product => {
            const matchesCategory = searchCategories.value?.name === 'Todas' || product.category === searchCategories.value?.name;
            const matchesQuery = searchQuery.value === '' || product.title.toLowerCase().includes(searchQuery.value.toLowerCase());
            return matchesCategory && matchesQuery;
        });
    }
});

</script>

<style scoped></style>