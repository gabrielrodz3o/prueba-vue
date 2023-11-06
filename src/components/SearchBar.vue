<template>
    <!-- <input v-model="searchText" @input="updateSearch" placeholder="Buscar..." /> -->
    <span class="p-input-icon-left">
    <i class="pi pi-search" />
    <InputText v-model="searchText"  @input="updateSearch"  placeholder="Buscar" />
</span>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const props = defineProps({
    initialValue: String,
  });
  
  const searchText = ref(props.initialValue || '');
  interface Emits {
  (e: "update-list", name: string): void;
}
const emits = defineEmits<Emits>();
  const updateSearch = () => {
 
    // Emite el evento 'update' con el valor actual de searchText
    emits('update-list', searchText.value);
  };
  </script>
  