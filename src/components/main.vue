<template>
  <div class="body">
    <v-row>
      <v-col class="text-center">
        <v-avatar size="250" class="mt-10 hidden-lg-and-up port-img">
          <v-img src="@/assets/portfolio.png"></v-img>
        </v-avatar>
      </v-col>
    </v-row>

    <div class="text-uppercase my-name">
      <div>my name is</div>
      <span>Hossam shoukry</span>
    </div>
    <div class="wrapper">
      <div class="static-txt">Iam a</div>
      <ul class="dynamic-txts">
        <li><span>Web Developer</span></li>
        <li><span>FrontEndDeveloPer</span></li>
        <li><span>Designer</span></li>
        <li><span>FreeLancer</span></li>
      </ul>
    </div>

    <v-list class="bg-black icon-list" style="width: fit-content">
      <v-list-item>
        <v-icon @click="openUrl(socials , 0)" class="icons">mdi-facebook</v-icon>
        <v-icon @click="openTweet()" class="icons ml-3">mdi-twitter</v-icon>
        <v-icon @click="openUrl(socials , 1)" class="icons ml-3">mdi-instagram</v-icon>
        <v-icon @click="openUrl(socials , 2)" class="icons ml-3">mdi-linkedin</v-icon>
      </v-list-item>
    </v-list>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: "mainSection",
  computed:{
    ...mapState('contact',['socials'])
  },
  methods:{
    openUrl(url , index){
      
window.open(url[index].click) 
   },
   openTweet(){
    window.open('https://twitter.com/hossamsa3d3')
   }
  }
};
</script>
<style scoped lang="css">
@import "@/components/css/main.css";
</style>
