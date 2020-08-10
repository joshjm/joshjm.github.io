<template>
  <main>
    <section id="content">
      <!-- hero and personal brand -->
      <!-- maybe include commit graphs here? -->
      <Hero />
      <v-container>
        <!-- About me -->
        <v-container>
          <v-row align="center">
            <v-col cols="4">
              <v-img src="@/assets/profile.jpg" class="circle-img"/>

            </v-col>
            <v-col cols="8">
          <h1>About me</h1>
          <p>
            A Physics, honours and ASPinS graduate looking to leverage a strong
            academic research and computational physics base that enhances a
            deep skill set in Computer Science, Data Science and Machine
            Learning.
          </p>

          <p>
            I thrive on applying my broad STEM skill set (circuit theory,
            statistics, programming, chemistry, physics and much more) into
            tackling hard programming problems where traditional techniques do
            not adequately meet the challenge.
          </p>

          <p>
            I am currently undertaking General Assembly's Software Engineering
            Immersive course, a 12 week intensive course that is the award
            winning, industry benchmark program for aspiring software engineers.
            I will complete this course August 7 2020.
          </p>

          <p>
            I am currently seeking to identify a suitably challenging
            programming role, that takes advantages of my skills and experience
            and provides a gateway to further programming opportunities.
          </p>
            </v-col>

          </v-row>
        </v-container>
        <v-divider></v-divider>

        <!-- plotly graphs -->
        <!-- Projects -->
        <v-container>
          <h1>My recent projects</h1>
          <v-row >
            <v-col cols="12" lg="3" md="4" sm="6">
              <Projects title="Safe Blues"/>
            </v-col>
            <v-col cols="12" lg="3" md="4" sm="6">
              <Projects  title="Notiv"/>
            </v-col>
            <v-col cols="12" lg="3" md="4" sm="6">
              <Projects  title="Couchers"/>
            </v-col>
            <v-col cols="12" lg="3" md="4" sm="6">
              <Projects  title="Covid Co-op"/>
            </v-col>
            <v-col cols="12" lg="3" md="4" sm="6">
              <Projects  title="Journey Planner"/>
            </v-col>
            <v-col cols="12" lg="3" md="4" sm="6">
              <Projects  title="Cat/Dog Classifier"/>
            </v-col>
          </v-row>
        </v-container>
        <v-divider></v-divider>

        <!-- Resume and work history -->
        <h1>What I've been getting up to</h1>
        <Timeline />
        <v-divider></v-divider>

        <!-- Contact information -->
      </v-container>
    </section>
  </main>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
export default {
  name: "Home",
  components: {
    Hero,
    Projects,
    Timeline,
  },
};
</script>
<style>
.circle-img{
  border-radius: 50%; 
max-width: 400px;
}
</style>
