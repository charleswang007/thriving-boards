<template>
  <v-container>
    <v-row
      ><v-col
        ><v-btn class="btn" @click="goBack"
          ><v-icon>mdi-arrow-left</v-icon> Back</v-btn
        ></v-col
      ></v-row
    >
    <v-row>
      <v-col md="6" sm="12" xs="12">
        <v-img :src="activity.gif"></v-img>
      </v-col>
      <v-col md="6" sm="12" xs="12" class="pa-2">
        <div class="mt-2">
          <h2>{{ activity.name }}</h2><p>{{ activity.alias ? activity.alias : "N/A" }}</p>
          <v-row class="mt-3">
            <v-col lg="12" md="12" sm="12" xs="12">
              <div
                :class="`d-flex justify-space-between flex-wrap `"
                style="height: 100%"
              >
                <div>
                  <div><b>ID: </b>{{ this.code.replace('card','') }}</div>
                  <div><b>項目 (中): </b>{{ activity.project_zh }}</div>
                  <div><b>項目 (英): </b>{{ activity.project }}</div>
                  <div><b>地點: </b>{{ activity.location }}</div>
                  <div><b>時間: </b>{{ activity.date }}</div>
                  <div><b>介紹: </b>{{ activity.intro }}</div>
                </div>
              </div>
            </v-col>
          </v-row>
          <div class="mt-2">
            <span>
              <v-btn
                class="mr-2 mb-2"
                v-for="quarter in activity.quarters"
                @click="getQuarter(quarter)"
                :key="quarter"
                >{{ quarter }}</v-btn
              >
            </span> 
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      activity: {},
      code: null,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      if (this.$route.params.code) {
        let data = atob(this.$route.params.code);
        this.code = data;
        this.getActivityDetails();
      }
    },
    getActivityDetails() {
      this.$http
        .get(`sample/cards/${this.code}`)
        .then((response) => {
          if (response.status == 200) {
            const data = response.data;
            this.activity = data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    goBack() {
      this.$router.push({
        name: "Home",
      });
    },
    getQuarter(quarter) {
      this.code = quarter;
      this.getActivityDetails();
    },
  },
};
</script>

<style>
</style>