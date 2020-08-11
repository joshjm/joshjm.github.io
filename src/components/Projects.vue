<template>
  <v-card class="mx-auto" max-width="344" center>
    <v-overlay :value="overlay">
        <v-col align-content-center>
          <!-- TODO: refactor images into data, and create these using a v-for -->
      <v-carousel show-arrows-on-hover height="700px">
        <v-carousel-item>
          <v-img
            width="700px"
            src="@/assets/safeblues/safeblues-1.png"
            @click="handleClick"
          ></v-img>
        </v-carousel-item>
        <v-carousel-item>
          <v-img
            width="700px"
            src="@/assets/safeblues/safeblues-2.png"
            @click="handleClick"
          ></v-img>
        </v-carousel-item>
      </v-carousel>

      <v-btn icon @click="overlay = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      </v-col>
    </v-overlay>

    <v-carousel show-arrows-on-hover height="300px">
      <v-carousel-item>
        <v-img
          src="@/assets/safeblues/safeblues-1.png"
          @click="handleClick"
        ></v-img>
      </v-carousel-item>
      <v-carousel-item>
        <v-img
          src="@/assets/safeblues/safeblues-2.png"
          @click="handleClick"
        ></v-img>
      </v-carousel-item>
    </v-carousel>

    <v-card-title>
      {{title}}
      <v-spacer />
      <v-icon>
        mdi-github
      </v-icon>
<v-icon>
      mdi-link-variant
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
      <v-chip> Protobuf </v-chip
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
          collaborated on editing papers and proposals, and primarily worked on
          front end software. I worked on creating a site for the purpose of
          controlling models on AWS, admin control, users to see their stats,
          sign ups, and displaying the growth of the Corona-virus vs our teams
          models.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: [
    'title'
  ],
  data: () => ({
    show: false,
    overlay: false,
    image: "",
  }),
  methods: {
    handleClick: function(imagePath) {
      this.overlay = !this.overlay;
      this.image = imagePath;
    },
  },
};
</script>
