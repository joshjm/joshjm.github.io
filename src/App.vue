<template>
  <v-app>
    <!-- put the nav-bar here if i end up wanting one -->
    <!-- <Navbar /> -->
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
  <!-- put the footer component in here  -->
</template>

<script>
import Footer from "@/components/Footer";
// // import Navbar from "@/components/Navbar";

export default {
  name: "App",

  components: {
    Footer
    // Navbar,
  },

  data: () => ({
    //
  })
};
</script>

<style scoped>
v-app {
  min-height: 100%;
}
</style>
