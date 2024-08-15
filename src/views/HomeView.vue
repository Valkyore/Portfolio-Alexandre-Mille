<template>
    <main>
        <section id="section1">

            <!-- Bloc présentation -->

            <div id="article1">
                <article>
                    <h1 class="cadre" id="texteblanc">ALEXANRE MILLE</h1>
                    <h2 class="cadre" id="texteblanc">Développeur Web Junior</h2><br>
                        <div class="cadreTexte">
                            <p> Je suis Alexandre Mille, Développeur web débutant en reconversion avec le Centre Européen de Formation.
                                À travers ce site, vous pouvez suivre mon parcours et l'évolution de mes compétences acquises durants mon apprentissage pour devenir Développeur web et web mobil full stack. <br>
                                Mon aventure dans le domaine de web n'a seulement commencée que depuis janvier 2024 mais j'ai acquis de solides notions en HTML, CSS, JavaScript ainsi que les bases de VUE.JS pour la création de ce site. <br>
                                Ce Portfolio est le reflet de ma progression où vous découvrirez quelques exemples de mes réalisations en liens avec les divers technologies et compétences acquises durant ma formation.
                                N'hésitez pas à explorer mes réalisations et à me contacter pour toute collaboration ou question.
                            </p>
                        </div>    
                </article>
            </div>
        </section>



            <!-- Bloc des buttons des pages-->
        <section id="titreBoutton">
            <h2>Pour en savoir plus sur mes parcours professionels et formations</h2>
            <div id="article2">
                <div class="button-group">

                    <router-link to="/parcours" class="button">Formations</router-link>
                    <router-link to="/Experiences" class="button">Expérience Professionnelle</router-link>
                    <router-link to="/skills" class="button">Compétences</router-link>
                </div>    
            </div>
        </section>

        <!-- Bloc réalisations -->

        <section class="projects" id="Projects">
            <h2>Mes Projets</h2>
                <div class="project-grid">
                    <div class="project-card" v-for="project in projects" :key="project.id" @click="openModal(project)">
                    <img :src="project.image" :alt="project.title" />
                    <h3>{{ project.title }}</h3>
                    </div>
                </div>
        </section>

        <section class="contact" id="Contact">
            <h2>Me Contacter</h2>
                <form @submit.prevent="submitForm">
                    <div>
                    <label for="name">Name:</label>
                    <input type="text" id="name" v-model="contactForm.name" required />
                    </div>
                    <div>
                    <label for="email">Email:</label>
                    <input type="email" id="email" v-model="contactForm.email" required />
                    </div>
                    <div>
                    <label for="object">Objet:</label>
                    <input type="object" id="Object" v-model="contactForm.object" required />
                    </div>
                    <div>
                    <label for="message">Message:</label>
                    <textarea id="message" v-model="contactForm.message" required></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
        </section>

    <ProjectModal v-if="showModal" :project="selectedProject" @close="closeModal" />
    </main>
</template>

<script setup>
    import { ref } from 'vue';
    import ProjectModal from '@/components/Modal.vue';

    const projects = ref([
    { id: 1, title: 'CV-MILLE-ALEXANDRE', image: "../../public/Capture d'écran 2024-07-09 111921.png", description: "Création d'un CV en HTML et CSS", technologies: ['HTML', 'CSS'], },
    { id: 2, title: 'Cahier des Charges', image: "../../public/Capture d'écran 2024-07-21 200220.png", description: "Devoirs consistant en la réalisation d'un cahier des charges pour une entreprise fictive souhaitant lancer son site marchant",technologies: ['OpenOfiice'], },
    { id: 3, title: 'Dynamisation des commentaires', image:"../../public/Capture d'écran 2024-07-14 153927.png", description:'Dynamisation des ajout de commentaire avec un code JS pour afficher les commentaires sans recharcgement de la page',technologies: ['HTML', 'CSS','JS'], }
    ]);

    const showModal = ref(false);
    const selectedProject = ref(null);

    const openModal = (project) => {
    selectedProject.value = project;
    showModal.value = true;
    };

    const closeModal = () => {
    showModal.value = false;
    selectedProject.value = null;
    };




    // js formulaire

    const contactForm = ref({
    name: '',
    email: '',
    object:'',
    message: ''
    });

    const submitForm = () => {
    alert(`Message sent by ${contactForm.value.name}`);
    };

</script>

<style scoped>

#titreBoutton{
    background-color: white;
    border-radius: 8px;
    padding-top: 20px;
    width: 70%;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

form div {
  margin-bottom: 10px;
  width: 100%;
}

form label {
  display: block;
  margin-bottom: 5px;
  color:black;
}

form input,
form textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.project-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.project-card {
  flex: 1 1 calc(33.333% - 20px);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
}
.project-card:hover{
    box-shadow: 5px 5px 10px deepskyblue, 5px 5px 10px darkblue;
}

.project-card img {
  width: 300px;
  height: 300px;
  border-radius: 8px;
}

.projects,
.contact {
  background-color: #f9f9f9;
  padding: 20px;
  margin: 50px;
  width: 70%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.projects{
    padding-top: 20px;
}

.button {
  padding: 10px 20px;
  background-color: #3001ff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: large;
  font-weight:bolder
}

.button-group {
  display: flex;
  gap: 20px;
  transition: box-shadow 0.3s ease-in-out;
}
.button:hover{
    box-shadow: 5px 5px 10px darkblue;
}

form button {
  padding: 10px 20px;
  background-color: #3001ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

#texteblanc{
    color: white;
}

body{
background-attachment: fixed;
color: black;
}

#contenu{
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 50px;
gap: 50px;
}

p{
color:black;
padding-left: 30px;
margin: auto;
}

section{
margin:0 50px 0 50px;
}

h1,h2,h3{
display: flex;
justify-content: center;
color: black;
} 

h1{
font-size:xx-large;
}

#article1{
padding-top: 50px;
padding-bottom: 50PX;
margin: 0 -50px 0 -50px;
}

#article2{
background-color:white;
display: flex;
justify-content: center;
color: white;
margin: 0 300px 0 300px;
padding: 50px;
border-radius: 0 0 20px 20px;
}

.boxImage{
background-color: whitesmoke;
height: 300px;
width: 300px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 30%;
margin-left: 50px;
}

.cadreTexte{
background-color:#ffff;
padding: 50px;
border-radius: 8px;
width: 1332px;
}

.separation{
background-color: #ffff;
padding: 20px;
margin: 0 350px 0 350px;
}

#separationTop{
    border-radius: 20px 20px 0 0;
}

#texteCompetences{
margin: 80px 0 0 0 ;
}

main{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 80px;
}

p{
    text-indent: 5%;
}
</style>