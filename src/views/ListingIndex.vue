<template>
  <div class="home">
    <h1>All Listings</h1>
    <div v-for="listing in listings" v-bind:key="listing.id">
      <h2>{{ listing.title }}</h2>
      <img v-bind:src="listing.image" v-bind:alt="listing.image" />
      <p>{{ listing.description }}</p>
      <p>{{ listing.price }}</p>

      <!-- <p>Width: {{ .width }}</p>
      <p>Height: {{ photo.height }}</p> -->
    </div>
  </div>
</template>

<style>
/* img {
  width: 250px;
} */
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      listings: [],
      title: "",
      price: "",
      description: "",
      image: "",
    };
  },
  created: function() {
    this.indexListings();
  },
  methods: {
    indexListings: function() {
      axios.get("/api/listings").then(response => {
        console.log("All Listings", response);
        this.listings = response.data;
      });
    },
  },
};
</script>
