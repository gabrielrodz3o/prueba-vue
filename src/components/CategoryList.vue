<template>
    <Dropdown v-model="selectedCategories" :options="props.categories" optionLabel="name" @change="updateSearch"  placeholder="Seleciona una categoria" class="w-full md:w-14rem" />
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  interface Props {
    categories: Array<string[]>[];

    }
    const props = defineProps<Props>();
     
    const emits = defineEmits(['update-categories']);

      const selectedCategories = ref({name:"Todas"});
      const updateSearch = () => {
 emits('update-categories', selectedCategories.value);
};

  </script>
  