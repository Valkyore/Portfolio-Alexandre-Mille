<template>
    <div class="not-found">
      <h1>404 - Page non trouvée</h1>
      <p>La page que vous cherchez n'existe pas.</p>
      <div id="button">
              <router-link to="/">Retour à l'accueil</router-link>
      </div>

    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  #button{
  padding: 10px 20px;
  background-color:white;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  }
  .not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
  }
  
  h1 {
    font-size: 3rem;
    color: #ff1500;
  }
  
  p {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
  </style>
  