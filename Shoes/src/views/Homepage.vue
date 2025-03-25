<template>
    <div class="h-full ">
        <!-- Loading göstergesi -->
        <div v-if="isLoading" class="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
            <div class="text-black text-3xl">Yükleniyor...</div>
        </div>

        <!-- Ana içerik kısmı, yalnızca loading tamamlandıktan sonra gösterilir -->
        <div v-if="!isLoading">
            <Upperarea />
            <Populararea :products="products" />
            <Allproducts :products="products" class="mt-50" />
        </div>
    </div>
</template>

<script setup>
import Upperarea from '../components/Upperarea.vue'
import Populararea from '../components/Populararea.vue'
import { onMounted, ref } from 'vue';
import axios from 'axios';
import Allproducts from '@/components/Allproducts.vue';

const products = ref([]);  // Dizi olarak başlatıyoruz
const isLoading = ref(true);  // Loading durumu

onMounted(() => {
    axios.get('https://dummyjson.com/products')
        .then((response) => {
            // API yanıtındaki 'products' dizisini alıyoruz
            products.value = response.data.products;
            isLoading.value = false;  // Yükleme tamamlandı, loading'i gizle
        })
        .catch((error) => {
            console.log(error);
            isLoading.value = false;  // Hata durumunda loading'i gizle
        });
})
</script>