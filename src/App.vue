<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: {
    "nav-bar": NavBar,
  },
  data: () => ({
    //
  }),
};
</script>
<style>
@import "./assets/style.css";
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap');
</style>
