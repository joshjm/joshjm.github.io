<template>
  <main>
    <section id="content">
      <!-- hero and personal brand -->
      <!-- maybe include commit graphs here? -->
      <Hero />
      <v-container>
        <!-- About me -->
        <v-container>
          <v-row justify="center">
            <v-col md="4" cols="12">
              <v-row justify="center">
                <v-img
                id="profile"
                  src="@/assets/profile-blurred-background.jpg"
                  class="circle-img"
                  width="90%"
                  alt="profile"
                  margin="10px"
                />
              </v-row>
              <SocialButtons type="dark" />
            </v-col>
            <v-col md="8" cols="12">
              <h1>About me</h1>
              <p>
                A Physics, honours and ASPinS graduate looking to leverage a
                strong academic research and computational physics base that
                enhances a deep skill set in Computer Science, Data Science and
                Machine Learning.
              </p>

              <p>
                I thrive on applying my broad STEM skill set (circuit theory,
                statistics, programming, chemistry, physics and much more) into
                tackling hard programming problems where traditional techniques
                do not adequately meet the challenge.
              </p>

              <p>
                I am currently undertaking General Assembly's Software
                Engineering Immersive course, a 12 week intensive course that is
                the award winning, industry benchmark program for aspiring
                software engineers. I will complete this course August 7 2020.
              </p>

              <p>
                I am currently seeking to identify a suitably challenging
                programming role, that takes advantages of my skills and
                experience and provides a gateway to further programming
                opportunities.
              </p>
            </v-col>
          </v-row>
        </v-container>
        <v-divider></v-divider>
        <CommitPlot />
        <v-divider></v-divider>

        <!-- plotly graphs -->
        <!-- Projects -->
        <v-container>
          <h1>My recent projects</h1>
          <Projects title="Safe Blues" />
        </v-container>
        <v-divider></v-divider>

        <!-- study and work history -->
        <h1>What I've been getting up to</h1>
        <Timeline />

        <v-divider></v-divider>

        <v-container>
          <v-row justify="space-around">
            <v-col md="5" cols="12">
              <!-- Interests -->
              <h1>How I like to spend my time</h1>
              <TimePiePlot />
            </v-col>
            <v-divider vertical inset></v-divider>
            <v-col md="5" cols="12">
              <!-- skills -->
              <h1>My Skills</h1>
              <v-img
                height="300px"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fla.mathworks.com%2Fmatlabcentral%2Fmlc-downloads%2Fdownloads%2F98ee7702-abae-47b3-975d-419dad136b99%2F086389c6-0808-4cbb-9fc3-cf0358421297%2Fimages%2Fscreenshot.png&f=1&nofb=1"
              />
            </v-col>
          </v-row>
        </v-container>

        <!-- Contact information -->
      </v-container>
    </section>
  </main>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import CommitPlot from "@/components/CommitPlot";
import TimePiePlot from "@/components/TimePiePlot";
import SocialButtons from "@/components/SocialButtons";
export default {
  name: "Home",
  components: {
    Hero,
    Projects,
    Timeline,
    CommitPlot,
    TimePiePlot,
    SocialButtons,
  },
};
</script>
<style>
.circle-img {
  border-radius: 50%;
  max-width: 400px;
}
#content {
  background-color: #f5f2e9;
}
hr {
  margin: 30px auto;
}

#profile {
  margin: 20px;
}
</style>
