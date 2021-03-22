<template>
  <div class="home">
    <div class="slider-area">
      <div class="slider-active owl-carousel nav-style-1  owl-dot-none">
        <div
          class="single-slider-2 slider-height-2 d-flex align-items-center bg-img"
          style="background-image:url(assets/img/slider/Supreme.jpg);"
        >
          <div class="container">
            <div class="row">
              <div class="col-xl-6 col-lg-7 col-md-8 col-12 ml-auto">
                <div class="slider-content-3 slider-animated-1 text-center">
                  <!-- <h3 class="animated" style="color:white">Buy & Sell</h3>
                  <h1 class="animated" style="color:white">The Latest Heat</h1>
                  <p class="animated"></p>
                  <div class="slider-btn btn-hover">
                    <a class="animated" style="color:white" href="/listings">SHOP NOW</a>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="single-slider-2 slider-height-2 d-flex align-items-center bg-img"
          style="background-image:url(assets/img/slider/sneaks.jpg);"
        >
          <div class="container">
            <div class="row">
              <div class="col-xl-6 col-lg-7 col-md-8 col-12 ml-auto">
                <div class="slider-content-3 slider-animated-1 text-center">
                  <!-- <h3 class="animated" style="color:black">Always</h3>
                  <h1 class="animated">Authentic</h1>
                  <p class="animated" style="color:black"></p>
                  <div class="slider-btn btn-hover">
                    <a class="animated" style="color:black" href="/listings">SHOP NOW</a>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    Search:
    <input v-model="search" type="text" list="listing-title" />
    <datalist class="listing-title-search">
      <!-- <option v-for="listing in listings" :key="listing.id">{{ listing.title }} {{ listing.description }}/></option> -->
    </datalist>
    <div class="product-area pb-60 section-padding-1">
      <div class="container-fluid">
        <div class="section-title-2 text-center mb-60">
          <h2>All Listings</h2>
          <p>Most Popular</p>
        </div>
        <div class="custom-row">
          <div v-for="listing in filterBy(listings, search, 'title')" v-bind:key="listing.id" class="custom-col-5">
            <div class="product-wrap-2 mb-25 scroll-zoom">
              <div class="product-img">
                <a v-bind:href="`/listings/${listing.id}`">
                  <img class="default-img" v-bind:src="listing.images[0].image_url" alt="" />
                  <img class="hover-img" v-bind:src="listing.images[1].image_url" alt="" />
                </a>
                <!-- <span class="black">${{ listing.price }}</span> -->
                <div class="product-action-2">
                  <!-- <a title="Add To Cart" href="#"><i class="fa fa-shopping-cart"></i></a> -->
                  <a title="Quick View" data-toggle="modal" data-target="">
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
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      listings: [],
      search: "",
    };
  },
  created: function() {
    this.search = this.$route.query.search;
    this.indexListings();
    // this.indexListings();
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
