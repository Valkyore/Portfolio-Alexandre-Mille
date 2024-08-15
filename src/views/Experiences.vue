<template>
    <main>
        <div id="article2">

            <h2>Mes formations</h2>

            <div id="Formations">

                <div class="box">
                    <h3>Interimaire | depuis 2010 à aujourd'hui</h3>
                    <h4>Multiples missions en intérim entre mes divers contrats CDD et CDI.
                        Missions dans divers milieux, principalement en logistique, industrie et
                        BTP.</h4>
                </div>

                <div class="box">
                    <h3>Logistique | 5 ans</h3>
                    <h4>Cariste / Préparateur de commandes / Chef d'équipe / Agent de quai</h4>
                </div>

                <div class="box">
                    <h3>Restauration | 3 ans </h3>
                    <h4>Commis de cuisine et employé de restauration</h4>
                </div>

                <div class="box">
                    <h3>Vendeur | 3 ans</h3>
                    <h4>Vendeur en boulangerie et en magasin de musique | De 2011 à 2013</h4>
                </div>

                <div class="box">
                    <h3>Ebeniste | 2 ans </h3>
                    <h4>Apprenti Ebeniste | 2008 - 2010</h4>
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
