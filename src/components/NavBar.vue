<template>
  <v-app-bar app>
    <div class="d-flex align-center"><h2>Thriving Boards</h2></div>
    <v-spacer></v-spacer>
    <div class="transform-me">
      <!-- <font-awesome-icon icon="fa-solid fa-qrcode" size="lg" /> -->
      <img src="qrcode-1.png" width="32" height="32">
    </div>
    <span class="ml-2">掃碼加入&nbsp;&nbsp;</span>
    <v-btn text @click="darkMode">
      <font-awesome-icon
        v-if="$vuetify.theme.dark"
        icon="fa-solid fa-sun"
        size="lg"
      />
      <font-awesome-icon v-else icon="fa-solid fa-moon" size="lg" />
      <span class="ml-2">
        {{ $vuetify.theme.dark ? "Light Mode" : "Dark Mode" }}</span
      >
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>

<style>
.navbar {
  display: flex;
  position: fixed;
  padding: 20px 50px;
  justify-content: space-between;
  top: 0;
  width: 100%;
  overflow: hidden;
  background-color: #fff;
  -webkit-box-shadow: -3px 18px 27px -24px rgba(0, 0, 0, 0.38);
  box-shadow: -3px 18px 27px -24px rgba(0, 0, 0, 0.38);
}
.mode-toggle {
  margin-right: 100px;
}
.title {
  font-weight: 800;
  font-size: 3vh;
}
</style>