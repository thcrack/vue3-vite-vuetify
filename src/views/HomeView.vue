
<script setup>
import ProjectCard from "@/components/ProjectCard.vue";
import { ref } from 'vue'
// const avatarPath = ref('@/assets/avatar-2.png')

const data = ref([
  {
    projectIcon: 'https://carolyn-yu.com/images/reddotlogo.png',
    projectTitle: 'EyeBus',
    projectDescription: 'A Bus Reservation Service for People with Visual Impairments in Taipei.',
    img: 'https://carolyn-yu.com/images/eyebusCover.png',
    tags: ['UX','Mobile','Accessibility','Usability Testing','Sketch','Xcode'],
    themeColor: '#F1EFED',
  },
  {
    projectIcon: 'https://carolyn-yu.com/images/chi2020logo.png',
    projectTitle: 'WalkingVibe',
    projectDescription: 'Reducing Virtual Reality Sickness and Improving Realism while Walking in VR using Unobtrusive Head-mounted Vibrotactile Feedback.',
    img: 'https://carolyn-yu.com/images/walkingvibeCover.png',
    tags: ['UX','Virtual Reality (VR)','Prototyping','C#','Arduino'],
    themeColor: '#E5ECF7',
  }
])

</script>

<template>
<div class="bg-grey-lighten-4">
  <v-container class="pa-10">
    <v-row align="center" justify="center">  
      <v-col class="pa-10" cols="12" md="6">
        <h1 class="display-2 font-weight-bold mb-3 text-h3 text-grey-darken-3">
          👋🏻 Hi, I am Carolyn Yu.
        </h1>
        <br>
        <p class="text-h5 font-weight-light text-grey-darken-3">A <strong>UX Designer</strong> based in New York. <br> Currently pursuing a master's degree in UX Design at Pratt Institute. <br>Looking for a UX Design internship in the summer 2022.</p>
      </v-col>
      <v-col class="pa-10 avatarDiv" cols="12" md="6">

        <!-- <v-img
          class=""
          width="500"
          :aspect-ratio="1"
          :src="avatarPath"
          cover
        ></v-img> -->

        <div class="myavatar-bg mx-auto">
          <div class="myavatar"></div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</div>

<div>
  <v-container class="pa-10"> 
    <v-row>
      <v-col class="pa-10" cols="12">
        <h2 class="pb-1 text-h4 font-weight-medium text-grey-darken-3">Selected Projects</h2>
        <hr class="shortLine">
      </v-col>
    </v-row>
    <v-row class="pa-10">

      <v-col cols="12" v-for="(project, id) in data" :key="id">
        <ProjectCard class="ma-2" 
        :projectIcon="project.projectIcon"
        :projectTitle="project.projectTitle"
        :projectDescription="project.projectDescription"
        :img="project.img"
        :tags="project.tags"
        :themeColor="project.themeColor"
        />
      </v-col>

      <!-- <v-col cols="12">
        <ProjectCard class="ma-2"/>
      </v-col> -->

    </v-row>
  </v-container>
</div>

  
</template>

<style scoped>
.myavatar-bg{
  width: 500px;
  height: 500px;
  background-image: url("@/assets/avatar-bg.png");
  background-size: cover;
}
.myavatar{
  width: 500px;
  height: 500px;
  background-image: url("@/assets/avatar-2.png");
  background-size: cover;
  animation: selfie_move 4s infinite ease-in-out;
  position: absolute;
}

@media only screen and (max-width: 600px){

  .avatarDiv{
    padding: 0px !important; 
  }

  .myavatar-bg{
    width: 300px;
    height: 300px;
    /* right:0px; */
  }
  .myavatar{
    width: 300px;
    height: 300px;
    animation: selfie_move_sm 4s infinite ease-in-out;
    /* right:0px; */
  }
}

@keyframes selfie_move{
  0%, 100% {
    bottom: 63%;
  }
  50% {
    bottom: 65%;
  }
}

@keyframes selfie_move_sm{
  0%, 100% {
    bottom: 57%;
  }
  50% {
    bottom: 59%;
  }
}

.shortLine{
  width: 80px;
  border: 1px solid #444;
  margin-left: 0px;
}
</style>