<template>
  <div class="Listing-Create">
    <img v-if="status" v-bind:src="`https://http.cat/${status}`" v-on:click="status = ``" alt="" />
    <form v-on:submit.prevent="createListing()">
      <h1>Add New Listing</h1>
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
        <label>Images:</label>
        <br />
        <input type="text" class="form-control" v-model="images" />
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
      title: "",
      description: "",
      price: "",
      images: "",
      status: "",
      errors: [],
    };
  },
  methods: {
    createListing: function() {
      var params = {
        title: this.title,
        description: this.description,
        price: this.price,
        images: this.images,
      };
      axios
        .listing("/api/listings", params)
        .then(response => {
          console.log(response);
          this.$router.push("/listings");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
          this.status = error.response.status;
        });
    },
  },
};
</script>
