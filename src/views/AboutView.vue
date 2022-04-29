<template>
  <v-container>
    <v-row class="">  <!-- class="text-center" -->
      <v-col class="pa-10" cols="5">
        <!-- <v-img
          class="bg-white"
          width="300"
          :aspect-ratio="1"
          src="src/assets/avatar.png"
          cover
        ></v-img> -->
        <div class="myavatar"></div>

      </v-col>

      <v-col cols="7" class="pa-10">
        <h1 class="display-2 font-weight-bold mb-3">
          👋🏻 Hi, I am Carolyn Yu.
        </h1>
        <h3>A Product Designer / UX Designer</h3>
        <p>
          I am a UX designer with background in computer science. 
          I am passionate about solving problems and also crafting the next generation of impactful venture. 
          Currently, I am pursing my Masters in <strong>Information Experience Design </strong>at <strong>Pratt Institute</strong>.
        </p>
        <p>
          In 2021, I won the Red Dot Award (Best of the Best) by designing a bus reservation App for People with visual impairments in Taipei City.
          In 2020, I published a paper in Proceedings of ACM CHI about reducing the discomfort of walking experience in a VR environment.
        </p>

      </v-col>

    </v-row>
  </v-container>
</template>

<style scoped>
.myavatar{
  width: 400px;
  height: 400px;
  background-image: url("@/assets/avatar.png");
  background-size: contain;
}
</style>
