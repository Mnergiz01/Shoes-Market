<template>
  <div class="flex justify-between mt-20 px-10 min-h-screen">
    <div class="w-2/3">
      <h1 class="text-4xl font-sans">SEPETİM</h1>
      <div v-if="product.length > 0" class="mt-10 flex flex-col gap-10">
        <!-- Sepet Ürünleri -->
        <div v-for="item in product" :key="item.id" class="flex flex-row gap-5 border-b pb-5">
          <!-- Remove Butonu -->
          <div class="cursor-pointer mt-3" @click="removeItem(item)">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g fill="none" stroke="#ce0707" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path d="M5 5l14 14" />
                <path d="M19 5l-14 14" />
              </g>
            </svg>
          </div>
          <!-- Ürün Resmi -->
          <div>
            <img :src="item.images && item.images[0]" class="w-[165px] h-[165px]" />
          </div>

          <div class="flex justify-between w-full">
            <!-- Sol Kısım (Ürün Adı, Arttırma/Azaltma Butonları) -->
            <div>
              <div class="text-2xl font-bold font-sans">{{ item.title }}</div>
              <div class="text-xl font-sans">{{ item.description }}</div>
              <div class="flex items-center gap-3 mt-5">
                <div class="text-2xl font-medium font-sans border mt-6 flex justify-between rounded-4xl">
                  <button class="cursor-pointer px-4" @click="changeQuantity(item, -1)">-</button>
                  <span>{{ item.quantity }}</span>
                  <button class="cursor-pointer px-4" @click="changeQuantity(item, 1)">+</button>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-end justify-start mt-5">
              <div class="text-2xl font-bold text-gray-800">${{ (item.price * item.quantity).toFixed(2) }}</div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Sepetiniz boş.</p>
      </div>
    </div>

    <!-- Sağda Ödeme Kartı -->
    <div class="w-[400px] h-[443px] relative mt-20 ml-10 bg-white rounded-2xl shadow-lg">
      <!-- Sipariş Özeti -->
      <div class="absolute left-8 top-8 inline-flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <div class="text-[#201b21] text-2xl font-bold">Sipariş Özeti</div>
          <div class="text-[#67696e] text-xl">Ara Toplam: ${{ subtotal.toFixed(2) }}</div>
          <div class="text-[#67696e] text-xl">İndirim: $0.00</div>
        </div>
        <div class="w-full border-t border-[#ddd]"></div>
        <div class="text-2xl font-semibold mt-2">Toplam: ${{ subtotal.toFixed(2) }}</div>
      </div>

      <!-- Ödeme Yap Butonu -->
      <div
        @click="handlePayment"
        class="absolute  bottom-8 left-25 w-50 py-3 bg-[#201b21] rounded-lg inline-flex justify-center items-center cursor-pointer hover:bg-[#333] transition duration-300">
        <div class="text-white  font-bold flex items-center  justify-center gap-2">
          <span>Satın Al</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" stroke-width="2" d="M2 12h20m-9-9l9 9l-9 9" />
          </svg>
        </div>
      </div>
    </div>
  </div>

  <!-- Toast Mesajı -->
  <div
    v-if="toastMessage"
    class="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 z-50 transition-all duration-300"
    :class="{'translate-y-10 opacity-100': toastMessage, 'translate-y-0 opacity-0': !toastMessage}">
    <span>{{ toastMessage }}</span>
    <button @click="closeToast" class="ml-4 bg-transparent text-white hover:bg-white hover:text-black p-2 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
        <path d="M8 1a7 7 0 1 0 7 7 7 7 0 0 0-7-7zM7.646 4.646a.5.5 0 0 1 .708 0L8 5.293l.646-.647a.5.5 0 0 1 .708.708L8.707 6l.647.647a.5.5 0 1 1-.708.708L8 6.707l-.646.646a.5.5 0 0 1-.708-.708L7.293 6l-.647-.647a.5.5 0 0 1 0-.708z"/>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const product = ref([]);
const toastMessage = ref('');
const router = useRouter();

// LocalStorage'dan Sepeti Yükleme
const loadCart = () => {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  if (Array.isArray(cart)) {
    product.value = cart;
  }
};

// Sepetten ürün silme fonksiyonu
const removeItem = (item) => {
  const updatedCart = product.value.filter(i => i.id !== item.id);
  product.value = updatedCart;
  localStorage.setItem('cart', JSON.stringify(updatedCart)); // Sepeti güncelle
  showToastMessage('Ürün sepetinizden kaldırıldı.');
};

// Miktarı arttırma ve azaltma
const changeQuantity = (item, amount) => {
  const updatedCart = product.value.map(i => {
    if (i.id === item.id) {
      return { ...i, quantity: Math.max(1, i.quantity + amount) }; // En az 1 olabilir
    }
    return i;
  });

  product.value = updatedCart;
  localStorage.setItem('cart', JSON.stringify(updatedCart)); // Sepeti güncelle
};

// Toplam fiyat hesaplama
const subtotal = computed(() => {
  return product.value.reduce((sum, item) => sum + item.price * item.quantity, 0);
});

// Kullanıcı Giriş Bilgileri
const email = ref("");
const password = ref("");

// Kullanıcı girişini kontrol etme
const showLogin = ref(false);

// Sayfa yüklendiğinde sepeti getir
onMounted(() => {
  loadCart();
});

// Ödeme yap butonuna tıklama
const handlePayment = () => {
  const storedUser = localStorage.getItem('user');
  if (!storedUser) {
    toastMessage.value = "Giriş yapmanız lazım";
  } else {
    toastMessage.value = "Ürün satın alındı";
  }
};

// Toast mesajını kapatma
const closeToast = () => {
  toastMessage.value = '';
};

// Sepet güncelleme mesajı
const showToastMessage = (message) => {
  toastMessage.value = message;
  setTimeout(() => {
    toastMessage.value = ''; // Mesajı 3 saniye sonra kaldır
  }, 3000);
};

// Giriş yapma sayfasına yönlendirme
const redirectToLogin = () => {
  router.push({ name: 'login' });
};
</script>

<style scoped>
/* Toast Mesajı stili */
.toast-message {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 9999;
}
</style>
