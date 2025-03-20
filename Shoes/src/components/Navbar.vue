<template>
  <nav>
    <div class="flex justify-between items-center border-b-2 p-3">
      <!-- Sol Kısım (Logo ve Başlık) -->
      <div class="flex items-center space-x-3">
        <img src="@/assets/r.png" alt="Resim"
          class="h-20 w-20 transition-transform duration-300 ease-in-out hover:scale-105" />
        <h2
          class="text-2xl text-gray-800 hover:text-gray-500 transition-all duration-500 ease-in-out font-serif italic">
          Muzaffer Nergiz Shopping
        </h2>
      </div>

      <!-- Sağ Kısım (Home, Sepet ve Bilgiler) -->
      <div class="flex items-center gap-6">
        <!-- Home Butonu -->
        <router-link to="/">
          <div
            class="flex items-center cursor-pointer mr-3 hover:text-gray-500 transition-all duration-300 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path stroke-dasharray="16" stroke-dashoffset="16" d="M5 21h14">
                  <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0" />
                </path>
                <path stroke-dasharray="14" stroke-dashoffset="14" d="M5 21v-13M19 21v-13">
                  <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="14;0" />
                </path>
                <path stroke-dasharray="24" stroke-dashoffset="24" d="M9 21v-8h6v8">
                  <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="24;0" />
                </path>
                <path stroke-dasharray="28" stroke-dashoffset="28" d="M2 10l10 -8l10 8">
                  <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.6s" values="28;0" />
                </path>
              </g>
            </svg>
            <span class="text-xl text-gray-800">Home</span>
          </div>
        </router-link>

        <!-- Sepet Butonu -->
        <router-link to="/mybag">
          <div
            class="flex items-center border rounded-3xl px-3 py-1 hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="text-gray-800">
              <path fill="currentColor"
                d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 4 0v1h-4Zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2Z" />
            </svg>
            <h1 class="text-xl font-semibold text-gray-800 ml-2">View Cart</h1>
            <!-- Sepet ürün sayısı -->
            <p v-if="cartCount > 0" class="ml-3 bg-red-700 p-1 px-2 rounded-full text-white text-xs font-bold">
              {{ cartCount }}
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Sepet ürünü sayısını tutacak değişken
const cartCount = ref(0);

// Sayfa yüklendiğinde sepeti kontrol et
onMounted(() => {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]'); // Sepet verisini al
  cartCount.value = cart.length; // Sepetteki ürün sayısını al
  console.log(cart)
});
</script>
