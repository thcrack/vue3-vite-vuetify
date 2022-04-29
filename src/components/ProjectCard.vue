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
    class="pa-2"
    v-bind="props"
    :elevation="isHovering ? 24 : 6"
    href="#"
  >
    <v-container>
      <v-row>
        <v-col sm="12" md="6">
          <div class="">
            <v-card-title class="text-h5">
              Project Title
            </v-card-title>

            <v-card-subtitle>project descriptions</v-card-subtitle>

            <div class="px-2">
                <v-chip class="ma-1" label>UX</v-chip>
                <v-chip class="ma-1" label>Mobile</v-chip>
                <v-chip class="ma-1" label>iOS</v-chip>
                <v-chip class="ma-1" label> HCI</v-chip>
            </div>
          </div>
        </v-col>
        <v-col sm="12" md="6">
          <v-img
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
            height="125"
            cover
            class="bg-grey-lighten-2"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
    
  </v-card>
  </v-hover>
  

</template>

