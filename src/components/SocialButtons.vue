<template>
  <v-row justify="center">
    <v-btn
      :light="light"
      :dark="dark"
      class="mx-4"
      icon
      href="https://www.linkedin.com/in/joshua-j-mcdonald/"
    >
      <v-icon :light="light" :dark="dark"> mdi-linkedin </v-icon>
    </v-btn>
    <v-btn
      :light="light"
      :dark="dark"
      class="mx-4"
      icon
      href="https://github.com/joshjm"
    >
      <v-icon :light="light" :dark="dark"> mdi-github </v-icon>
    </v-btn>
    <v-btn
      :light="light"
      :dark="dark"
      class="mx-4"
      icon
      href="mailto:joshua.mcdonald@uq.net.au"
    >
      <v-icon :light="light" :dark="dark"> mdi-email </v-icon>
    </v-btn>
    <v-btn
      :light="light"
      :dark="dark"
      class="mx-4"
      icon
      href="https://twitter.com/G0rff/"
    >
      <v-icon :light="light" :dark="dark"> mdi-twitter </v-icon>
    </v-btn>
  </v-row>
</template>

<script>
export default {
  props: {
    light: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style></style>
