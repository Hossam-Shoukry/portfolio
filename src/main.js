import { createApp } from "vue";
import "vuetify/styles";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import router from "./router";
import store from "./store";

loadFonts();

createApp(App).use(router).use(store).use(vuetify).mount("#app");
router.beforeEach((to, from, next) => {
  if (to.params.pageTitle !== undefined) {
    document.title = `${to.name} | ${to.params.pageTitle} | ${process.env.VUE_APP_TITLE}`;
  } else if (to.name == null) {
    document.title = `Unkown Page | ${process.env.VUE_APP_TITLE}`;
  } else {
    document.title = `${to.name} | ${process.env.VUE_APP_TITLE}`;
  }
  next();
});
