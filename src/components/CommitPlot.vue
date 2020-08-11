<template>
  <v-container fluid maxWidth="800px">
    <h1>My Recent Daily Github Commits</h1>
    <v-col align="center">
      <v-col sm="12" md="10" lg="8">
          <v-sparkline
            :value="value"
            :labels="labels"
            :gradient="gradient"
            :smooth="radius || false"
            :padding="padding"
            :line-width="width"
            :stroke-linecap="lineCap"
            :gradient-direction="gradientDirection"
            auto-draw
          ></v-sparkline>
      </v-col>
    </v-col>
  </v-container>
</template>

<!-- TODO: generate labels/dates automatically -->
<script>
const gradients = [["#2aa198", "#073642"]];
// import $ from "jquery";
export default {
  data: () => ({
    gitURL: "https://api.github.com/users/joshjm/events/public",
    width: 2,
    radius: 10,
    padding: 8,
    lineCap: "round",
    gradient: gradients[0],
    labels: [0],
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    gradientDirection: "top",
    gradients,
  }),

};
</script>

<style scoped>
.center {
  text-align: center;
}
</style>
