<template>
  <v-footer dark color="#073642">
    <v-row align="center" justify="space-around">
      <v-col cols="3">
        <div>
          <p>Joshua Mcdonald</p>
        </div>
      </v-col>
      <v-col cols="6" align-self="center">
        <v-row>
          <p>
            Have an interesting project you are working on? Reach out and lets
            see how I can help.
          </p>
        </v-row>
        <SocialButtons />
      </v-col>
      <v-col cols="3">
        <div>
          <p>&copy; {{ new Date().getFullYear() }}</p>
        </div>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
import SocialButtons from "@/components/SocialButtons.vue";
export default {
  components: {
    SocialButtons,
  },
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<style scoped>
p {
  text-align: center;
  font-size: 0.8em;

  color: #fdf6e3;
}
</style>
