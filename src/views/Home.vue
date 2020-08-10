<template>
  <main>
    <section id="content">
      <!-- hero and personal brand -->
      <!-- maybe include commit graphs here? -->
      <Hero />

      <v-container>

      <!-- About me -->
      <!-- plotly graphs -->
      <!-- Projects -->
      <Projects />
      <Projects />
      <Projects />
      <Projects />
      <!-- Resume and work history -->

      <!-- Contact information -->
      </v-container>
    </section>
  </main>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
export default {
  name: "Home",
  components: {
    Hero,
    Projects,
  },
};
</script>
<style></style>
