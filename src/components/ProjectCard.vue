<script setup>
const props = defineProps({
  projectIcon: String,
  projectTitle: String,
  projectDescription: String,
  img: String,
  tags: Array,
  themeColor: String,
})

</script>

<template>
  <v-hover v-slot="{ isHovering, props}">
    <v-card
    :color=" themeColor||'#E5ECF7'"
    theme="light"
    rounded="lg"
    class="pa-2"
    height="400"
    v-bind="props"
    :elevation="isHovering ? 12 : 2"
    href="#"
  >
    <v-container>
      <v-row>
        <v-col cols="12" md="5">
          <div>
            <div class="logo px-3" :style="{backgroundImage: 'url(' + projectIcon +')'}"></div>
            <v-card-title class="text-h5">
              {{ projectTitle || 'Project Title'}}
            </v-card-title>

            <v-card-subtitle class="text-subtitle-1">{{ projectDescription || 'project description'}}</v-card-subtitle>

             <div class="px-3">
                <v-chip class="ma-1" label v-for="(tag, i) in tags" :key="i">{{tag}}</v-chip>
            </div>

            <!-- <div class="px-3">
                <v-chip class="ma-1" label>UX</v-chip>
                <v-chip class="ma-1" label>Mobile</v-chip>
                <v-chip class="ma-1" label>iOS</v-chip>
                <v-chip class="ma-1" label> HCI</v-chip>
            </div> -->
          </div>
        </v-col>
        <v-col cols="12" md="7">
          <v-img
            :src= "img || 'https://cdn.vuetifyjs.com/images/parallax/material.jpg'"
            cover
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
    
  </v-card>
  </v-hover>
  

</template>

<style scoped>
.logo{
  height: 50px;
  width: 100%;
  /* background-image: url("@/assets/avatar-bg.png"); */
  background-size: contain;
}
</style>
