<template>
    <div class="grid grid-cols-2 grid-rows-2 gap-4 h-screen p-4">
        <div class="flex justify-center items-center text-white text-2xl font-bold">
            <div class="flex flex-col">
                <div
                    class="flex justify-center items-center bg-gray-100 w-2xl rounded-4xl hover:opacity-80 hover:scale-105 transition duration-300 overflow-hidden">
                    <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1733f6cc-b764-4dee-80cf-4b01fd67041b/AIR+FORCE+1+%2707.png" alt="Shoe"
                        class="w-100 h-100 object-cover object-center">
                </div>
                <p class="text-black mt-5">Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        <Paycard />
        <div class="flex items-center text-black text-2xl font-bold">
            <div class="w-200 h-auto">
                <div class="ms-10 border-b">
                    <h1 class="font-bold text-black">Açıklama</h1>
                </div>
                <div class="border-b-white">
                    <p class="italic mt-5 ms-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
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
        <div class="flex items-center text-white text-2xl font-bold mb-60">
            
        </div>
    </div>
    
    
</template>

<script setup>
import Paycard from "@/components/Paycard.vue";
</script>
