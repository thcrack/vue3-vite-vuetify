
<script setup>
import ProjectCard from "@/components/ProjectCard.vue";
import { ref } from 'vue'
// const avatarPath = ref('src/assets/avatar-2.png')
</script>

<template>
<div class="bg-grey-lighten-4">
  <v-container class="pa-10">
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

        <div class="myavatar"></div>

      </v-col>

    </v-row>
  </v-container>
</div>

<div>

  <v-card
    class="mx-auto pa-2"
  >
    <v-container class="pa-10"> 

      <h2 class="pb-10 pt-10 text-h4 font-weight-medium text-grey-darken-3">Selected Projects</h2>

      <v-row >
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
.myavatar{
  width: 500px;
  height: 500px;
  background-image: url("@/assets/avatar-2.png");
  background-size: cover;
}
</style>