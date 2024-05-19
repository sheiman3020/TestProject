<template>
  <div class="container mx-auto flex relative">
    <div class="sm:w-2/3 lg:w-2/5 py-8 px-4 flex flex-col relative z-20">
      <span class="w-20 h-2 bg-gray-800 mt-12 dark:bg-white mb-12"> </span>
      <h4
        class="font-bebas-neue mt-12 mb-3 uppercase text-lg sm:text-3xl font-black flex flex-col leading-none dark:text-white text-gray-800"
      >
        Unraveling Today's Stories, Empowering Tomorrow's Decisions.
      </h4>
      <p class="text-sm sm:text-base text-gray-700 dark:text-white">
        At The Daily Times, we bring you the most up-to-date and comprehensive
        coverage of current events from around the world. Whether you're
        interested in the latest advancements in technology, breaking news
        stories, in-depth political analysis, entertainment updates, or sports
        highlights. Explore now and be part of an informed community with The
        Daily Times.
      </p>
      <div class="flex mt-8">
        <a href="#" class="btn-solid">Let's Start Reading </a>
        <!-- <a href="#" class="btn-outline"> Read more </a> -->
      </div>
    </div>
    <div class="hidden sm:block sm:w-1/3 md:w-2/5 lg:w-3/5 relative mx-auto">
      <img :src="newspaper" class="w-3/4 h-full m-auto" />
    </div>
  </div>
</template>
<script setup>
// import newspaper from "@/assets/Editorial commision-bro.png";
import newspaper from "@/assets/news.png";
</script>
