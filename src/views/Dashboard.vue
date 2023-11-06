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
    <div v-else>
        <h2>Cargando...</h2>
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