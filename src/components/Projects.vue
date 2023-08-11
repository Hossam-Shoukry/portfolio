<template>
  <div class="projects">
    <span class="projects-1">projects</span>
    <span class="projects-2">projects</span>
    <v-container>
      <v-row>
        <v-col>
          <swiper
            :slidesPerView="y.matches ? 1 : x.matches ? 2 : 3"
            :spaceBetween="25"
            :pagination="{
              clickable: true,
            }"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide>
              <div class="text-center">
                <span class="text-capitalize app-store">app store</span>
              </div>
              <div class="mt-n5">
                <v-img
                  src="@/assets/app-store.png"
                  :width="z.matches ? 200 : 300"
                ></v-img>
              </div>
              <div class="mt-n16">
                <v-btn @click="AppStore()" variant="text" color="white" class="mt-10 visit-site"
                  >visit site</v-btn
                >
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="text-center">
                <span class="text-capitalize restaurant"
                  >restaurant system</span
                >
              </div>
              <div class="mt-n5">
                <v-img
                  src="@/assets/restaurant.png"
                  :width="z.matches ? 200 : 300"
                ></v-img>
              </div>
              <div class="mt-n16">
                <v-btn @click="restaurantApp()" variant="text" color="white" class="mt-10 visit-site"
                  >visit site</v-btn
                >
              </div> </swiper-slide
            ><swiper-slide>
              <div class="text-center">
                <span class="text-capitalize portfolio"
                  >personal portfolio</span
                >
              </div>
              <div class="mt-n5">
                <v-img
                  src="@/assets/personalportfolio.png"
                  :width="z.matches ? 200 : 300"
                ></v-img>
              </div>
              <div class="mt-n16">
                <v-btn variant="text" color="white" class="mt-10 visit-site"
                  >visit site</v-btn
                >
              </div>
            </swiper-slide>
           
          </swiper>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

import "@/components/css/projectSlide.css";

// import required modules
import { Pagination } from "swiper";
export default {
  name: "ProjectsSection",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    let x = window.matchMedia("(max-width: 710px)");
    let y = window.matchMedia("(max-width: 510px)");
    let z = window.matchMedia("(max-width: 1279px)");

    return {
      x,
      y,
      z,
      modules: [Pagination],
    };
  },
  methods: {
    AppStore(){
      window.open('https://app-store-12bd0.web.app/')
    },
    restaurantApp(){
      window.open('https://hossamproject-a655e.web.app/')
    }
  },
};
</script>
<style lang="css" scoped>
@import url("@/components/css/projects.css");
</style>
