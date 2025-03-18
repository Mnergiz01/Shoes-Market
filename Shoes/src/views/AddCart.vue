<template>
    <div class="grid grid-cols-2 grid-rows-2 gap-4 h-screen p-4">
        <div class="flex justify-center items-center text-white text-2xl font-bold">
            <div class="flex flex-col ">
                <div
                    class="flex justify-center items-center bg-gray-100 w-2xl rounded-4xl hover:opacity-80 hover:scale-105 transition duration-300 overflow-hidden">
                    <img src="file:///Users/muzaffernergiz/Downloads/Rectangle%201533.svg" alt="Shoe"
                        class="w-full h-full object-cover object-center ">
                </div>
                <p class=" text-black">Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        <Paycard />
        <div class=" flex items-center text-black text-2xl font-bold">
            <div class="w-200 h-auto">
                <div class=" ms-10 border-b ">
                    <h1 class=" font-bold text-black ">Açıklama</h1>
                </div>
                <div class="border-b-white">
                    <p class="itailic mt-5 ms-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
                        id adipisci illo nam facere cupiditate necessitatibus ea aliquam autem qui eius minima velit,
                        quibusdam unde optio reiciendis, aperiam cumque consequuntur.</p>
                </div>
                <div class="flex flex-col gap-4 ms-10 mt-5">
                    <span>- Regular fit</span>
                    <span>- Regular fit</span>
                    <span>- Regular fit</span>
                </div>
            </div>
        </div>
        <div class=" flex items-center text-white text-2xl font-bold">
            <div class="width-250 height-250">
                <img src="file:///Users/muzaffernergiz/Downloads/Rectangle%201534.svg" alt="">
            </div>
        </div>
    </div>
</template>
<script setup>
import Paycard from "@/components/Paycard.vue";
</script>