<template>
  <router-link :to="{ name: 'AddCart', params: { id: props.product.id } }">
    <div class="flex justify-center mt-20">
      <div class="flex flex-col items-center w-60">
        <!-- Kart Resim Alanı -->
        <div class="w-full h-72 bg-white rounded-3xl shadow-lg overflow-hidden flex justify-center items-center hover:scale-105 transform transition duration-300">
          <img :src="product.images[0]" 
               alt="Ürün Resmi" 
               class="object-contain w-48 h-56 hover:opacity-80 hover:scale-y-105 transition duration-300 max-w-xs md:max-w-sm">
        </div>
        <!-- Kart Yazı Alanı -->
        <div class="mt-4 text-center">
          <h1 class="text-2xl font-semibold text-gray-800">{{ product.title }}</h1>
          <p class="mt-1 text-sm text-gray-500">{{ product.description }}</p>
          <p class="mt-2 text-xl font-bold text-gray-900">${{ product.price }}</p>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { defineProps, onMounted } from 'vue'

// Ürün nesnesinin tipi
interface Product {
  images: string[];   // Ürün resimleri dizisi
  title: string;      // Ürün başlığı
  description: string; // Ürün açıklaması
  price: number;      // Ürün fiyatı
}

const props = defineProps<{
  product: Product;
}>();
</script>

<style scoped>
/* Kartların merkezlenmesini sağlıyoruz */
.flex {
  display: flex;
}

.justify-center {
  justify-content: center;
}

.mt-20 {
  margin-top: 5rem; /* Üstten boşluk */
}

.w-60 {
  width: 15rem; /* Kart genişliği */
}
</style>
