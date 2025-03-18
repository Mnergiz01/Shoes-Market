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