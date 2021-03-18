<template>
  <div class="home">
    <h1></h1>
    <div class="product-area pb-60 section-padding-1">
      <div class="container-fluid">
        <div class="section-title-2 text-center mb-60">
          <h2>All Listings</h2>
          <p>Most Popular</p>
        </div>
        <div class="custom-row">
          <div v-for="listing in listings" v-bind:key="listing.id" class="custom-col-5">
            <div class="product-wrap-2 mb-25 scroll-zoom">
              <div class="product-img">
                <a v-bind:href="`/listings/${listing.id}`">
                  <img class="default-img" v-bind:src="listing.images[0].image_url" alt="" />
                  <img class="hover-img" v-bind:src="listing.images[0].image_url" alt="" />
                </a>
                <!-- <span class="black">${{ listing.price }}</span> -->
                <div class="product-action-2">
                  <!-- <a title="Add To Cart" href="#"><i class="fa fa-shopping-cart"></i></a> -->
                  <a title="Quick View" data-toggle="modal" data-target="wishlist.html">
                    <i class="fa fa-eye" v-bind:href="`/listings/${listing.id}`"></i>
                  </a>
                  <!-- <a title="Compare" href="#"><i class="fa fa-retweet"></i></a> -->
                </div>
              </div>
              <div class="product-content-2">
                <div class="title-price-wrap-2">
                  <h3>
                    <h5 class="card-title">{{ listing.title }}</h5>
                    <p class="card-text">{{ listing.description }}</p>
                  </h3>
                  <div class="price-2">
                    <span class="card-text">${{ listing.price }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-2">
      <!-- <div class="col mb-4" v-for="listing in listings" v-bind:key="listing.id">
        <div class="card">
          <img v-bind:src="listing.images[0].image_url" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ listing.title }}</h5>
            <p class="card-text">{{ listing.price }}</p>
            <p class="card-text">{{ listing.description }}</p>
            <p class="card-text">{{ listing.location_id }}</p>
            <a class="btn btn-primary" v-bind:href="`/listings/${listing.id}`">More Info</a>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<style>
.card-img-top {
  object-fit: cover;
  height: 401px;
}
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      listings: [],
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
