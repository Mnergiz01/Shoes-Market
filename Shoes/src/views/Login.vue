<template>
    <div class="flex items-center justify-center min-h-screen">
      <div class="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
        <h2 class="text-2xl font-semibold text-center text-gray-700">Giriş Yap</h2>
        <form @submit.prevent="handleLogin" class="mt-4">
          <div>
            <label class="block text-sm font-medium text-gray-600">Email</label>
            <input type="email" v-model="email" class="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-blue-200" required />
          </div>
          <div class="mt-4">
            <label class="block text-sm font-medium text-gray-600">Şifre</label>
            <input type="password" v-model="password" class="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-blue-200" required />
          </div>
          <button type="submit" class="w-full mt-6 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
            Giriş Yap
          </button>
        </form>
        <p class="mt-4 text-center text-sm text-gray-500">
          Hesabın yok mu? <router-link to="/register" class="text-blue-600 hover:underline">Kayıt Ol</router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const email = ref('');
  const password = ref('');
  const router = useRouter();
  
  const handleLogin = () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.email === email.value && user.password === password.value) {
        localStorage.setItem('token', user.token); // Kullanıcıyı giriş yapmış olarak işaretle
        router.push('/');
      } else {
        alert('Geçersiz email veya şifre!');
      }
    } else {
      alert('Kullanıcı bulunamadı!');
    }
  };
  </script>