<template>
    <div class="w-[528px] h-auto bg-white rounded-[20px] shadow-md mt-20 px-6 py-8">
        <!-- Ürün Bilgisi -->
        <div class="flex flex-col gap-6">
            <div class="flex flex-col gap-2">
                <h2 class="text-[#201b21] text-2xl font-bold">{{ product?.title }}</h2>
                <p class="text-[#67696e] text-xl">{{ product?.description }}</p>
            </div>
            <div class="text-[#201b21] text-2xl font-medium">${{ product?.price }}</div>
        </div>

        <div class="w-full h-px bg-[#e9ebee] mt-6"></div>

        <!-- Miktar Seçici ve Sepete Ekle -->
        <div class="flex justify-between items-center mt-6">
            <div class="px-4 py-3 rounded-lg shadow-md outline outline-1 outline-[#e9ebee] flex items-center gap-4">
                <button class="text-xl font-bold" @click="changeQuantity(-1)">-</button>
                <span class="text-lg font-bold">{{ quantity }}</span>
                <button class="text-xl font-bold" @click="changeQuantity(1)">+</button>
            </div>
            <button class="px-6 py-3 bg-[#201b21] text-white text-lg font-bold rounded-lg w-full" @click="addToCart">
                Sepete Ekle
            </button>
        </div>

        <p class="text-end mt-4">Üründen {{ quantity }} Adet Aldınız</p>

        <!-- Success Alert with Transition -->
        <transition name="fade">
            <div v-if="showalert" class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                <span class="font-medium">Success alert!</span> Ürün sepete eklendi!
            </div>
        </transition>

    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// `Product` türünü tanımlıyoruz
interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    quantity?: number;
}

const showalert = ref(false);

// `product` prop'unu doğru şekilde tanımlıyoruz
const props = defineProps<{
    product: Product;
}>();

const quantity = ref(1);

// Handles initializing the quantity when the component is mounted
onMounted(() => {
    if (!props.product) return;

    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingProduct = cart.find((item: Product) => item.title === props.product?.title);

    if (existingProduct) {
        quantity.value = existingProduct.quantity || 1; // Quantity varsa al, yoksa 1 yap
    }
});

// Updates the cart in local storage
const updateCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingProduct = cart.find((item: Product) => item.title === props.product.title);

    if (existingProduct) {
        existingProduct.quantity = quantity.value;
    } else {
        cart.push({ ...props.product, quantity: quantity.value });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
};

// Change quantity of product
const changeQuantity = (amount: number) => {
    if (quantity.value + amount > 0) {
        quantity.value += amount;
        updateCart();
    }
};

// Adds product to the cart and shows a success message
const addToCart = () => {
    updateCart();
    showalert.value = true;
    setTimeout(() => {
        showalert.value = false;
    }, 2000);
};
</script>

<style scoped>
/* Fade Transition Styles */
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
