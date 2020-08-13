<template>
  <div id="piePlot"></div>
</template>

<script>
import Plotly from "plotly.js";

export default {
  data: () => ({
    layout: {
          margin: {l: 0, r: 0, b: 0, t: 0},

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
        labels: [
          "Work",
          "Social",
          "Learning New Things",
          "Online Courses",
          "Books",
          "Educational Apps"
        ],
        parents: [
          "",
          "",
          "",
          "Learning New Things",
          "Learning New Things",
          "Learning New Things",
        ],
        // values: [10, 14, 12, 10, 2, 6, 6, 4, 4],
        outsidetextfont: { size: 20, color: "#377eb8" },
        leaf: { opacity: 0.4 },
        marker: { line: { width: 2 } },
      },
    ],
  }),
  mounted() {
    Plotly.newPlot("piePlot", this.data,this.layout, this.plotlyConfig);
  },
};
</script>

<style></style>
