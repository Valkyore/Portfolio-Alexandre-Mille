<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <body>
    <Header/>
    
    <main>
      <RouterView />
    </main>

    <Footer/>
  </body>
</template>

<style scoped>

body{
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: rgba(0, 0, 255, 0.274);

}
#app{
  height: 100%;
  width: 100%;
}

.footer {
    background-color: #333;
    color: white;
    padding: 20px;
    text-align: center;
    width: 100%;
    position: fixed; /* or position: sticky; depending on your needs */
    bottom: 0;
}
</style>
