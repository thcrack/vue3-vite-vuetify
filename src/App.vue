<script setup>
import { ref, watch, onMounted } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

const pathName = ref(location.pathname);
const route = useRoute();

watch(
  () => route.path,
  async (to, from) => {
    // console.log(to, from);
    pathName.value = to
  }
);

</script>

<template>

<v-app>
  <v-app-bar flat color="rgb(255,255,255,0.8)">
    <v-app-bar-title><RouterLink to="/" class="text-grey-darken-3"><strong>Carolyn Yu</strong> </RouterLink></v-app-bar-title>
    <RouterLink to="/" :class=" '/' != pathName ? 'text-grey-darken-3' : 'text-pink-lighten-3'"><v-btn>Work</v-btn></RouterLink>
    <RouterLink to="/about" :class=" '/about' != pathName ? 'text-grey-darken-3' : 'text-pink-lighten-3'"><v-btn>About</v-btn></RouterLink>
    <v-btn><a class="text-grey-darken-3" href="https://carolyn-yu.com/assets/doc/Resume.pdf" target="_blank">Resume</a></v-btn>
  </v-app-bar>

  <v-main>
    <RouterView />
  </v-main>
  <v-footer class="text-center d-flex flex-column pb-6 pt-4">
    <div class="text-grey">
     <p>&copy; Carolyn Yu {{ new Date().getFullYear() }} All rights reserved.</p>
    </div>
  </v-footer>
</v-app>

</template>

<style lang="scss" scoped>

// v-app-bar
.v-toolbar__content { 
  a {
    text-decoration: none;
  }
}
</style>
