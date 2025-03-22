<script setup lang="ts">

const NuxtApp = useNuxtApp();
const route = useRoute();

const loaded = ref(false);

const newsPack = ref([]);


onMounted(async () => {
    if(route.params.lang === 'ru') {
        newsPack.value = await getNewsRus();
    } else {
        newsPack.value = await getNewsEng();
    }
    
    console.log(newsPack.value)
})

watch(() => route.params.lang, async () => {
    if(route.params.lang === 'ru') {
        newsPack.value = await getNewsRus();
    } else {
        newsPack.value = await getNewsEng();
    }
})

NuxtApp.hook('page:loading:start', () => {
  loaded.value = false;
});

NuxtApp.hook('page:loading:end', () => {
  loaded.value = true;
});




</script>
<template>
    <div class="flex items-center justify-center mt-32" v-if="!loaded">
        <img :src="`../loading.jpg`" alt="">
    </div>

<section class="flex flex-col gap-8 mt-32" v-if="loaded" >
      
        <div v-for="(news, index) in newsPack">
            <NuxtLink :to="`${news.link}`">

                 
        <article 
        class="w-[800px] overflow-y-hidden h-[200px] flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-3xl group cursor-pointer transform duration-500 hover:-translate-y-1 rounded">
        <img class=" object-cover md:w-52 rounded" :src="`${news.image_url}`" alt="">
        <div>
            <div class="p-5 pb-5">
                    <h3 class="text-xl font-semibold text-gray-800 mt-4">
                        {{ news.title }}
                    </h3>
                    <p class="text-lg text-gray-400 mt-2 leading-relaxed ">
                        {{ news.description }}
                    </p>
                </div>
                <div class=" flex justify-end mr-5 mt-5 items-end">

                </div>
            </div>
         </article>
        </NuxtLink>
    </div>
    </section> 
   
    
</template>