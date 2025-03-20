<template>
    <div>
        <Upperarea />
        <Populararea :products="products"/>
        <Allproducts :products="products" class="mt-50"/>
    </div>
</template>

<script setup>
import Upperarea from '../components/Upperarea.vue'
import Populararea from '../components/Populararea.vue'
import { onMounted, ref } from 'vue';
import axios from 'axios';
import Allproducts from '@/components/Allproducts.vue';

const products = ref([]);  // Dizi olarak başlatıyoruz

onMounted(() => {
    axios.get('https://dummyjson.com/products')
        .then((response) => {
            // API yanıtındaki 'products' dizisini alıyoruz
            products.value = response.data.products; 
        })
        .catch((error) => console.log(error));
    
})
</script>
