<template>
  
  <main class="dark:bg-gray-800">
    <header
      :class="[
        'h-24 py-4 px-24 sticky top-0  sm:h-20  z-30 w-full',
        { 'bg-pink-500/90  shadow-lg': isScrolled },
      ]"
    >
   
      <headerComp/>
    </header>
    
    <div class="dark:bg-gray-800 flex relative z-20 items-center">
     
    </div>
    <heroSection />
    <div>
      <subNews />
      <techNews />
    </div>

    <footer class="bg-white/20 rounded-lg shadow dark:bg-gray-900 m-4">
      <div class="w-full max-w-screen-xl mx-auto p-4">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a
            class="flex items-center sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <span
              class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
              ></span
            >
          </a>
          <ul
            class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"
          >
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6"
                >Privacy Policy</a
              >
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
            </li>
            <li>
              <a href="#" class="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <hr
          class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
        />
        <span
          class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
          >© 2024
          News
          All Rights Reserved.</span
        >
      </div>
    </footer>
  </main>
</template>

<script setup>
import headerComp from "@/components/hersection/headerComp.vue";
import heroSection from "@/components/hersection/heroSection.vue";
import techNews from "@/components/NewsTemplates/techNews.vue";
import subNews from "@/components/NewsTemplates/subNews.vue";

import { ref, onMounted } from "vue"; //hit the page
import api from "@/services/api";
const pageData = ref([]);
const isScrolled = ref(false);
const onscroll = () => {
  isScrolled.value = window.scrollY > 0;
};
const fetchData = async () => {
  try {
    const response = await api.topheadlines({
      country: "US",
      apiKey: "0d646cd8962149fe8a4306e58464bc9a",
    });
    console.log(response);
    pageData.value = response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
onMounted(() => {
  window.addEventListener("scroll", onscroll);
  fetchData();
});
</script>
