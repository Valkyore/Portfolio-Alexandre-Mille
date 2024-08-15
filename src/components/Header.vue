<template>
    <header>
        <nav>
            <figure>
                <a href="#"><img id="photoProfil" src="../../public/IMG_20231224_201036.jpg" alt="Une photo de profil"></a>
            </figure>
            
            <router-link to="/#article1"
            :class="{ active: $route.hash === '#article1' }">Présentation</router-link>
            <router-link to="/#Projects"
            :class="{ active: $route.hash === '#Projects' }">Mes réalisations</router-link>
            <router-link to="/#Contact"
            :class="{ active: $route.hash === '#Contact' }">Contact</router-link>
            
        </nav>
    </header>

</template>

<script setup>
</script>

<style scoped>

nav{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    position: sticky;
}

#photoProfil{
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 0 30px deepskyblue,   0 0 30px darkblue ;
}

header{
    background-color:whitesmoke;
    background-repeat:round;
    width:100%;
    position: fixed;
    top: 0;
}


.active {
  color: darkblue;
  font-weight: bold;
  border-bottom: 2px solid deepskyblue;
}

</style>