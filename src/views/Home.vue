<template>
  <v-container>
    <v-row>
      <v-col>
        <v-select
          v-model="quarter"
          @change="quarterChange"
          label="Filter by Quarter"
          :items="quarters"
          item-text="name"
          item-value="code"
          solo
          clearable
        >
        </v-select>
      </v-col>
      <v-col>
        <v-select
          v-model="location"
          @change="locationChange"
          label="Filter by Location"
          :items="locations"
          item-text="name"
          item-value="code"
          solo
          clearable
        >
        </v-select>
      </v-col>
      <v-spacer class="d-none d-md-flex d-lg-flex"></v-spacer>
      <v-col><h2><marquee Width="350" ScrollAmount="8">為何獨自努力？跟隨隊友一起</marquee></h2></v-col>
    </v-row>
    <v-row>
      <v-col v-for="activity in activities" :key="activity.activityId" md="3">
        <activity-card v-bind="activity"></activity-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ActivityCard from "../components/ActivityCard.vue";

export default {
  name: "Home",
  components: {
    "activity-card": ActivityCard,
  },
  data() {
    return {
      activities: [],
      search: null,
      location: null,
      locations: ["Taipei", "Shanghai", "Wuxi"],
      quarter: null,
      quarters: ["FY24Q1", "FY24Q2", "FY24Q3"],
    };
  },
  mounted() {
    this.getActivities();
  },
  watch: {
    search: {
      immediate: true,
      handler(val) {
        if (val) {
          this.location = null;
          this.getActivities();
        }
      },
    },
  },
  methods: {
    locationChange() {
      this.search = null;
      this.getActivities();
    },
    quarterChange() {
      this.search = null;
      this.getActivities();
    },
    clearSearch() {
      setTimeout(() => {
        this.search = null;
        this.getActivities();
      }, 100);
    },
    getActivities() {
      let url = "test.json";
      if (this.search) {
        url = `name/${this.search}`;
      } else if (this.location) {
        url = `location/${this.location.toLowerCase()}`;
      } else if (this.quarter) {
        url = `quarter/${this.quarter.toLowerCase()}`;
      }
      setTimeout(() => {
        this.callAPI(url);
      });
    },
    callAPI(url) {
      this.$http
        .get(url)
        .then((response) => {
          if (response.status == 200) {
            this.activities = response.data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
