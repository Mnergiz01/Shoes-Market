<template>
    <div class="flex items-center justify-center min-h-screen ">
      <div class="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
        <h2 class="text-2xl font-semibold text-center text-gray-700">Kayıt Ol</h2>
        <form @submit.prevent="handleRegister" class="mt-4">
          <div>
            <label class="block text-sm font-medium text-gray-600">Ad</label>
            <input type="text" v-model="name" class="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-blue-200" required />
          </div>
          <div class="mt-4">
            <label class="block text-sm font-medium text-gray-600">Email</label>
            <input type="email" v-model="email" class="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-blue-200" required />
          </div>
          <div class="mt-4">
            <label class="block text-sm font-medium text-gray-600">Şifre</label>
            <input type="password" v-model="password" class="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-blue-200" required />
          </div>
          <button type="submit" class="w-full mt-6 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
            Kayıt Ol
          </button>
        </form>
        <p class="mt-4 text-center text-sm text-gray-500">
          Zaten hesabın var mı? <router-link to="/login" class="text-blue-600 hover:underline">Giriş Yap</router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const name = ref('');
  const email = ref('');
  const password = ref('');
  const router = useRouter();
  
  const handleRegister = () => {
    if (name.value && email.value && password.value) {
      const user = {
        name: name.value,
        email: email.value,
        password: password.value,
        token: Math.random().toString(36).substr(2) // Basit bir token üretimi
      };
      localStorage.setItem('user', JSON.stringify(user)); // Kullanıcıyı localStorage'e kaydet
      router.push('/login'); // Kayıt başarılıysa yönlendirme yapılır
    }
  };
  </script>
  