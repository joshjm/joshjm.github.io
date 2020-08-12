<template>
  <v-container fluid maxWidth="800px">
    <h1>My Recent Daily Github Commits</h1>
    <v-col align="center">
      <v-col sm="12" md="10" lg="8">
        <v-sparkline
          :value="config.value"
          :labels="config.labels"
          :gradient="config.gradient"
          :smooth="config.radius || false"
          :padding="config.padding"
          :line-width="config.width"
          :stroke-linecap="config.lineCap"
          :gradient-direction="config.gradientDirection"
        ></v-sparkline>
      </v-col>
    </v-col>
  </v-container>
</template>

<!-- TODO: generate labels/dates automatically -->
<script>
const gradients = [["#2aa198", "#073642"]];
// import $ from "jquery";
import axios from "axios";
export default {
  data: () => ({
    gitURL: "https://api.github.com/users/joshjm/events?per_page=99",
    config: {
      width: 2,
      radius: 10,
      padding: 8,
      lineCap: "round",
      gradient: gradients[0],
      labels: [],
      value: [],
      gradientDirection: "top",
    },
    commitData: null,
  }),
  methods: {
    parseData: function(data) {
      let commitSum = 0;
      let previousDate = "";
      for (const eventObject in data) {
        const currentDate = this.parseDate(data[eventObject].created_at);
        if (data[eventObject].type == "PushEvent") {
          const numberOfCommits = data[eventObject].payload.commits.length;
          console.log(currentDate, previousDate, eventObject, numberOfCommits)
          if ((previousDate !== currentDate) && (eventObject > 0)) {
            // if the date changes, push sums and reset
            this.config.labels.unshift(previousDate);
            this.config.value.unshift(commitSum);
            commitSum = 0;
            commitSum += numberOfCommits;
          } else {
            // otherwise just keep summing events on the same day
            commitSum += numberOfCommits;
          }
          previousDate = currentDate;
        }
      }
      // and add the final element
      this.config.labels.unshift(previousDate);
      this.config.value.unshift(commitSum);
      console.log(this.config.labels, this.config.value)
    },
    parseDate: function(dateString) {
      return dateString.split("T")[0];
    },
  },
  mounted() {
    axios.get(this.gitURL).then((res) => this.parseData(res.data));
  },
};
</script>

<style scoped>
.center {
  text-align: center;
}
</style>
