<template>
  <router-link to="/add">
    <div class="flex flex-wrap justify-center gap-8 mt-20">
      <div v-for="i in 5" :key="i" class="flex flex-col items-center">
        <!-- Kart Resim Alanı -->
        <div class="w-60 h-72 bg-white rounded-3xl shadow-lg overflow-hidden flex justify-center items-center hover:scale-105 transform transition duration-300">
          <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1733f6cc-b764-4dee-80cf-4b01fd67041b/AIR+FORCE+1+%2707.png"
               alt="Off-White Shoe" class="object-contain w-48 h-56 hover:opacity-80 hover:scale-y-105 transition duration-300  max-w-xs md:max-w-sm">
        </div>
        <!-- Kart Yazı Alanı -->
        <div class="mt-4 text-center">
          <h1 class="text-2xl font-semibold text-gray-800">Off-White</h1>
          <p class="mt-1 text-sm text-gray-500">Out Of Office Sneakers</p>
          <p class="mt-2 text-xl font-bold text-gray-900">$775</p>
        </div>
      </div>
    </div>
  </router-link>
  </template>
  