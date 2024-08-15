<template>
    <div class="modal" @click.self="closeModal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h2>{{ project.title }}</h2>
        <img :src="project.image" :alt="project.title" class="modal-image"/>
        <p>{{ project.description }}</p>
        <h3>Technologies utilisées :</h3>
        <ul>
            <li v-for="tech in project.technologies" :key="tech">{{ tech }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      project: {
        type: Object,
        required: true
      }
    },
    methods: {
      closeModal() {
        this.$emit('close');
      }
    }
  }
  </script>
  
  <style>
  .modal-image {
  max-width: 100%;
  height: auto;
  margin: 20px 0;
  display: block;
    }
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background: rgb(255, 255, 255);
  padding: 20px;
  border-radius: 8px;
  position: relative;
  max-width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-sizing: border-box;
  }
  
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    color: #ff0000;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
  color: black;
}

li {
  margin-bottom: 5px;
  color: black;
}

h2,h3{
    color:black;
  }

  p {
    color:black; 
  }
  </style>
  