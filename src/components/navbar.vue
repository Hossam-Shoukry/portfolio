<template>
  <v-container>
    <nav>
      <!--header-->
      <v-app-bar flat color="black text-white">
        <v-app-bar-nav-icon
          class="nav-icon"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-toolbar-title>
          <span class="font-weight-light text-uppercase brand1"
            >Hossam Shoukry</span
          >&nbsp;
          <span class="brand2">Portfolio</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <!--Start menu list-->
        <div class="hidden-sm-and-down nav-list">
          <a
            href="#main"
            data-navinit="1"
            @click="navItnitColor($event)"
            class="ml-4"
            :class="navItnit == '1' ? 'active' : ''"
            >Home
            <v-icon data-navinit="1" @click="navItnitColor($event)"
              >mdi-home-account</v-icon
            >
          </a>
          <a
            href="#about"
            data-navinit="2"
            @click="navItnitColor($event)"
            class="ml-4"
            :class="navItnit == '2' ? 'active' : ''"
            >About
            <v-icon data-navinit="2" @click="navItnitColor($event)"
              >mdi-information-variant</v-icon
            >
          </a>
          <a
            href="#skills"
            data-navinit="3"
            @click="navItnitColor($event)"
            class="ml-4"
            :class="navItnit == '3' ? 'active' : ''"
            >Skills
            <v-icon data-navinit="3" @click="navItnitColor($event)"
              >mdi-head-dots-horizontal</v-icon
            >
          </a>
          <a
            href="#projects"
            data-navinit="4"
            @click="navItnitColor($event)"
            class="ml-4"
            :class="navItnit == '4' ? 'active' : ''"
            >Projects
            <v-icon data-navinit="4" @click="navItnitColor($event)"
              >mdi-apps</v-icon
            >
          </a>
          <a
            href="#contact"
            data-navinit="5"
            @click="navItnitColor($event)"
            class="ml-4"
            :class="navItnit == '5' ? 'active' : ''"
            >Contact
            <v-icon data-navinit="5" @click="navItnitColor($event)"
              >mdi-account</v-icon
            >
          </a>
        </div>
        <!--Start menu list-->

        <!--Start responsive menu-->
        <v-menu
          transition="slide-x-transition"
          location="start"
          class="nav-list2"
        >
          <template v-slot:activator="{ props }">
            <v-btn size="150" v-bind="props" class="hidden-md-and-up menu"
              >Menu
              <v-icon
                icon="mdi-menu"
                class="text-white ml-1 d-lg-none"
              ></v-icon>
            </v-btn>
          </template>
          <v-list width="150" class="bg-black text-center">
            <v-list-item
              ><a
                href="#main"
                @click="navItnitColor($event)"
                data-navinit="1"
                :class="navItnit == '1' ? 'active' : ''"
                >Home
                <v-icon>mdi-home-account</v-icon>
              </a>
            </v-list-item>
            <v-list-item
              ><a
                @click="navItnitColor($event)"
                data-navinit="2"
                :class="navItnit == '2' ? 'active' : ''"
                href="#about"
                >About
                <v-icon class="ml-1">mdi-information-variant</v-icon>
              </a>
            </v-list-item>
            <v-list-item
              ><a
                @click="navItnitColor($event)"
                data-navinit="3"
                :class="navItnit == '3' ? 'active' : ''"
                href="#skills"
                >Skills
                <v-icon class="ml-4">mdi-head-dots-horizontal</v-icon>
              </a>
            </v-list-item>
            <v-list-item
              ><a
                @click="navItnitColor($event)"
                data-navinit="4"
                :class="navItnit == '4' ? 'active' : ''"
                href="#projects"
                >Projects
                <v-icon>mdi-apps</v-icon>
              </a>
            </v-list-item>
            <v-list-item
              ><a
                @click="navItnitColor($event)"
                data-navinit="5"
                :class="navItnit == '5' ? 'active' : ''"
                href="#contact"
                >Contact <v-icon>mdi-account</v-icon>
              </a></v-list-item
            >
          </v-list>
        </v-menu>
        <!--End responsive menu-->
      </v-app-bar>
      <!--Start navigation drawer-->
      <v-navigation-drawer v-model="drawer" color="black">
        <v-list>
          <v-list-item>
            <v-avatar size="40">
              <v-img src="@/assets/colors.png"></v-img>
            </v-avatar>
            <v-btn variant="text">Colors board</v-btn>
          </v-list-item>
          <input type="text" />
          <!--first item color-->
          <v-list-item class="colors-list">
            <v-btn
              class="color-control"
              data-color="red"
              data-init="1"
              @click="MyColor($event)"
              variant="text"
            >
              <span @click="MyColor($event)" data-color="red" data-init="1">
                <v-icon
                  :size="init == 1 ? 'xx-large' : 'large'"
                  color="red"
                  @click="MyColor($event)"
                  data-color="red"
                  data-init="1"
                  class="mr-2"
                  style="transition: 0.3s"
                  >mdi-circle</v-icon
                >
              </span>
              <span @click="MyColor($event)" data-color="red" data-init="1"
                >red</span
              ></v-btn
            >
          </v-list-item>
          <!--second item color-->
          <v-list-item class="colors-list">
            <v-btn
              class="color-control"
              data-color="green"
              data-init="2"
              @click="MyColor($event)"
              variant="text"
            >
              <span @click="MyColor($event)" data-color="red" data-init="1">
                <v-icon
                  :size="init == 2 ? 'xx-large' : 'large'"
                  color="green"
                  @click="MyColor($event)"
                  data-color="green"
                  data-init="2"
                  class="mr-2"
                  style="transition: 0.3s"
                  >mdi-circle</v-icon
                >
              </span>
              <span @click="MyColor($event)" data-color="green" data-init="2"
                >green</span
              ></v-btn
            >
          </v-list-item>
          <!--third item color-->
          <v-list-item class="colors-list">
            <v-btn
              class="color-control"
              data-color="blue"
              data-init="3"
              @click="MyColor($event)"
              variant="text"
            >
              <span @click="MyColor($event)" data-color="blue" data-init="3">
                <v-icon
                  :size="init == 3 ? 'xx-large' : 'large'"
                  color="blue"
                  @click="MyColor($event)"
                  data-color="blue"
                  data-init="3"
                  class="mr-2"
                  style="transition: 0.3s"
                  >mdi-circle</v-icon
                >
              </span>
              <span @click="MyColor($event)" data-color="blue" data-init="3"
                >blue</span
              ></v-btn
            >
          </v-list-item>
          <!--fourth item color-->
          <v-list-item class="colors-list">
            <v-btn
              class="color-control"
              data-color="orange"
              data-init="4"
              @click="MyColor($event)"
              variant="text"
            >
              <span @click="MyColor($event)" data-color="orange" data-init="4">
                <v-icon
                  :size="init == 4 ? 'xx-large' : 'large'"
                  color="orange"
                  @click="MyColor($event)"
                  data-color="orange"
                  data-init="4"
                  class="mr-2"
                  style="transition: 0.3s"
                  >mdi-circle</v-icon
                >
              </span>
              <span @click="MyColor($event)" data-color="orange" data-init="4"
                >yellow</span
              ></v-btn
            >
          </v-list-item>
          <!--fifth item color-->
        </v-list>
      </v-navigation-drawer>
      <!--Start navigation drawer-->
    </nav>
  </v-container>
</template>
<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "navbaComp",
  data() {
    return {
      drawer: false,
    };
  },
  mounted() {
    this.ColorsOnMount();
  },
  computed: {
    ...mapState("nav", ["navItnit", "init", "color"]),
  },
  methods: {
    ...mapMutations("nav", ["ColorsOnMount", "MyColor", "navItnitColor"]),
  },
};
</script>
<style scoped lang="css">
@import "@/components/css/nav.css";
</style>
