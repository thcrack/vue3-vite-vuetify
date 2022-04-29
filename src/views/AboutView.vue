<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col class="pa-10" sm="12" md="5" align="center">
        <!-- <v-img
          class="bg-white"
          width="300"
          :aspect-ratio="1"
          src="src/assets/avatar.png"
          cover
        ></v-img> -->
        <div class="myavatar"></div>

      </v-col>

      <v-col sm="12" md="7" class="pa-10">
        <div class="text-grey-darken-3">
          <h1 class="display-2 font-weight-bold mb-3 text-h4">
          Hi, I am Carolyn Yu.
          </h1>
          <h3>A Product Designer / UX Designer</h3>
          <br>
          <p>
            I am a UX designer with background in computer science. 
            I am passionate about solving problems and also crafting the next generation of impactful venture. 
            Currently, I am pursing my Masters in <strong>Information Experience Design </strong>at <strong>Pratt Institute</strong>.
          </p>
          <br>
          <p>
            In 2021, I won the Red Dot Award (Best of the Best) by designing a bus reservation App for People with visual impairments in Taipei City.
          </p>
          <br>
          <p>
            In 2020, I published a paper in Proceedings of ACM CHI about reducing the discomfort of walking experience in a VR environment.
          </p>
          <br>

          <p>Feel free to reach out to me on <a href="https://www.linkedin.com/in/carolynyu-owo/" target="_blank" class="text-pink-lighten-3">LinkedIn</a> / <a href="mailto:cyux16@pratt.edu" class="text-pink-lighten-3">Email</a>.</p>
        </div>
        <div class="pt-10">
          <v-btn class="bg-pink-lighten-4 text-grey-darken-4" href="https://carolyn-yu.com/assets/doc/Resume.pdf" target="_blank">View My Resume</v-btn>
        </div>

      </v-col>

    </v-row>
  </v-container>
</template>

<style scoped>
.myavatar{
  width: 350px;
  height: 350px;
  background-image: url("@/assets/avatar.png");
  background-size: contain;
}
</style>
