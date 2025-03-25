<template>
    <div>
        <div class="mt-15">
            <div
                style="color: #201B21; font-size: 36px; font-family: DM Sans; font-weight: 700; line-height: 48px; word-wrap: break-word" class="border-b">
                Popüler Ürünlerimiz
            </div>
        </div>
        <div class="flex flex-wrap justify-center gap-8 mt-20">
            <Card :product="product" v-for="product in filteredProducts" :key="product.id" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"/>
        </div>
    </div>
</template>

<script setup>
import Card from '@/components/Card.vue'
import { computed } from 'vue'

// Prop'u doğru şekilde Array olarak tanımladık
const props = defineProps({
    products: Array
})

// products dizisinden ilk 5 öğeyi filtreleyerek alıyoruz
const filteredProducts = computed(() => props.products.slice(0, 4))
</script>
