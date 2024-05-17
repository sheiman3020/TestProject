<template>
  <main>
    <TheWelcome />
  </main>
</template>


<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { ref,onMounted } from 'vue'; //hit the page
import axios from 'axios';
const pageData=ref([])
const fetchData = async () => {
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=0d646cd8962149fe8a4306e58464bc9a'); // Replace '/endpoint' with your API endpoint
    console.log(response)
    pageData.value = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
onMounted(()=>{
  fetchData()
})
</script>
