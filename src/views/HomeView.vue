<template>
  <div class="Homebody">
    <navbar />
    <mainVue id="main" />
    <About id="about" />
    <Skills id="skills" />
    <Projects id="projects" />
    <Contact id="contact" />
  </div>
</template>
<script>
import About from "@/components/About.vue";
import Contact from "@/components/Contact.vue";
import Projects from "@/components/Projects.vue";
import Skills from "@/components/Skills.vue";
import mainVue from "@/components/main.vue";
import navbar from "@/components/navbar.vue";
import { defineComponent } from "vue";
// Components

export default defineComponent({
  created() {},
  props: {},
  name: "HomeView",
  data() {},
  components: {
    navbar,
    mainVue,
    About,
    Skills,
    Projects,
    Contact,
  },
  mounted() {},
  methods: {},
});
</script>
<style lang="scss">
* {
  scroll-behavior: smooth;
}
.Homebody {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
}
</style>
