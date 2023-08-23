<template>
  <v-app-bar app>
    <div class="d-flex align-center"><h2>Thriving Boards</h2></div>
    <v-spacer></v-spacer>
    <div>
      <font-awesome-icon icon="fa-solid fa-flag" size="lg" />&nbsp;&nbsp;Thrive &nbsp;&nbsp;
      <font-awesome-icon icon="fa-solid fa-fire-flame-curved" size="lg" />&nbsp;&nbsp;Energy&nbsp;&nbsp;
      <font-awesome-icon icon="fa-solid fa-heart" size="lg" />&nbsp;&nbsp;Like &nbsp;&nbsp;
      <font-awesome-icon icon="fa-solid fa-lightbulb" size="lg" />&nbsp;&nbsp;Creativity &nbsp;&nbsp;
      <font-awesome-icon icon="fa-solid fa-trophy" size="lg" />&nbsp;&nbsp;Achievement
    </div>
    <v-spacer></v-spacer>
    <div class="transform-me">
      <img src="qrcode-2.png" width="32" height="32">
    </div>
    <span class="ml-2">掃碼加入 |<a href="https://forms.office.com/r/sGY3XpCAQA" target="_blank">&nbsp;填寫表單</a>&nbsp;|&nbsp;<a class="wordcloud" href="https://charlesstorage1.z7.web.core.windows.net/" target="_blank">文字雲</a>&nbsp;&nbsp;</span>
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
      var r = document.querySelector(':root');
      if (this.$vuetify.theme.dark){
        r.style.setProperty('--bg-color', '#003d66');
        r.style.setProperty('--bg-color-hover', '#262626');
        r.style.setProperty('--link-color', '#b3ecff');
        r.style.setProperty('--link-wordcloud-color', '#d8f728f4');
      } else {
        r.style.setProperty('--bg-color', '#ffffe6');
        r.style.setProperty('--bg-color-hover', '#ffffb3');
        r.style.setProperty('--link-color', '#004d99');
        r.style.setProperty('--link-wordcloud-color', '#006666');
      }
    },
  },
};
</script>

<style>
:root {
  --bg-color: #003d66;
  --bg-color-hover: #262626;
  --link-color: #b3ecff;
  --link-wordcloud-color: #d8f728f4;
}
.navbar {
  display: flex;
  position: fixed;
  padding: 20px 50px;
  justify-content: space-between;
  top: 0;
  width: 100%;
  overflow: hidden;
  background-color: #1a1a1a;
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
.v-card__text {
  background-color: var(--bg-color)
}
.v-card__text:hover {
  background-color: var(--bg-color-hover)
}
.theme--light.v-application {
  background: #cccccc !important;
}
.theme--light.v-card > .v-card__text, .theme--light.v-card > .v-card__subtitle {
  color: #1a1a1a !important;
}
.transform-me {
  transition: 2s;
}
.transform-me:hover {
  transform: scale(3.5) translate(91px,60px);
}
a {
  color: var(--link-color) !important;
}
a.wordcloud {
  color: var(--link-wordcloud-color) !important;
}
</style>