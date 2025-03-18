<template>
  <router-link to="/add">
    <div class="flex flex-wrap justify-center gap-8 mt-20">
      <div v-for="i in 5" :key="i" class="flex flex-col items-center">
        <!-- Kart Resim Alanı -->
        <div class="w-60 h-72 bg-white rounded-3xl shadow-lg overflow-hidden flex justify-center items-center hover:scale-105 transform transition duration-300">
          <img src="https://s3-alpha-sig.figma.com/img/62bd/5f12/dfbc5c1402f291c31b1dd89123a0eae3?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bjz-PJcyINzUWKo0bPUo-ZMC~tEqRhGKvX28GG878dTHEUdFQekPUfTmU~~Teuuzl6kdnzJxgpYobNUDWB14Qz9LxooMCr1aQj9XU87MQMbx64~8PUTTZhMeFizQb8swbGcMSKa2PxBirrtyjjhzpwk3H4~LwHoDr5NfHZZ2FIUB3g7hTBMhiUiJWM7PWVb3Xbi88zEOveuTfAzIyjosfeuDAuF657uu92BXRYTrG0o20mCeHV4n61FAZKD2S0YPrzFQjLJZZZJ6S9qsbNBb22h7aqU8AN7nI0lqzJn7gEdRDJYqCF2EZwunIMm3ZdrYoPbe6Yhlpg4IJNt823XXbQ__"
               alt="Off-White Shoe" class="object-contain w-48 h-56 hover:opacity-80 hover:scale-y-105 transition duration-300">
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
  