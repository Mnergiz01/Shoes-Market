<template>
  <div class="flex flex-col min-h-screen">
    
    <main class="container mx-auto mt-10">
      <Navbar></Navbar>
      <router-view></router-view>
    </main>
    <Footer></Footer>
  </div>
</template>

<script setup>

import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'



</script>

<style scoped>

.container {
  transform: scale(0.8); /* Sayfanın ölçeğini %80'e düşürüyor */
  transform-origin: top center; /* Küçültme işleminin merkezini belirtiyor */
  width: 125%; /* İçeriğin kaymasını önlemek için genişliği artır */
}

</style>
