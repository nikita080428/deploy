
<template>
  <header
    class="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
    <div class="px-4">
        <div class="flex items-center justify-between">
            <div class="flex shrink-0">
                <NuxtLink :to="`/`"  class="flex items-center" >
                    <img class="h-12 w-auto" :src="`../logo.png`" alt="">
                </NuxtLink>
            </div>
            <div class="hidden md:flex md:items-center md:justify-center md:gap-5">
                <NuxtLink :to="`/news/ru`"
                    class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                    >Русские новости</NuxtLink>
                <NuxtLink :to="`/news/en`" class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                    >Западные новости</NuxtLink>
            </div>
            <div class="flex items-center justify-end gap-3">

            </div>
        </div>
    </div>
</header>
</template>