<template>
  <div id="skills-plot"></div>
</template>

<script>
import Plotly from "plotly.js";
export default {
  data: () => ({
    data: [
      {
        x: ["2013-07", "2020-08"],
        type: "box",
        name: "Python", 
        line: {
            width: 0
        }
      },
      {
        x: ["2018-6", "2020-08"],
        type: "box",
        name: "Javascript",
        line: {
            width: 0
        }
      },
      {
        x: ["2019-11", "2020-08"],
        type: "box",
        name: "Machine<br>Learning",
        line: {
            width: 0
        }
      },
      {
        x: ["2020-6", "2020-8"],
        type: "box",
        name: "React",
        line: {
            width: 0
        }
      },
      {
        x: ["2018-6", "2020-8"],
        type: "box",
        name: "HTML/CSS",
        line: {
            width: 0
        }
      },
      {
        x: ["2020-3", "2020-8"],
        type: "box",
        name: "Docker",
        line: {
            width: 0
        }
      },
      {
        x: ["2019-11", "2020-08"],
        type: "box",
        name: "Github",
        line: {
            width: 0
        }
      },
    ],
    layout: {
      margin: {r: 0, b: 30, t: 30 },
      paper_bgcolor: "rgba(0,0,0,0)",
      plot_bgcolor: "rgba(0,0,0,0)",
    showlegend: false,
      autosize: true,
    hovermode: false,
    },
    plotlyConfig: {
        responsive: true,
      displayModeBar: false,
    },
  }),
  mounted() {
    Plotly.newPlot("skills-plot", this.data, this.layout, this.plotlyConfig);
  },
};
</script>

<style></style>
