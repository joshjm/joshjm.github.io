<template>
  <div id="container hero-banner" :style="styleString">
    <div class="vanta-container">
      <v-vanta effect="net" :options="options"></v-vanta>
    </div>
    <v-container class="inner" :style="positionTextTopPaddingString">
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="display-4 font-weight-light mb-4">Joshua McDonald</h1>
        <h4 class="subheading font-weight-thin display-1">- Science fed coder</h4>
        <SocialButtons :dark="true" :light="false" />
      </v-col>
    </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import VVanta from "vue-vanta";
import SocialButtons from "@/components/SocialButtons.vue";
export default {
  name: "Hero",
  components: { VVanta, SocialButtons },
  data() {
    return {
      options: {
        mouseControls: false,
        touchControls: false,
        minHeight: window.innerHeight ,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x2aa198,
        backgroundColor: 0x002b36,
      },
      styleString: `height: ${window.innerHeight}px`,
      positionTextTopPaddingString: `top: ${window.innerHeight/2 - 200}px`
    };
  },
};
</script>
<style scoped>
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
