<template>
  <div class="flex flex-col min-h-screen">
    <main class="container mx-auto mt-10">
      <!-- Navbar sadece login ve register sayfalarında gizlenecek -->
      <Navbar v-if="showNavbar" />
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

// Mevcut route'a göre Navbar'ı göstereceğiz veya gizleyeceğiz
const route = useRoute();

// Navbar'ı sadece login ve register sayfalarında gizle
const showNavbar = computed(() => {
  return !['/login', '/register'].includes(route.path);
});
</script>

<style scoped>
.container {
  transform: scale(0.8); /* Sayfanın ölçeğini %80'e düşürüyor */
  transform-origin: top center; /* Küçültme işleminin merkezini belirtiyor */
  width: 125%; /* İçeriğin kaymasını önlemek için genişliği artır */
}
</style>
