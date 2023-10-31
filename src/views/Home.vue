<template>
  <v-container>
    <v-row>
      <v-col>
        <v-select
          v-model="quarter"
          @change="quarterChange"
          label="Quarter"
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
          label="Location"
          :items="locations"
          item-text="name"
          item-value="code"
          solo
          clearable
        >
        </v-select>
      </v-col>
      <v-col>
        <v-select
          v-model="badge"
          @change="badgeChange"
          label="Badge"
          :items="badges"
          item-text="name"
          item-value="code"
          solo
          clearable
        >
        </v-select>
      </v-col>
      <v-spacer class="d-none d-md-flex d-lg-flex"></v-spacer>
      <v-col><h2 class="slogan"><marquee Width="500" ScrollAmount="8">為何獨自努力？跟隨隊友一起</marquee></h2></v-col>
    </v-row>
    <v-row>
      <v-col v-for="activity in activities" :key="activity.activityId" md="3">
        <activity-card v-bind="activity"></activity-card>
      </v-col>
    </v-row>
    <v-row><p></p></v-row>
    <v-row><p></p></v-row>
    <v-row><p></p></v-row>
    <div class="center">
      <h2 class="carousel" style="text-align:center;">Together We Thrive</h2>
      <!-- <h2 class="carousel" style="text-align:center;">Thrive Carousel</h2>
      <video class="center" width="1400" height="550" controls autoplay loop>
        <source src="carousel-small.mp4" type="video/mp4">
      </video> -->
    </div>
    <v-row><p></p></v-row>
    <v-row><p></p></v-row>
    <v-row><p></p></v-row>
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
      badge: "Badge",
      badges: ["Thrive", "Energy", "Like", "Creativity", "Achievement"],
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
    badgeChange() {
      this.search = null;
      this.getBadgeActivities();
    },
    clearSearch() {
      setTimeout(() => {
        this.search = null;
        this.getActivities();
      }, 100);
    },
    getActivities() {
      let url = `${this.$dataSource}/all.json`;
      if (this.search) {
        url = `${this.$dataSource}/name/${this.search}`;
      } else if (this.location) {
        url = `${this.$dataSource}/location/${this.location.toLowerCase()}`;
      } else if (this.quarter) {
        url = `${this.$dataSource}/quarter/${this.quarter.toLowerCase()}`;
      }
      setTimeout(() => {
        this.callAPI(url);
      });
    },
    getBadgeActivities() {
      let url = `${this.$dataSource}/all.json`;
      setTimeout(() => {
        switch (this.badge) {
          case 'Thrive':
            this.callAPI(url);
            break;
          case 'Energy':
            this.callAPI(url);
            break;
          case 'Like':
            this.callFilterAPI(url, "like");
            break;
          case 'Creativity':
            this.callFilterAPI(url, "creative");
            break;
          case 'Achievement':
            this.callFilterAPI(url, "popular");
            break;
          default:
            this.callAPI(url);
        }
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
    callFilterAPI(url, filter) {
      this.$http
        .get(url)
        .then((response) => {
          if (response.status == 200) {
            this.activities = response.data.filter(x => x[filter] == true)
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
