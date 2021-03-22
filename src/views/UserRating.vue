<template>
  <div>
    <div class="Blog-area pt-100 pb-100">
      <div class="container">
        <div class="row flex-row-reverse">
          <div class="col-lg-9">
            <div class="blog-details-wrapper ml-20">
              <div class="blog-details-top">
                <div class="blog-details-img">
                  <img alt="" src="assets/img/blog/blog-5.jpg" />
                </div>
                <div class="blog-details-content">
                  <h1>{{ user.first_name }} {{ user.last_name }}</h1>
                  <h3>Email: {{ user.email }}</h3>
                  <h4 style="color:Tomato;">Average Rating: {{ user.rating }}/5</h4>
                  <p>Have you filed for chapter 11 or 13?</p>
                  <div v-for="rating in user.ratings" v-bind:key="rating.id"></div>
                </div>
              </div>
              <div class="blog-comment-wrapper mt-55">
                <h4 class="blog-dec-title">comments:</h4>
                <div class="single-comment-wrapper mt-35">
                  <div class="blog-comment-content">
                    <div v-for="rating in user.ratings" v-bind:key="rating.id">
                      <p>{{ rating.created_at }}</p>
                      <p>{{ rating.comments }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="blog-reply-wrapper mt-50">
                <h4 class="blog-dec-title">post a comment</h4>
                <form class="blog-form" action="#">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="leave-form">
                        <input type="text" placeholder="Full Name" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="leave-form">
                        <input type="email" placeholder="Email Address " />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="text-leave">
                        <textarea placeholder="Message"></textarea>
                        <input type="submit" value="SEND MESSAGE" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="sidebar-style">
              <div class="sidebar-widget">
                <img v-bind:src="user.profile" alt="" />
                <h4 class="pro-sidebar-title"></h4>
                <div class="pro-sidebar-search mb-55 mt-25"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <h1>HI This is</h1>
    <h2>{{ user.first_name }} {{ user.last_name }}</h2>
    <p>{{ user.email }}</p>
    <p>{{ user.rating }}</p>
    <div v-for="rating in user.ratings" v-bind:key="rating.id"></div> -->
    <!-- <div v-for="image in listing.images" v-bind:key="image.id">
      <img :src="image.image_url" alt="image of a sneaker" />
    </div> -->

    <!-- <a v-bind:href="`/listings/${listing.id}/edit`">Edit This Listing</a> -->
    <!-- <br /> -->
    <!-- <a href="/listings">Back to All Listings</a> -->
  </div>
</template>
<style scope>
p.thick {
  font-weight: bold;
}
</style>
<script>
import axios from "axios";
export default {
  data: function() {
    return {
      user: {},
      profile: "",
    };
  },
  created: function() {
    this.showUser();
    // this.showUser();
  },
  methods: {
    showUser: function() {
      console.log("Whatever");
      axios.get("/api/users/" + this.$route.params.id).then(response => {
        console.log(response.data);
        this.user = response.data;
        // this.user = response.data;
      });
    },
  },
};
</script>
