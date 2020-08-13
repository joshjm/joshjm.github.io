<template>
  <div id="hero-banner" :style="styleString">
    <div class="vanta-container">
      <v-vanta effect="net" :options="options"></v-vanta>
    </div>
    <v-container class="inner" :style="positionTextTopPaddingString">
      <v-row  justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="font-weight-medium">Joshua McDonald</h1>
          <div class="byline">
          <h4 >
            - Science fed coder
          </h4>
          </div>
          <div class="social">
          <SocialButtons :dark="true" :light="false" :size="iconSize" />
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-row justify="center" id="scroll-down-chevron" class="animate-bounce">
        <v-icon size="70" id="chevron" color="#eee8d5">
          mdi-chevron-double-down
        </v-icon>
    </v-row>
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
        minHeight: window.innerHeight,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x2aa198,
        backgroundColor: 0x002b36,
      },
      styleString: `height: ${window.innerHeight}px`,
      positionTextTopPaddingString: `top: ${window.innerHeight / 2 - 200}px`,
      iconSize: 40
    };
  },
};
</script>
<style scoped>

@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animationTimingFunction: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animationTimingFunction: cubic-bezier(0, 0, 0.2, 1);
  }
}
@keyframes fadeIn {
  from {opacity: 0;}
  to {opacity: 1;}
}

.inner {
  top: 200px;
  position: relative;
  z-index: 1;
}

.byline {
  animation: fadeIn 0.5s ease-in 2s 1 forwards;
  opacity: 0;
  padding-bottom: 4vw;
}
.social {
  animation: fadeIn 1s ease-in 2.6s 1 forwards;
  opacity: 0;
}
h1 {
  animation: fadeIn 1s ease-in 1s 1 forwards;
  opacity: 0;
}
/* Responsive header sizes */
h1 {
  /* Never get smaller than this */
  font-size: 11vw;
}
h4 {
  /* Never get smaller than this */
  font-size: 6vw;
}

@media (min-width:960px) {
  h1 {
    font-size: 6.5rem;
  }
  h4 {
    font-size: 2.5rem;
  }
  .byline {
    padding-bottom: 2rem;
  }
}

@media (min-width:1265px) {
  h1 {
    font-size: 8rem;
  }
  h4 {
    font-size: 3rem;
  }
  .byline {
    padding-bottom: 2.3rem;
  }
}

@media (min-width:1900px) {
  h1 {
   font-size: 10rem;
  } 
  h4 {
   font-size: 3.8rem;
  } 
  .byline {
    padding-bottom: 2.5rem;
  }
}





h1,
h4 {
  text-shadow: 0px 0px 2px #002b36, 0px 0px 10px #002b36, 0px 0px 20px #002b36;
  text-shadow: 0px 0px 4px #000000;
  color: #fdf6e3;
  font-family: 'Catamaran', sans-serif;
}
#chevron {
  animation: fadeIn 2s ease-in 2.9s 1 forwards;
  opacity: 0;
}

#scroll-down-chevron {
  animation: bounce 1.5s infinite;
  /* margin: 0 0 10vh; */
  /* position: relative; */
  position: absolute;
  top: 95vh;
  left: 50%;
}
</style>
