<template>
  <div id="container hero-banner" style="height: 900px">
    <div class="vanta-container">
      <v-vanta effect="net" :options="options"></v-vanta>
    </div>
    <div class="inner">
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="display-1 font-weight-thin mb-4">Joshua McDonald</h1>
        <h4 class="subheading">- Science fed coder</h4>
      </v-col>
    </v-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import VVanta from "vue-vanta";
export default {
  name: "Hero",
  components: { VVanta },
  data() {
    return {
      options: {
        mouseControls: false,
        touchControls: false,
        minHeight: 900.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x2aa198,
        backgroundColor: 0x002b36,
      },
    };
  },
};
</script>
<style>
.inner {
    top: 200px;
  position: relative;
  z-index: 1;

}
h1, h4 {
    color: #fdf6e3;
}
#hero-banner {
    height: 700px;
}
</style>
