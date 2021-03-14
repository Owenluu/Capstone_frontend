<template>
  <div>
    <h2>{{ listing.title }}</h2>
    <p>{{ listing.description }}</p>
    <p>{{ listing.price }}</p>
    <p>{{ listing.image }}</p>

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
      listing: {},
      // title: "",
      // price: "",
      // description: "",
      // image: "",
    };
  },
  created: function() {
    this.showListing();
  },
  methods: {
    showListing: function() {
      // console.log("whatever");
      axios.get("/api/listings/" + this.$route.params.id).then(response => {
        console.log(response.data);
        this.listing = response.data;
      });
    },
  },
};
</script>
