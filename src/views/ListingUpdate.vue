<template>
  <div class="Listing-update">
    <form v-on:submit.prevent="updateListing()">
      <h1>Edit Listing</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Title:</label>
        <br />
        <input type="text" class="form-control" v-model="title" />
      </div>
      <div class="form-group">
        <label>Description:</label>
        <br />
        <textarea Class="form-control" v-model="description"></textarea>
      </div>
      <div class="form-group">
        <label>Price:</label>
        <br />
        <input type="text" class="form-control" v-model="price" />
      </div>
      <div class="form-group">
        <label>Image:</label>
        <br />
        <input type="text" class="form-control" v-model="image" />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      listing: {},
      title: "",
      description: "",
      price: "",
      image: "",
      errors: [],
    };
  },
  created: function() {
    this.showListing();
  },
  methods: {
    showListing: function() {
      axios.get("/api/listings/" + this.$route.params.id).then(response => {
        console.log(response.data);
        this.listing = response.data;
        this.title = this.listing.title;
        this.description = this.listing.desciption;
        this.price = this.listing.price;
        this.image = this.listing.image;
      });
    },
    updateListing: function() {
      var params = {
        title: this.title,
        description: this.description,
        price: this.price,
        image: this.image,
      };
      axios
        .patch("/api/listings/" + this.$route.params.id, params)
        .then(response => {
          console.log(response);
          this.$router.push("/listings");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
