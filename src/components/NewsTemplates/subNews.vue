<template>
  <p class="py-4 px-24 text-2xl font-bold">Top Headlines</p>

  <hr class="h-2 mx-24 mt-0" />

  <div
    class="p-2 bg-transparent justify-evenly flex flex-wrap sm:flex-col md:flex-col lg:flex-row"
  >
    <div
      v-for="headline in mainTopHeadlines"
      class="flex flex-col items-center mb-6 rounded-lg shadow sm:fl md:flex-row md:max-w-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 lg:max-w-xl"
    >
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5
          class="mb-2 text-xl md:flex font-bold tracking-tight text-gray-900 dark:text-white"
        >
          <img
            class="object-cover w-full rounded-t-lg h-35 md:h-auto md:w-50 md:rounded-lg lg:w-40"
            :src="headline.urlToImage"
            alt=""
          />
          <p class="ms-3 text-base">
            {{ headline.title }}
          </p>
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          {{ headline.description }}
          <h6 class="text-right text-gray-400 m-0 text-sm"
            >{{ headline.publishedAt }}
        </h6>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// import newspaper from "@/assets/Editorial commision-bro.png";
import { ref, onMounted } from "vue";
import api from "@/services/api";
const pageData = ref([]);
const mainTopHeadlines = ref([]);
const fetchData = async () => {
  try {
    const response = await api.topheadlines({
      country: "US",
      apiKey: "0d646cd8962149fe8a4306e58464bc9a",
    });
    console.log(response);
    const temp = [...response.data.articles];
    mainTopHeadlines.value = temp.splice(0, 6);
    pageData.value = response.data.articles;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
onMounted(() => {
  fetchData();
});
</script>
