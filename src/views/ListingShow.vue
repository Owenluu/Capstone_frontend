<template>
  <div>
    <h2>{{ listing.title }}</h2>
    <p>{{ product.price }}</p>
    <p>{{ product.description }}</p>
    <a v-bind:href="`/listings/${listing.id}/edit`">Edit This Listing</a>
    <br />
    <a href="/listings">Back to All Listings</a>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      listings: {},
    };
  },
  created: function() {
    this.showListings();
  },
  methods: {
    showListing: function() {
      axios.get("/api/listings/" + this.$route.params.id).then(response => {
        console.log(response.data);
        this.listing = response.data;
      });
    },
  },
};
</script>
