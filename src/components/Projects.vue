<template>
  <div>
      <!-- Image overlay -->
      <v-overlay :value="overlay" v-if="currentProject != null">
        <v-col align-content-center>
          <!-- TODO: refactor images into data, and create these using a v-for -->
          <v-row>
            <v-carousel show-arrows-on-hover height="700px">
              <v-carousel-item
              
                v-for="image in currentProject.images"
                :key="image"
              >
                <v-img width="700px" :src="image"></v-img>
              </v-carousel-item>
            </v-carousel>
          </v-row>
          <v-row justify="space-around">
            <v-btn icon @click="overlay = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-row>
        </v-col>
      </v-overlay>

      <!-- main card -->
	  <v-row>
    <v-col cols="12" lg="3" md="4" sm="6" v-for="project in projects"
        :key="project.title">
      <v-card
        class="mx-auto"
        max-width="344"
        center
      >
        <v-carousel show-arrows-on-hover height="300px">
          <v-carousel-item  v-for="image in project.images" :key="image"  @click="handleClick(project)">
            <v-img :src="image" eager></v-img>
          </v-carousel-item>
        </v-carousel>

        <v-card-title>
          {{ project.title }}
          <v-spacer />
          <v-btn
            icon
            v-if="project.githubRepoLink"
            :href="project.githubRepoLink"
          >
            <v-icon>
              mdi-github
            </v-icon>
          </v-btn>
          <v-btn icon v-if="project.liveLink" :href="project.liveLink">
            <v-icon>
              mdi-link-variant
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-subtitle>
          {{ project.subtitle }}
        </v-card-subtitle>
        <v-card-text>
          <v-chip v-for="chip in project.chips" :key="chip" small dark color="#002b36">
            {{ chip }}
          </v-chip>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-card-subtitle @click="project.show = !project.show">
            See more
          </v-card-subtitle>
          <v-btn icon @click="project.show = !project.show">
            <v-icon>{{ project.show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="project.show">
            <v-divider></v-divider>

            <v-card-text>
              {{ project.body }}
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-col>
	</v-row>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data: () => ({
    overlay: false,
    currentProject: null,
    progressColor: "#cb4b16",
    projects: [
      {
        title: "Safe Blues",
        subtitle:
          "A modelling project where I built a dashboard to control and monitor an experiment run at The University Of Queensland",
        body:
          "This is a project where I contributed to experiment design, collaborated on editing papers and proposals, and primarily worked on front end software. I worked on creating a site for the purpose of controlling models on AWS, admin control, users to see their stats, sign ups, and displaying the growth of the Corona-virus vs our teams models.",
        liveLink: "https://joshjm.github.io/safeBluesDashboard/",
        githubRepoLink: "https://github.com/joshjm/safeBluesDashboard",
        chips: ["Plotly", "gRPC", "Typescript", "Vue.js", "Vuetify"],
        images: [
          "https://github.com/joshjm/joshjm.github.io/blob/master/src/assets/safeblues/safeblues-1.png?raw=true",
          "https://github.com/joshjm/joshjm.github.io/blob/master/src/assets/safeblues/safeblues-2.png?raw=true",
          "https://github.com/joshjm/joshjm.github.io/blob/master/src/assets/safeblues/safeblues-3.png?raw=true",
		],
		show: false
      },
      {
        title: "Notiv",
        subtitle:
          "Data science project as part of an internship, where I improved the performance of Natural language processing models",
        body: "A three month internship where I got to learn from some market leaders in NLP note taking in Brisbane. I work on an independent project where I processed messy real world data to extract meaningful insights. I made strong use of pandas for data cleaning, exploration and creating a pipeline for larger datasets.",
        liveLink: "https://www.notiv.com/",
        // githubRepoLink: "",
        chips: [
          "Jupyter",
          "Numpy",
          "Pandas",
          "Machine Learning",
          "Data Science",
        ],
        images: [
          "https://github.com/joshjm/joshjm.github.io/blob/master/src/assets/notiv/notiv-1.png?raw=true",
          "https://github.com/joshjm/joshjm.github.io/blob/master/src/assets/notiv/notiv-2.png?raw=true",
          "https://github.com/joshjm/joshjm.github.io/blob/master/src/assets/notiv/notiv-3.png?raw=true",
          "https://github.com/joshjm/joshjm.github.io/blob/master/src/assets/notiv/notiv-4.png?raw=true",
          "https://uploads-ssl.webflow.com/5d5f63cfef7f206d8c842f56/5d7eee6e17c02c81c1e07190_logo-large-p-500.png",
        ],
		show: false
	  },
	   {
        title: "Couchers",
        subtitle:
          "A non-profit competitor to CouchSurfing",
        body: "This is a non-profit and (soon to be) open source project that I was invited to join. So far my contributions to this awesome project have been refactoring, bug fixes and building out a versatile avatar component, as well as a 'where I have been' map component. Much of the stack of this org mirrors SafeBlues.",
        liveLink: "https://couchers.org/",
        githubRepoLink: "https://github.com/Couchers-org",
        chips: [
          "Vue.js",
          "gRPC",
          "Protobuf",
          "Typescript",
        ],
        images: [
          "https://github.com/joshjm/joshjm.github.io/blob/master/src/assets/couchers/couchers-1.png?raw=true",
          "https://github.com/joshjm/joshjm.github.io/blob/master/src/assets/couchers/couchers-2.png?raw=true",
          "https://github.com/joshjm/joshjm.github.io/blob/master/src/assets/couchers/couchers-3.png?raw=true",
        ],
		show: false
	  },
	   {
        title: "Correlated Errors on the Toric Code",
        subtitle:
          "An honours quantum computing research project in quantum error correction",
        body: "This project implemented and investigated the performance of the Toric Code for correcting errors in quantum memories. This was a novel implementation making use of dijkstra's path finding, and employing a host of data science tools including advanced mathematical and statistical methods. This project also made heavy use of high performance computing and leveraged UQ's computing cluster.  ",
        // liveLink: "",
        // githubRepoLink: "",
        chips: [
          "HPC", "parallel computing", "Data-science", "Statistics", "Physics", "Quantum computing"
        ],
        images: [
          "https://github.com/joshjm/joshjm.github.io/blob/master/src/assets/toric-code/heatplot.png?raw=true",
          "https://github.com/joshjm/joshjm.github.io/blob/master/src/assets/toric-code/decoder-comparison.png?raw=true",
          "https://github.com/joshjm/joshjm.github.io/blob/master/src/assets/toric-code/expected-walk-lengths.png?raw=true",
          "https://github.com/joshjm/joshjm.github.io/blob/master/src/assets/toric-code/pdf.png?raw=true",
          "https://github.com/joshjm/joshjm.github.io/blob/master/src/assets/toric-code/rates.png?raw=true",
          "https://github.com/joshjm/joshjm.github.io/blob/master/src/assets/toric-code/schematic.png?raw=true",
          "https://github.com/joshjm/joshjm.github.io/blob/master/src/assets/toric-code/steps.png?raw=true",
          "https://github.com/joshjm/joshjm.github.io/blob/master/src/assets/toric-code/toriccode.png?raw=true",
          "https://github.com/joshjm/joshjm.github.io/blob/master/src/assets/toric-code/toriccode2.png?raw=true",
        ],
		show: false
	  },
	   {
        title: "BlackBook.ai Code Test",
        subtitle:
          "Docker and tensorflow serving ",
        body: "This project was a code test, where I build a node frontend which communicated with a tensorflow serving backend. This app utilized dockerfiles and a docker-compose to manage two containers, with a cat/dog image classifier that I trained running as a backend via the TFX API.",
        liveLink: "",
        githubRepoLink: "https://github.com/joshjm/BlackBookAI/tree/master/application/frontend",
        chips: [
          "Tensorflow", "Docker", "Machine Learning", "Node.js",
        ],
        images: [
          "https://github.com/joshjm/joshjm.github.io/blob/master/src/assets/blackbook/bb.png?raw=true",
        ],
		show: false
	  },
	   {
        title: "Covid Co-op",
        subtitle:
          "Rails and react local marketplace with google maps API",
        body: "This was a group project completed as part of General Assembly. My main focus on this project was integrating google maps apis, converting string address's to GPS, and finding distances between GPS coords to display distances between products and a customer. My other main task was managing the team and helping un-block other team members.",
        liveLink: "https://joshjm.github.io/Covid-Co-op/#/",
        githubRepoLink: "https://github.com/joshjm/Covid-Co-op",
        chips: [
          "Ruby on Rails", "React","Google maps", "Teamwork",
        ],
        images: [
          "https://github.com/joshjm/joshjm.github.io/blob/master/src/assets/covid/main.png?raw=true",
          "https://github.com/joshjm/joshjm.github.io/blob/master/src/assets/covid/products.png?raw=true",
        ],
		show: false
	  },

	//   couchers, covid co-op, journey planner, blackbook ai classifier, honours project
    ],
  }),
  methods: {
    handleClick: function(project) {
      this.overlay = true;
      this.currentProject = project;
    },
    handleEsc: function() {
      this.overlay = false;
    },
  },
  created: function() {
    window.addEventListener("keyup", this.handleEsc);
  },
};
</script>
<style scoped>
span.v-chip{
	margin: 1px;
}
</style>