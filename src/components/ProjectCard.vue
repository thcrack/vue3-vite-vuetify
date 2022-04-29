<script setup>
const props = defineProps({
  isHovering: false
})
// defineProps({
//   msg: {
//     type: String,
//     required: true
//   }
// })
</script>

<template>
  <v-hover v-slot="{ isHovering, props}">
    <v-card
    color="#E5ECF7"
    theme="light"
    rounded="lg"
    v-bind="props"
    :elevation="isHovering ? 24 : 6"
    href="#"
  >
    <div class="d-flex flex-no-wrap justify-space-between pa-10">
      <div>
        <v-card-title class="text-h5">
          Project Title
        </v-card-title>

        <v-card-subtitle>project descriptions</v-card-subtitle>

        <!-- <v-card-actions>
          <v-btn
            class="ml-2"
            variant="outlined"
            size="small"
          >
            Explore More
          </v-btn>
        </v-card-actions> -->

        <div class="px-2 text-center">
            <v-chip class="ma-1" label>UX</v-chip>
            <v-chip class="ma-1" label>Mobile</v-chip>
            <v-chip class="ma-1" label>iOS</v-chip>
            <v-chip class="ma-1" label> HCI</v-chip>
        </div>
      </div>

      <v-img
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        height="125"
        cover
        class="bg-grey-lighten-2"
      ></v-img>
    </div>
  </v-card>
  </v-hover>
  

</template>

