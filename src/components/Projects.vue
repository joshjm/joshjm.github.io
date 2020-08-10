<template>
  <v-card class="mx-auto" max-width="344">
    <v-carousel show-arrows-on-hover height="300px">
      <v-carousel-item>
        <v-img src="@/assets/safeblues/safeblues-1.png"></v-img>
      </v-carousel-item>
      <v-carousel-item>
        <v-img src="@/assets/safeblues/safeblues-2.png"></v-img>
      </v-carousel-item>
    </v-carousel>

    <v-card-title>
      Safe Blues
<v-spacer/>
      <v-icon>
  mdi-github
</v-icon>
    </v-card-title>

    <v-card-subtitle>
      A modelling project where I built a dashboard to control and monitor a
      experiment run at The University Of Queensland
    </v-card-subtitle>
    <v-card-text>
      <v-chip>
        Plotly
      </v-chip>
      <v-chip>
        Protobuf </v-chip
      ><v-chip>
        gRPC
      </v-chip>
      <v-chip>
        <v-icon color="#3178C6">
          mdi-language-typescript
        </v-icon>
      </v-chip>
      <v-chip>
        <v-icon color="#41B883">
          mdi-vuejs
        </v-icon>
      </v-chip>
    </v-card-text>

    <v-card-actions>
<v-icon>
  mdi-github
</v-icon>
      <v-spacer></v-spacer>

      <v-card-subtitle @click="show = !show">
        See more
      </v-card-subtitle>
      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          This is a project where I contributed to experiment design,
          collaborated on editing papers and proposals, and priumarily worked on
          front end software. I worked on creating a site for the purpose of
          controlling models on AWS, admin control, users to see their stats,
          sign ups, and displaying the growth of the coronavirus vs our teams
          models.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    show: false,
    overlay: false,
    image: ''
  }),
};
</script>
