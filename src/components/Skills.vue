<template>
  <div class="skills">
    <div class="mySkills">
      <div class="text-white skill-1">Skills</div>
      <div class="text-white skill-2">Skills</div>
    </div>
    <v-container class="cont">
      <v-row style="margin-top: 50px">
        <v-col
          style="margin-top: -100px"
          v-for="skill in Myskills"
          :key="skill.id"
          xl="4"
          lg="4"
          md="4"
          sm="6"
          cols="12"
        >
          <v-card variant="plain" class="text-center">
            <div class="box">
              <div class="loader">
                <span style="--i: 1"></span>
                <span style="--i: 2"></span>
                <span style="--i: 3"></span>
                <span style="--i: 4"></span>
                <span style="--i: 5"></span>
                <span style="--i: 6"></span>
                <span style="--i: 7"></span>
                <span style="--i: 8"></span>
                <span style="--i: 9"></span>
                <span style="--i: 10"></span>
                <span style="--i: 11"></span>
                <span style="--i: 12"></span>
              </div>
            </div>
            <v-icon class="icon">{{ skill.skillIcon }}</v-icon>
            <v-card-text
              ><div style="padding-bottom: 100px" class="text-white skill-name">
                {{ skill.skillName }}
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "SkillsSection",
  computed: {
    ...mapState("skills", ["Myskills"]),
  },
};
</script>
<style lang="scss" scoped>
@import url(@/components/css/skills.css);
</style>
