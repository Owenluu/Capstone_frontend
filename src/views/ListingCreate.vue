<template>
  <form v-on:submit.prevent="createListing()">
    <div class="Listing-Create">
      <div class="breadcrumb-area pt-35 pb-35 bg-gray-3">
        <div class="container">
          <div class="breadcrumb-content text-center">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li class="active">Create A New Listing</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="checkout-area pb-80 pt-100">
        <div class="container">
          <div class="row">
            <div class="ml-auto mr-auto col-lg-9">
              <div class="checkout-wrapper">
                <div id="faq" class="panel-group">
                  <div class="panel panel-default single-my-account">
                    <div class="panel-heading my-account-title">
                      <h3 class="panel-title">
                        <span>1 .</span>
                        <a data-toggle="collapse" data-parent="#faq" href="#my-account-1">
                          Fill Out The Listing information Below
                        </a>
                      </h3>
                    </div>
                    <div id="my-account-1" class="panel-collapse collapse show">
                      <div class="panel-body">
                        <div class="myaccount-info-wrapper">
                          <div class="account-info-wrapper">
                            <h4></h4>
                            <h5></h5>
                          </div>
                          <div class="row">
                            <div class="col-lg-6 col-md-6">
                              <div class="billing-info">
                                <label>Listing Title:</label>
                                <input type="text" v-model="title" />
                              </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                              <div class="billing-info">
                                <label>User ID:</label>
                                <input type="text" v-model="userId" />
                              </div>
                            </div>
                            <div class="col-lg-12 col-md-12">
                              <div class="billing-info">
                                <label>Description:</label>
                                <input type="text" v-model="description" />
                              </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                              <div class="billing-info">
                                <label>Price:</label>
                                <input type="text" v-model="price" />
                              </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                              <div class="billing-info">
                                <label>Quantity:</label>
                                <input type="text" v-model="quantity" />
                              </div>
                            </div>
                          </div>
                          <div class="billing-back-btn">
                            <div class="billing-back">
                              <a href="#">
                                <i class="fa fa-arrow-up"></i>
                                back
                              </a>
                            </div>
                            <div class="billing-btn">
                              <!-- <button type="submit">Continue</button> -->
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="panel panel-default single-my-account">
                    <div class="panel-heading my-account-title">
                      <h3 class="panel-title">
                        <span>2 .</span>
                        <a data-toggle="collapse" data-parent="#faq" href="#my-account-2">Additional Information</a>
                      </h3>
                    </div>
                    <div id="my-account-2" class="panel-collapse collapse">
                      <div class="panel-body">
                        <div class="myaccount-info-wrapper">
                          <div class="account-info-wrapper">
                            <h4></h4>
                            <h5></h5>
                          </div>
                          <div class="row">
                            <div class="col-lg-12 col-md-12">
                              <div class="billing-info">
                                <label>Location ID:</label>
                                <input type="text" v-model="locationId" />
                              </div>
                            </div>
                            <div class="col-lg-12 col-md-12">
                              <div class="billing-info">
                                <label>Shoe Brand ID:</label>
                                <input type="text" v-model="shoeBrandId" />
                              </div>
                            </div>
                            <div class="col-lg-12 col-md-12">
                              <div class="billing-info">
                                <label>Image:</label>
                                <input type="file" v-on:change="setFile($event)" ref="fileInput" />
                              </div>
                            </div>
                          </div>
                          <div class="billing-back-btn">
                            <div class="billing-back">
                              <a href="#">
                                <i class="fa fa-arrow-up"></i>
                                back
                              </a>
                            </div>
                            <div class="billing-btn">
                              <button type="submit">Submit</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <form v-on:submit.prevent="createListing()">
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
    </form> -->
    </div>
  </form>
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
      image: "",
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
