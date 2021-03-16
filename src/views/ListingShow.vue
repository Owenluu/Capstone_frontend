<template>
  <div>
    <h2>{{ listing.title }}</h2>
    <p>{{ listing.description }}</p>
    <p>{{ listing.price }}</p>
    <div v-for="image in listing.images" v-bind:key="image.id">
      <!-- <p>{{ image.image_url }}</p> -->
      <img src="image.image_url" alt="image of a sneaker" />
    </div>

    <a v-bind:href="`/listings/${listing.id}/edit`">Edit This Listing</a>
    <br />
    <a href="/listings">Back to All Listings</a>
  </div>
</template>

<style scoped>
img {
  object-fit: cover;
  height: 401px;
}
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      listing: {},
    };
  },
  created: function() {
    this.showListing();
  },
  methods: {
    showListing: function() {
      // console.log("Whatever");
      axios.get("/api/listings/" + this.$route.params.id).then(response => {
        console.log(response.data);
        this.listing = response.data;
      });
    },
  },
};
</script>
