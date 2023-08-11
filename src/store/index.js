import { createStore } from "vuex";
import { contact } from "./contact";
import { skills } from "./skills";
import { nav } from "./nav";
export default createStore({
  state: {},

  getters: {},

  mutations: {},

  actions: {},

  modules: {
    skills: skills,
    contact: contact,
    nav: nav,
  },
});
