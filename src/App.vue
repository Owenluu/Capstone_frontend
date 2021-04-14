<template>
  <div id="app">
    <header class="header-area clearfix">
      <div class="header-top-area header-padding-2"></div>
      <div class="header-bottom sticky-bar header-res-padding header-padding-2">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-2 col-lg-2 col-md-6 col-4">
              <div class="logo">
                <a href="/">
                  <!-- <h1>The Sneaker Exchange</h1> -->
                  <img alt="" src="assets/img/logo/logo1.png" />
                </a>
              </div>
            </div>
            <div class="col-xl-8 col-lg-8 d-none d-lg-block">
              <div class="main-menu">
                <nav>
                  <ul>
                    <li>
                      <a href="/listings">Shop All</a>
                    </li>
                    <li>
                      <a href="/listings/new">Sell</a>
                    </li>
                    <li><a href="/map">Map</a></li>
                    <li>
                      <a href="#">
                        Pages
                        <i class="fa fa-angle-down"></i>
                      </a>
                      <ul class="submenu">
                        <li><a href="/about">about us</a></li>
                        <!-- <li><a href="my-account.html">my account</a></li> -->
                        <!-- <li><a href="blog-details.html">blog</a></li> -->

                        <li><a href="/login">login</a></li>
                        <li><a href="/signup">Signup</a></li>
                        <li><a href="/logout">logout</a></li>
                      </ul>
                    </li>
                    <!-- <li><a href="contact.html">Contact</a></li> -->
                  </ul>
                </nav>
              </div>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-6 col-8">
              <div class="header-right-wrap">
                <div class="same-style header-search">
                  <a class="search-active" href="#"><i class="pe-7s-search"></i></a>
                  <div class="search-content">
                    <form v-on:submit.prevent="submit" action="#">
                      <input type="text" v-model="search" placeholder="Search" />
                      <!-- <option v-for="listing in filterBy(listings, search, 'title')" v-bind:key="listing.id">
                        <a v-bind:href="`/listings/${listing.id}`">{{ listing.title }} {{ listing.description }}/></a>
                      </option> -->

                      <button class="button-search" type="submit"><i class="pe-7s-search"></i></button>
                    </form>
                  </div>
                </div>
                <div class="same-style account-satting">
                  <a class="account-satting-active" href="#"><i class="pe-7s-user-female"></i></a>
                  <div class="account-dropdown">
                    <ul>
                      <li><a href="/login">Login</a></li>
                      <li><a href="/signup">Signup</a></li>
                      <!-- <li><a href="my-account.html">my account</a></li> -->
                    </ul>
                  </div>
                </div>
                <div class="same-style cart-wrap">
                  <div class="shopping-cart-content"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="mobile-menu-area">
            <div class="mobile-menu">
              <nav id="mobile-menu-active">
                <ul class="menu-overflow">
                  <li>
                    <a href="/listings">Discover</a>
                  </li>
                  <li>
                    <a href="/listings/new">Shop All</a>
                    <ul>
                      <li>
                        <a href="/map">Map</a>
                      </li>
                      <li>
                        <!-- <a href="#">product details</a> -->
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                    <ul>
                      <li><a href="/about">about us</a></li>
                      <!-- <li><a href="my-account.html">my account</a></li> -->
                      <!-- <li><a href="blog-details.html">blog</a></li> -->
                      <li><a href="/login">login</a></li>
                      <li><a href="/signup">Signup</a></li>
                    </ul>
                  </li>
                  <!-- <li><a href="contact.html">Contact</a></li> -->
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
    <router-view v-bind:search="search" />

    <footer class="footer-area bg-gray pt-100 pb-70">
      <div class="container">
        <div class="row">
          <div class="col-lg-2 col-md-4 col-sm-4">
            <div class="copyright mb-30">
              <div class="footer-logo">
                <a href="/">
                  <img alt="" src="assets/img/logo/logo2.png" />
                </a>
              </div>
              <p>
                &copy; 2021s
                <b>Flone</b>
                Made with
                <i class="fa fa-heart"></i>
                by
                <a href="https://hasthemes.com/">HasThemes</a>
                .
              </p>
            </div>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-4">
            <div class="footer-widget mb-30 ml-30">
              <div class="footer-list"></div>
            </div>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-4">
            <div class="footer-widget mb-30 ml-50"></div>
          </div>
          <div class="col-lg-2 col-md-6 col-sm-6">
            <div class="footer-widget mb-30 ml-75">
              <div class="footer-list"></div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="footer-widget mb-30 ml-70">
              <div class="footer-title"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style></style>

<script>
/* global setupTheme */
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      flashMessage: "",
      listing: [],
      search: "",
    };
  },
  mounted: function() {
    setupTheme();
  },

  created: function() {
    this.search = this.$route.query.search;
    // this.indexListings();
  },

  methods: {
    submit: function() {
      console.log(this.search);
      // this.search = "";
      this.$router.push("/listings?search=" + this.search);
    },
    isLoggedIn: function() {
      return localStorage.getItem("jwt");
    },
  },
};
</script>
