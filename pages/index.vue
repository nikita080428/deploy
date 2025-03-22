<script setup lang="ts">
const Dollar = useState("Dollar");
const Euro = useState("Euro");
const Chehia = useState("Chehia");

async function loadData() {
    const dollarResponse = await $fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_Si2Ym0dQVWQxrImaMSrHHDyToiByKdTRbEz0Wmpi&currencies=RUB');
    const euroResponse = await $fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_Si2Ym0dQVWQxrImaMSrHHDyToiByKdTRbEz0Wmpi&currencies=RUB&base_currency=EUR');
    const chehiaResponse = await $fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_Si2Ym0dQVWQxrImaMSrHHDyToiByKdTRbEz0Wmpi&currencies=RUB&base_currency=CZK');

    Dollar.value = dollarResponse.data.RUB;
    Euro.value = euroResponse.data.RUB; 
    Chehia.value = chehiaResponse.data.RUB;
}

onMounted(async () => {
    await loadData();
});
</script>

<template>
<section
    class="relative overflow-hidden bg-gradient-to-b from-blue-50 via-transparent to-transparent pb-12 pt-36 sm:pb-16 sm:pt-32 lg:pb-24 xl:pb-32 xl:pt-40">

    <div class="relative  mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Новостной сайт:
                <span class="text-blue-600">i18n
                </span>
            </h1>
            <h2 class="mt-6 text-lg  text-gray-600">
                Все самое интересно и не очень.
            </h2>

        </div>
    </div>
</section>
<div class="grid gap-4 lg:gap-8 md:grid-cols-3 p-8 pt-10">
        <div class="relative p-6 rounded-2xl bg-white shadow dark:bg-gray-800">
            <div class="space-y-2">
                <div
                    class="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-400">
                    <span>Доллар</span>
                </div>

                <div class="text-3xl dark:text-gray-100">
                    $ {{ Dollar }}
                </div>

            
            </div>
        </div>

        <div class="relative p-6 rounded-2xl bg-white shadow dark:bg-gray-800">
            <div class="space-y-2">
                <div
                    class="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-400">
                    <span>Евро</span>
                </div>

                <div class="text-3xl dark:text-gray-100">
                    {{ Euro }}
                </div>

               
            </div>

        </div>

        <div class="relative p-6 rounded-2xl bg-white shadow dark:bg-gray-800">
            <div class="space-y-2">
                <div
                    class="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-400">

                    <span>Чехская валюта</span>
                </div>

                <div class="text-3xl dark:text-gray-100">
                    {{ Chehia }}
                </div>

            </div>
        </div>
    </div>

</template>