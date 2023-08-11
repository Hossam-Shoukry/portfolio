<template>
  <div class="about">
    <div class="about-me">
      <div class="about-1 text-white">About Me</div>
      <div class="about-2 text-white">About</div>
    </div>

    <v-container>
      <v-row>
        <v-col xl="6" lg="6">
          <v-img
            src="@/assets/portfolio2.png"
            class="w-75 p-img hidden-sm-and-down"
          />
        </v-col>
        <!--start info title part-->
        <v-col xl="6" lg="6" md="6" sm="11" cols="12">
          <div class="info">
            <span class="d-inline-block info-head obj">Objective</span>
            <span class="d-inline-block d-sm-block info-title text-white pt-1">
              To achieve high career growth continuous process of learning for
              achieving goals.
            </span>
            <span
              class="d-inline-block font-weight-bold pt-4 text-body info-head"
              >name</span
            >

            <span class="d-block info-title info-title text-white"
              >Hossam Al-den Shokry Abd Elfattah</span
            >
            <v-spacer></v-spacer>
            <span class="d-inline-block font-weight-bold pt-5 info-head"
              >Birth</span
            >
            <span class="d-block info-title text-white pt-1"
              >14 / 9 / 1994</span
            >
            <v-spacer></v-spacer>
            <span class="d-inline-block font-weight-bold pt-5 info-head"
              >Email</span
            >
            <span class="d-block text-white pt-1"
              >hossamshoukry41@yahoo.com</span
            >
            <v-spacer></v-spacer>
            <span class="d-inline-block font-weight-bold pt-5 info-head"
              >phone</span
            >
            <span class="d-block info-title text-white pt-2">01013157907</span>
            <v-spacer></v-spacer>
            <span class="d-inline-block font-weight-bold pt-5 info-head"
              >Adress</span
            >
            <span class="d-block info-title text-white pt-2"
              >Mansoura City university hood</span
            >
          </div>
        </v-col>

        <!--End info part-->
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "AboutSection",
};
</script>
<style scoped lang="css">
@import "@/components/css/about.css";
</style>
