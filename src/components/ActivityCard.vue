<template>
  <v-card @click="gotoDetails">
    <v-img height="200" :src="gif"></v-img>
    <v-card-text>
      <div class="card_title">{{ name }}</div>
      <div><b>項目 (中): </b>{{ project_zh }}</div>
      <div><b>項目 (英): </b>{{ project }}</div>
      <div><b>時間: </b>{{ date }}</div>
      <div><b>地點: </b>{{ location }}</div>
      <div style="display: flex;">
        <div style="flex-grow: 1;"><b>ID: </b>{{ activityId.replace('card','') }}</div>
        <div>
          <font-awesome-icon
            v-if="popular"
            icon="fa-solid fa-trophy"
            size="lg"
          />
          <span v-if="popular">&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <font-awesome-icon
            v-if="like"
            icon="fa-solid fa-heart"
            size="lg"
          />
          <span v-if="like">&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <font-awesome-icon
            v-if="creative"
            icon="fa-solid fa-lightbulb"
            size="lg"
          />
          <span v-if="creative">&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <font-awesome-icon icon="fa-solid fa-flag" size="lg" />&nbsp;&nbsp;&nbsp;&nbsp;
          <font-awesome-icon icon="fa-solid fa-fire-flame-curved" size="lg" />
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    gif: { type: String, default: null },
    name: { type: String, default: null },
    project_zh: { type: String, default: null },
    project: { type: String, default: null },
    location: { type: String, default: null },
    date: { type: String, default: null },
    activityId: { type: String, default: null },
    popular: { type: Boolean, default: null },
    like: { type: Boolean, default: null },
    creative: { type: Boolean, default: null },
  },
  methods: {
    gotoDetails() {
      this.$router.push({
        name: "Details",
        params: { code: btoa(this.activityId) },
      });
    },
  },
};
</script>

<style>
.card_title {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
}
.card img {
  width: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  object-fit: cover;
  object-position: 50% 100%;
}
</style>