<template>
  <div class="flex  items-center justify-between">
   
    <div class="uppercase text-gray-800 dark:text-white font-black text-3xl">
      NEWS
    </div>
    <div class="flex items-center flex-grow-2">
      <nav
        class="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden"
      >
     
      <date/>
      <button class="bg-blue-500 ml-2 hover:bg-blue-700 text-white mb-px py-1 px-1 text-base rounded-full ">
  Search
</button>
        <a href="#" class="py-2 px-6 flex text-violet-400  "> Top Headlines </a>
        <a href="#" class="py-2 px-6 flex text-violet-400"> Tech </a>
      </nav>
    

      <button class="lg:hidden flex flex-col ml-4">
        <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1"> </span>
        <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1"> </span>
        <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1"> </span>
      </button>
    </div>
  </div>
</template>
<script setup> 
import date from "@/components/datePicker/date.vue";
</script>
