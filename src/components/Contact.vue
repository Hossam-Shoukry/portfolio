<template>
  <div class="contact text-white">
    <div class="call-me">
      <span class="contact-1">Contact Me</span>
      <span class="contact-2">Contact Me</span>

      <v-container class="socials">
        <v-row>
          <v-col
            lg="4"
            xl="4"
            md="6"
            sm="6"
            cols="12"
            v-for="social in socials"
            :key="social.id"
          >
            <v-card variant="plain">
              <div class="text-center">
                <v-icon class="my-icon" @click="openUrl(social)">{{
                  social.icon
                }}</v-icon>
              </div>
              <v-card-text>
                <div class="text-center contact-title font-weight-bold">
                  {{ social.title }}
                </div>
                <div class="text-center contact-adress font-weight-bold mt-2">
                  {{ social.adress }}
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "ContactSection",
  computed: {
    ...mapState("contact", ["socials"]),
  },
  methods: {
    openUrl(social) {
      window.open(social.click);
    },
  },
};
</script>
<style lang="css" scoped>
@import "@/components/css/contact.css";
</style>
