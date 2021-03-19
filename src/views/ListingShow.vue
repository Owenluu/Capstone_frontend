<template>
  <div>
    <div class="breadcrumb-area pt-35 pb-35 bg-gray-3">
      <div class="container">
        <div class="breadcrumb-content text-center">
          <ul>
            <li>
              <a href="/listings">Shop All</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="shop-area pt-100 pb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="product-details">
              <div class="product-details-img">
                <div class="tab-content jump">
                  <!-- <div id="shop-details-1" class="tab-pane large-img-style">
                    <img :src="listing.images[0].image_url" alt="" />
                    <div class="img-popup-wrap">
                      <a class="img-popup" :href="listing.images[0].image_url">
                        <i class="pe-7s-expand1"></i>
                      </a>
                    </div>
                  </div>
                  <div id="shop-details-2" class="tab-pane active large-img-style">
                    <img :src="listing.images[0].image_url" alt="" />
                    <div class="img-popup-wrap">
                      <a class="img-popup" :href="listing.images[0].image_url">
                        <i class="pe-7s-expand1"></i>
                      </a>
                    </div>
                  </div>
                  <div id="shop-details-3" class="tab-pane large-img-style">
                    <img :src="listing.images[0].image_url" alt="" />
                    <div class="img-popup-wrap">
                      <a class="img-popup" :href="listing.images[0].image_url">
                        <i class="pe-7s-expand1"></i>
                      </a>
                    </div>
                  </div> -->
                </div>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img class="d-block w-100" :src="listing.images[0].image_url" alt="First slide" />
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" :src="listing.images[0].image_url" alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" :src="listing.images[0].image_url" alt="Third slide" />
                    </div>
                  </div>
                  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
                <div class="shop-details-tab nav">
                  <a class="shop-details-overly" href="#shop-details-1" data-toggle="tab">
                    <!-- <img :src="listing.images[0].image_url" alt="" /> -->
                  </a>
                  <a class="shop-details-overly active" href="#shop-details-2" data-toggle="tab">
                    <!-- <img :rc="listing.images[0].image_url" alt="" /> -->
                  </a>
                  <a class="shop-details-overly" href="#shop-details-3" data-toggle="tab">
                    <!-- <img :src="listing.images[0].image_url" alt="" /> -->
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="product-details-content ml-70">
              <h2>{{ listing.title }}</h2>
              <div class="product-details-price">
                <span>${{ listing.price }}</span>
              </div>
              <p>{{ listing.description }}</p>
              <div class="col-lg-8 col-md-7">
                <!-- <div class="contact-form"> -->
                <!-- <div class="contact-title mb-30"></div> -->
                <!-- <h2>Get In Touch</h2>
                  <form
                    class="contact-form-style"
                    id="contact-form"
                    action="https://htmldemo.hasthemes.com/flone/flone/assets/php/mail.php"
                    method="post"
                  >
                    <div class="row">
                      <div class="col-lg-6">
                        <input name="name" placeholder="Name*" type="text" />
                      </div>
                      <div class="col-lg-6">
                        <input name="email" placeholder="Email*" type="email" />
                      </div>
                      <div class="col-lg-12">
                        <input name="subject" placeholder="Subject*" type="text" />
                      </div>
                      <div class="col-lg-12">
                        <textarea name="message" placeholder="Your Message*"></textarea>
                        <button class="submit" type="submit">SEND</button>
                      </div>
                    </div>
                  </form> -->
                <!-- <p class="form-messege"></p> -->
                <!-- </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="description-review-area pb-90">
      <div class="container">
        <div class="description-review-wrapper">
          <div class="description-review-topbar nav">
            <a class="active" data-toggle="tab" href="#des-details2">Description</a>
          </div>
          <div class="tab-content description-review-bottom">
            <div id="des-details2" class="tab-pane active">
              <div class="product-description-wrapper">
                <p>{{ listing.title }}</p>
                <p>{{ listing.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <h2>{{ listing.title }}</h2>
    <p>{{ listing.description }}</p>
    <p>{{ listing.price }}</p>
    <div v-for="image in listing.images" v-bind:key="image.id">
      <img :src="image.image_url" alt="image of a sneaker" />
    </div> -->

    <!-- <a v-bind:href="`/listings/${listing.id}/edit`">Edit This Listing</a> -->
    <br />
    <!-- <a href="/listings">Back to All Listings</a> -->
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
