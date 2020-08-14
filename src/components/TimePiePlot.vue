<template>
  <div id="piePlot"></div>
</template>

<script>
import Plotly from "plotly.js";

export default {
  data: () => ({
    layout: {
      margin: { l: 0, r: 0, b: 0, t: 0 },
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
    plotlyConfig: {
      responsive: true,
      displayModeBar: false,
    },
    data: [
      {
        type: "sunburst",
        ids: [
          "Work",
          "Social",
          "Learning New Things",
          "Online Courses",
          "Books",
          "Educational Apps",
          "Trivia",
          "Indoor Soccer",
          "Udemy",
          "LinkedIn Learning",
          "Building Projects",
          "Staying On Top Of Advances"
        ],
        labels: [
          "Work",
          "Social",
          "Learning New<br>Things",
          "Online Courses",
          "Books",
          "Educational<br>Apps",
          "Trivia",
          "Indoor<br>Soccer",
          "Udemy",
          "LinkedIn<br>Learning",
          "Building<br>Projects",
          "Staying On<br>Top Of Advances"

        ],
        parents: [
          "",
          "",
          "",
          "Learning New Things",
          "Learning New Things",
          "Learning New Things",
          "Social",
          "Social",
          "Online Courses",
          "Online Courses",
          "Work",
          "Work"
        ],
        branchvalues: "total",
        values: [9, 3, 4, 2, 1, 1, 1, 1, 1, 1, 8, 1],
        outsidetextfont: { size: 20, color: "#377eb8" },
        leaf: { opacity: 0.4 },
        marker: { line: { width: 2 } },
      },
    ],
  }),
  mounted() {
    Plotly.newPlot("piePlot", this.data, this.layout, this.plotlyConfig);
  },
};
</script>

<style>
#piePlot {
  /* margin: -40px 0 -40px; */
}
</style>
