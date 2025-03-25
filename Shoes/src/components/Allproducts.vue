<template>
    <div>
        <div class="mt-15">
            <div
                style="color: #201B21; font-size: 36px; font-family: DM Sans; font-weight: 700; line-height: 48px; word-wrap: break-word" class="border-b">
                Tüm Ürünler
            </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-20">
            <Card :product="product" v-for="product in products" :key="product.id"/>
        </div>
    </div>
</template>

<script setup>
import Card from '@/components/Card.vue'

defineProps({
    products: Array  // 'products' bir dizi olarak tanımlandı
})
</script>
