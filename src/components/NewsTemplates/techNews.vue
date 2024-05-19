<template>
    <p class="py-4 px-24 text-2xl font-bold">Top Tech News</p>
  
    <hr class="h-2 mx-24 mt-0" />
  
    <div
      class="p-2 bg-transparent justify-evenly flex flex-wrap sm:flex-col md:flex-col lg:flex-row"
    >
      <div
        v-for="headline in mainTopHeadlines"
        class="flex flex-col items-center mb-6 rounded-lg shadow  md:max-w-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 lg:max-w-80"
      >
      <img
              class="object-cover w-full rounded-t-lg h-30"
              :src="headline.urlToImage"
              alt=""
            />
        <div class="flex p-3 flex-col justify-between  leading-normal">
          <p class="ms-3 text-base">
              {{ headline.title }}
            </p>
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
      const response = await api.everything({
        domains: "techcrunch.com,thenextweb.com",
        apiKey: "0d646cd8962149fe8a4306e58464bc9a",
      });
      console.log(response);
      const temp = [...response.data.articles];
      mainTopHeadlines.value = temp.splice(0, 10);
      pageData.value = response.data.articles;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  onMounted(() => {
    fetchData();
  });
  </script>
  