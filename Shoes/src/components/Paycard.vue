<template>
    <div class="w-[528px] h-[443px] relative mt-20">
        <!-- Kartın Arka Planı -->
        <div
            class="w-[528px] h-[443px] absolute left-0 top-0 bg-white rounded-[20px] shadow-[0px_4.44px_66.67px_0px_rgba(0,0,0,0.08)]">
        </div>

        <!-- Ürün Bilgisi (Marka, Model ve Fiyat) -->
        <div class="absolute left-[36px] top-[36px] inline-flex flex-col gap-[18px]">
            <div class="flex flex-col gap-2">
                <div class="text-[#201b21] text-2xl font-bold font-['DM_Sans'] leading-loose">
                    adidas
                </div>
                <div class="text-[#67696e] text-xl font-normal font-['Inter'] leading-normal">
                    DAILY 3.0 SHOES
                </div>
            </div>
            <div class="text-[#201b21] text-2xl font-medium font-['DM_Sans'] leading-normal">
                $98.99
            </div>
        </div>

        <!-- Ayırıcı Çizgi -->
        <div class="w-[528px] h-px absolute left-0 top-[174px] bg-[#e9ebee]"></div>

        <!-- Quantity Etiketi -->
        <div class="absolute left-[36px] top-[207px] text-[#201b21] text-lg font-bold font-['DM_Sans'] leading-tight">
            Quanity
        </div>

        <!-- Quantity Seçici -->
        <div
            class="absolute left-[36px] top-[243px] px-4 py-3 rounded-[10px] shadow-[0px_4.44px_66.67px_0px_rgba(0,0,0,0.08)] outline outline-1 outline-offset-[-0.5px] outline-[#e9ebee] inline-flex justify-start items-center gap-4 overflow-hidden">
            <!-- Eksi Butonu -->
            <div class="w-6 h-6 relative">
                <div class="w-[13px] h-0.5 absolute left-[5.5px] top-[11px] opacity-40 bg-[#201b21]"></div>
            </div>
            <!-- Miktar Değeri -->
            <div class="w-6 text-center text-[#201b21] text-lg font-bold font-['Inter'] leading-normal">
                1
            </div>
            <!-- Artı Butonu -->
            <div class="w-6 h-6 relative">
                <div class="w-[13px] h-[13px] absolute left-[5.5px] top-[5.5px] bg-[#201b21]"></div>
            </div>
        </div>

        <!-- Add To Cart Butonu -->
        <div
            class="w-[456px] px-20 py-5 absolute left-[36px] top-[347px] bg-[#201b21] rounded-[10px] inline-flex justify-center items-center gap-2.5 overflow-hidden">
            <div class="text-white text-lg font-bold font-['Inter'] leading-tight">
                Add to Cart 
            </div>
        </div>
    </div>
</template>