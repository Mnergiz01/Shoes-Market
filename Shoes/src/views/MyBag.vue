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
    <div class="w-[400px] h-[443px] relative mt-20 ml-10">
      <div class="w-[400px] h-[443px] absolute left-0 top-0 bg-white rounded-[20px] shadow-md"></div>

      <!-- Sipariş Özeti -->
      <div class="absolute left-[36px] top-[36px] inline-flex flex-col gap-[18px]">
        <div class="flex flex-col gap-2">
          <div class="text-[#201b21] text-2xl font-bold">Sipariş Özeti</div>
          <div class="text-[#67696e] text-xl">Ara Toplam: ${{ subtotal.toFixed(2) }}</div>
          <div class="text-[#67696e] text-xl">İndirim: $0.00</div>
        </div>
        <div class="w-80 border"></div>
        <div class="text-2xl">Toplam: ${{ subtotal.toFixed(2) }}</div>
      </div>

      <!-- Ödeme Yap Butonu -->
      <div class="w-[360px] px-20 py-5 absolute left-[36px] top-[347px] bg-[#201b21] rounded-[10px] inline-flex justify-center items-center">
        <div class="text-white text-lg font-bold flex justify-end">
          <span>Ödeme Yap</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" stroke-width="2" d="M2 12h20m-9-9l9 9l-9 9" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const product = ref([]);

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

// Sayfa yüklendiğinde sepeti getir
onMounted(() => {
  loadCart();
});
</script>
