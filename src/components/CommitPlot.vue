<template>
  <v-container>
    <h1>My latest public github activity:</h1>
    <v-col align="center">
      <div id="plot" style="margin-top: -80px; margin-bottom: -40px"></div>
    </v-col>
  </v-container>
</template>

<!-- TODO: generate labels/dates automatically -->
<script>
import Plotly from "plotly.js";
// import $ from "jquery";
import axios from "axios";
export default {
  data: () => ({
    gitURL: "https://api.github.com/users/joshjm/events?per_page=99",
    config: {
      labels: [],
      value: [],
    },
    commitData: null,
    layout: {
      paper_bgcolor: "rgba(0,0,0,0)",
      plot_bgcolor: "rgba(0,0,0,0)",
      autosize: true,
      legend: {
        x: 1,
        xanchor: "right",
        y: 1,
      },
      yaxis: {
        title: "Commits",
      },

    },
    plotlyConfig: { responsive: true, displayModeBar: false },
  }),
  methods: {
    parseData: function(data) {
      let commitSum = 0;
      let previousDate = "";
      for (const eventObject in data) {
        const currentDate = this.parseDate(data[eventObject].created_at);
        if (data[eventObject].type == "PushEvent") {
          const numberOfCommits = data[eventObject].payload.commits.length;
          if (previousDate !== currentDate && eventObject > 0) {
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
      Plotly.newPlot(
        "plot",
        [
          {
            x: this.config.labels,
            y: this.config.value,
            name: "Commits",
            line: {
              color: "#2aa198",
              shape: "spline",
              width: 4,
            },
            mode: "lines",
          },
        ],
        this.layout,
        this.plotlyConfig
      );
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
