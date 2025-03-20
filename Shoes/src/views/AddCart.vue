<template>
    <div class="grid grid-cols-2 grid-rows-2 gap-4 h-screen p-4 mt-10">
        <div class="flex justify-center items-center text-white text-2xl font-bold">
            <div class="flex flex-col">
                <div
                    class="flex justify-center items-center bg-gray-100 w-full rounded-4xl hover:opacity-80 hover:scale-105 transition duration-300 overflow-hidden">
                    <!-- İlk resmi göstermek için sadece birinci indexi kullanıyoruz -->
                    <img v-if="product && product.images.length > 0" :src="product.images[0]" alt="Ürün Resmi "
                         class="w-150 h-150 object-cover object-center">
                </div>
            </div>
        </div>
        <Paycard :product="product" />
        <div class="flex items-center text-black text-2xl font-bold">
            <div class="w-full h-auto">
                <div class="ms-10 border-b">
                    <h1 class="font-bold text-black">{{ product?.title }}</h1>
                </div>
                <div class="border-b-white">
                    <p class="italic mt-5 ms-10">{{ product?.description }}</p>
                </div>
            </div>
        </div>
        <div class="flex items-center text-white text-2xl font-bold mb-60">
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import Paycard from "@/components/Paycard.vue";

// Vue Router'dan gelen ID parametresini al
const route = useRoute();
const product = ref(null);

// ID parametresini al
const id = route.params.id;

// sayfa yüklendiğinde ürün bilgilerini al
onMounted(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
        .then((response) => {
            product.value = response.data; // Gelen veriyi product'a ata
        })
        .catch((error) => {
            console.error("API Hatası:", error); // Hata durumunda konsola yazdır
        });
});

</script>
