<template>
  <div class="home">
    <h1>All Listings</h1>
    <div class="row row-cols-1 row-cols-md-2">
      <div class="col mb-4" v-for="listing in listings" v-bind:key="listing.id">
        <div class="card">
          <img v-bind:src="listing.image" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ listing.title }}</h5>
            <p class="card-text">{{ listing.price }}</p>
            <p class="card-text">{{ listing.description }}</p>
            <a class="btn btn-primary" v-bind:href="`/listings.${listing.id}`">More Info</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card-img-top {
  object-fit: cover;
  height: 350px;
}
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
