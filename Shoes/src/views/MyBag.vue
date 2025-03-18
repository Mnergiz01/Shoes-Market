<template>
    <div class="flex justify-between mt-20 px-10">
        <div class="w-2/3">
            <h1 class="text-4xl font-sans">SEPETİM</h1>
            <div class="mt-10 flex flex-col gap-10">
                <!-- Sepet Ürünleri -->
                <div v-for="i in 10" :key="i" class="flex flex-row gap-5 border-b pb-5">
                    <!-- Ürün Resmi -->
                    <div>
                        <img src="file:///Users/muzaffernergiz/Downloads/Rectangle%201533%20(1).svg"
                            class="w-[165px] h-[165px]">
                    </div>

                    <div class="flex justify-between w-full">
                        <!-- Sol Kısım (Ürün Adı, Arttırma/Azaltma Butonları) -->
                        <div>
                            <div class="text-2xl font-bold font-sans">adidas</div>
                            <div class="text-xl font-sans">
                                DAILY 3.0 SHOES
                            </div>
                            <div class="flex items-center gap-3 mt-5">
                                <div class="text-2xl font-medium font-sans border mt-6 flex justify-between rounded-4xl">
                                    <button class="cursor-pointer px-4">-</button>
                                    <span>1</span>
                                    <button class="cursor-pointer px-4">+</button>
                                </div>
                            </div>
                        </div>

                        <!-- Sağ Kısım (Fiyat ve Remove Butonu) -->
                        <div class="flex flex-col items-end justify-start mt-5">
                            <div class="text-2xl font-bold text-gray-800">$89.99</div> <!-- Fiyat -->
                            <!-- Remove Butonu -->
                            <div class="cursor-pointer mt-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <g fill="none" stroke="#ce0707" stroke-dasharray="24" stroke-dashoffset="24"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                        <path d="M5 5l14 14">
                                            <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s"
                                                values="24;0" />
                                        </path>
                                        <path d="M19 5l-14 14">
                                            <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s"
                                                values="24;0" />
                                        </path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Sağda Ödeme Kartı -->
        <div class="w-[400px] h-[443px] relative mt-20 ml-10">
            <div class="w-[400px] h-[443px] absolute left-0 top-0 bg-white rounded-[20px] shadow-[0px_4.44px_66.67px_0px_rgba(0,0,0,0.08)]">
            </div>

            <!-- Ürün Bilgisi (Marka, Model ve Fiyat) -->
            <div class="absolute left-[36px] top-[36px] inline-flex flex-col gap-[18px]">
                <div class="flex flex-col gap-2">
                    <div class="text-[#201b21] text-2xl font-bold font-['DM_Sans'] leading-loose">
                        Sipariş Özeti
                    </div>
                    <div class="text-[#67696e] text-xl font-normal font-['Inter'] leading-normal">
                        Ara Toplam : 
                    </div>
                    <div class="text-[#67696e] text-xl font-normal font-['Inter'] leading-normal">
                        İndirim : 
                    </div>
                </div>
                <div class="w-80 border"></div>
                <div class="text-2xl"> Toplam : </div>
            </div>
            <!-- Add To Cart Butonu -->
            <div class="w-[360px] px-20 py-5 absolute left-[36px] top-[347px] bg-[#201b21] rounded-[10px] inline-flex justify-center items-center gap-2.5 overflow-hidden">
                <div class="text-white text-lg font-bold font-['Inter'] leading-tight flex justify-end">
                    <span>Ödeme Yap</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M2 12h20m-9-9l9 9l-9 9"/></svg>
                </div>
            </div>
        </div>
    </div>
</template>
