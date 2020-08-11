<template>
  <v-timeline>
    <v-timeline-item
      v-for="(year, i) in years"
      :key="i"
      :color="year.color"
      small
    >
      <template v-slot:opposite>
        <span
          :class="`headline font-weight-bold ${year.color}--text`"
          v-text="year.year"
        ></span>
      </template>
      <div class="py-4">
        <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
          {{ year.title }}
        </h2>
        <div>
          {{ year.text }}
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  data: () => ({
    years: [
      {
        color: "#073642",
        year: "2017",
        title: "Undergraduate",
        text:
          "Graduated from The University of Queensland, with Extended Major in Physics. Completed 2 courses on computational physics, and 1 directly on software engineering. I also made frequent use of the numpy stack for data analysis."
      },
      {
        color: "#cb4b16",
        year: "2019",
        title: "Honours",
        text:
          "Graduated from honours at The University of Queensland. Thesis was on simulating a quantum error correcting code using Python on UQ's Cluster."
      },
      {
        color: "#073642",
        year: "2020",
        title: "Industry Experience",
        text:
          "Internship at Notiv, a machine learning (NLP) centric tech startup. I had a data science project where I identified situations where the model broke down, to improve reliability."
      },
      {
        color: "#cb4b16",
        year: "2020",
        title: "Further Study",
        text:
          "Graduated from General Assembly's 3 month Software Engineering Immersive Bootcamp"
      }
    ]
  })
};
</script>
