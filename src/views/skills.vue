<template>
    <main>
        <section>
            <div id="article2">
                <article> 
                    <h2>Mes Compétences</h2>
                        <div id="tableauCompetences">
                            <div id="texteCompetences">
                                 <p>
                                    Débutant dans le développement web depuis seulement Janvier 2024 mes compétences sont pour le moment peu nombreuses mais s'étoffent chaque mois d'une nouvelle compétences ou en maîtrise de celles déjà acquises
                                </p>
                            </div>

                            <div>
                                <ul>
                                    <li>HTML</li><br>
                                    <li>CSS</li><br>
                                    <li>JavaScript</li><br>
                                    <li>GitHub</li><br>
                                    <li>Vue.Js</li><br>
                                </ul>
                            </div>

                            <div>
                                <ul>
                                    <div>
                                        <li>Novice
                                            <span class="background-bar"></span>
                                        </li>
                                    </div><br>
                                    <li>Novice</li><br>
                                    <li>Novice</li><br>
                                    <li>Novice</li><br>
                                    <li>Novice</li>  <br>
                                </ul>
                            </div>
                        </div>
                </article>
                </div>
        </section>
    </main>
</template>

<script setup>
</script>

<style scoped>

#article2{
    background-color:whitesmoke ;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    width: 100%;
    overflow-x: hidden;
    padding: 50px;
    width: 100%;
    max-width: 1200px;
    box-sizing: border-box;
    border-radius: 8px;
    margin: 0 auto;

}
#tableauCompetences{
display: flex;
flex-direction: row;
}

.background-bar{
background-color: aqua;
width: auto;
height: auto;
}

li{
width: 300px;
background-color: rgb(81, 132, 243);
color: white;
}

#texteCompetences{
margin: 80px;
}

p,h2{
    color: black;
    display: flex;
    justify-content: center;
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