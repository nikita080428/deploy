const urlRu = `https://newsdata.io/api/1/news?apikey=pub_61004b0815b166f69cc54a38040451a1aaf98&q=BBC&country=gb,us&language=en `;
const news = ref([]);

export default async function () {
    if (news.value.length === 0) {
        try {
            const response = await $fetch(urlRu);
            news.value = response.results;
        } catch (error) {
            console.error('Ошибка при получении новостей:', error);
        }
    }
    return news.value;
}