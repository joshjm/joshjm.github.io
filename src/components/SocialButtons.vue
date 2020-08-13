<template>
  <v-row justify="center">
    <v-btn
      :light="light"
      :dark="dark"
      class="mx-4"
      icon
      href="https://www.linkedin.com/in/joshua-j-mcdonald/"
    >
      <v-icon :light="light" :dark="dark" :size="size"> mdi-linkedin </v-icon>
    </v-btn>
    <v-btn
      :light="light"
      :dark="dark"
      class="mx-4"
      icon
      href="https://github.com/joshjm"
    >
      <v-icon :light="light" :dark="dark" :size="size"> mdi-github </v-icon>
    </v-btn>
    <v-btn
      :light="light"
      :dark="dark"
      class="mx-4"
      icon
      href="mailto:joshua.mcdonald@uq.net.au"
    >
      <v-icon :light="light" :dark="dark" :size="size"> mdi-email </v-icon>
    </v-btn>
    <v-btn
      :light="light"
      :dark="dark"
      class="mx-4"
      icon
      href="https://twitter.com/G0rff/"
    >
      <v-icon :light="light" :dark="dark" :size="size"> mdi-twitter </v-icon>
    </v-btn>
    <v-btn
      :light="light"
      :dark="dark"
      class="mx-4"
      icon
      href="tel:+61481306846"
    >
      <v-icon :light="light" :dark="dark" :size="size"> mdi-phone </v-icon>
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
    },
    size: {
      type: Number,
      default: 26
    },
    
  }
};
</script>

<style>
</style>
