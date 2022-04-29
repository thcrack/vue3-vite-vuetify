
<script setup>
import ProjectCard from "@/components/ProjectCard.vue";
import { ref } from 'vue'
// const avatarPath = ref('src/assets/avatar-2.png')
</script>

<template>
<div class="bg-grey-lighten-4">
  <v-container class="pa-16">
    <v-row align="center" justify="center">  

      <v-col class="pa-10" sm="12" md="6">
        <h1 class="display-2 font-weight-bold mb-3 text-h3 text-grey-darken-3">
          👋🏻 Hi, I am Carolyn Yu.
        </h1>
        <br>

        <p class="text-h5 font-weight-light text-grey-darken-3">A <strong>UX Designer</strong> based in New York. <br> Currently pursuing a master's degree in UX Design at Pratt Institute. <br>Looking for a UX Design internship in the summer 2022.</p>

      </v-col>
      <v-col class="pa-10" sm="12" md="6">
        <!-- <v-img
          class=""
          width="500"
          :aspect-ratio="1"
          :src="avatarPath"
          cover
        ></v-img> -->

        <div class="myavatar-bg">
          <div class="myavatar"></div>
        </div>

      </v-col>

    </v-row>
  </v-container>
</div>

<div>

  <v-card
    class="mx-auto pa-2"
  >
    <v-container class="pa-16"> 
      <div class="pa-10">
        <h2 class="pb-1 text-h4 font-weight-medium text-grey-darken-3">Selected Projects</h2>
        <hr class="shortLine">
      </div>
      <v-row class="pa-10">
        <v-col cols="12">
          <ProjectCard class="ma-2"/>
        </v-col>

        <v-col cols="12">
          <ProjectCard class="ma-2"/>
        </v-col>

      </v-row>
    </v-container>
  </v-card>
</div>

  
</template>

<style scoped>
.myavatar-bg{
  width: 400px;
  height: 400px;
  background-image: url("@/assets/avatar-bg.png");
  background-size: cover;
}

.myavatar{
  width: 400px;
  height: 400px;
  background-image: url("@/assets/avatar-2.png");
  background-size: cover;
  animation: selfie_move 4s infinite ease-in-out;
  position: absolute;
}

@keyframes selfie_move{
  0%, 100% {
    bottom: 58%;
  }
  50% {
    bottom: 60%;
  }
}

.shortLine{
  width: 80px;
  border: 1px solid #444;
  margin-left: 0px;
}
</style>