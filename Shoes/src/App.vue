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
  transform: scale(0.9); /* Ekrandaki tüm içeriği %90 oranında küçült */ /* Küçültme işlemi üst sol köşeden başlasın */
  transform-origin: top center;
}
</style>
