<template>
  <div class="flex  items-center justify-between">
    <div class="uppercase text-gray-800 dark:text-white font-black text-3xl">
      .ReadMe
    </div>
    <div class="flex items-center flex-grow-3">
      <nav
        class="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden"
      >
        <a href="#" class="py-2 px-6 flex">Read More </a>
        <a href="#" class="py-2 px-6 flex"> Top Headlines </a>
        <a href="#" class="py-2 px-6 flex"> Tech </a>
      </nav>
      <button class="w-8 h-8 rounded-full">
        <font-awesome-icon icon="user" />
      </button>

      <button class="lg:hidden flex flex-col ml-4">
        <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1"> </span>
        <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1"> </span>
        <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1"> </span>
      </button>
    </div>
  </div>
</template>
