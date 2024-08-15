<template>
    <main>
        <div id="article2">

            <h2>Mes formations</h2>

            <div id="Formations">

                <div class="box">
                    <h3>Centre Européen de Formation</h3>
                    <h4>Titre Professionnel niveau 5 - Développeur web et Web mobile | Janvier 2024 - En cours</h4>
                </div>

                <div class="box">
                    <h3>CNEFG Saint-Astier</h3>
                    <h4>Formation de Gendarme réserviste</h4>
                </div>

                <div class="box">
                    <h3>CAF de Mont De Marsan</h3>
                    <h4>CAP Ebeniste | 2008 - 2010</h4>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
</script>

<style scoped>
.box{
background-color:rgba(180, 192, 196, 0.438);
border-radius: 8px;
margin-bottom: 20px; 
padding: 15;
box-shadow: 5px 5px 10px rgb(57, 70, 83);

}


#article2{
    background-color: whitesmoke;
    color: blue;
    padding: 50px;
    width: 100%;
    max-width: 1200px;
    box-sizing: border-box;
    border-radius: 8px;
    margin: 0 auto;

}

h2{
    color: black;
    text-align: center;
}

main{
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding-top: 10%;
  padding-bottom: 80px;
  box-sizing: border-box;
}

</style>


