<template>
  <v-footer dark color="#073642">
    <div>
      Joshua Mcdonald
    </div>
    <v-spacer />
    <v-btn class="mx-4"  icon>
      <v-icon> mdi-linkedin </v-icon>
    </v-btn>
    <v-btn class="mx-4"  icon>
      <v-icon> mdi-github </v-icon>
    </v-btn>
    <v-btn class="mx-4"  icon>
      <v-icon> mdi-email </v-icon>
    </v-btn>
    <v-btn class="mx-4"  icon>
      <v-icon> mdi-twitter </v-icon>
    </v-btn>
    <v-spacer />
    <div>&copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<style></style>
