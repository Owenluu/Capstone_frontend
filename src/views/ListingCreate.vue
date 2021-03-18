<template>
  <div class="Listing-Create">
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
        <label>User ID:</label>
        <br />
        <input type="text" class="form-control" v-model="userId" />
      </div>
      <div class="form-group">
        <label>Price:</label>
        <br />
        <input type="text" class="form-control" v-model="price" />
      </div>
      <div class="form-group">
        <label>Quantity:</label>
        <br />
        <input type="text" class="form-control" v-model="quantity" />
      </div>
      <div class="form-group">
        <label>Location ID:</label>
        <br />
        <input type="text" class="form-control" v-model="locationId" />
      </div>
      <div class="form-group">
        <label>Shoe Brand ID:</label>
        <br />
        <input type="text" class="form-control" v-model="shoeBrandId" />
      </div>
      <div class="form-group">
        <label>Image:</label>
        <br />
        <input type="text" class="form-control" v-model="imageUrl" />
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
      listings: [],
      title: "",
      description: "",
      userId: "",
      price: "",
      quantity: "",
      locationId: "",
      shoeBrandId: "",
      imageUrl: "",
      errors: [],
    };
  },
  created: function() {
    this.indexListings();
  },
  methods: {
    indexListings: function() {
      axios.get("/api/listings").then(response => {
        this.listings = response.data;
        console.log("All listings:", this.listings);
      });
    },
    createListing: function() {
      console.log("createListing");
      var params = {
        title: this.title,
        description: this.description,
        user_id: this.userId,
        price: this.price,
        quantity: this.quantity,
        location_id: this.locationId,
        shoe_brand_id: this.shoeBrandId,
        image_url: this.imageUrl,
      };
      axios
        .post("/api/listings", params)
        .then(response => {
          console.log("Success", response.data);
          this.$router.push("/listings");
        })
        .catch(error => console.log(error.response));
    },
  },
};
</script>
