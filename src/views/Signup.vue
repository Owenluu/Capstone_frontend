<template>
  <div class="signup">
    <div class="login-register-area pt-100 pb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 col-md-12 ml-auto mr-auto">
            <div class="login-register-wrapper">
              <div class="login-register-tab-list nav">
                <a class="active" data-toggle="tab" href="#lg1">
                  <h4>Register</h4>
                </a>
                <!-- <a data-toggle="tab" href="#lg2">
                  <h4>register</h4>
                </a> -->
              </div>
              <div class="tab-content">
                <div id="lg1" class="tab-pane active">
                  <div class="login-form-container">
                    <div class="login-register-form">
                      <form v-on:submit.prevent="submit()">
                        <li class="text-danger" v-for="error in errors" v-bind:key="error">
                          {{ error }}
                        </li>
                        <input type="First Name" name="First Name" placeholder="First Name" v-model="firstName" />
                        <input type="Last Name" name="Last Name" placeholder="Last Name" v-model="lastName" />
                        <input type="email" name="email" placeholder="email" v-model="email" />
                        <input type="password" name="user-password" placeholder="Password" v-model="password" />
                        <input
                          type="password"
                          name="user-password"
                          placeholder="Confirm Password"
                          v-model="passwordConfirmation"
                        />
                        <input type="Location Id" name="Location Id" placeholder="Location Id" v-model="locationId" />

                        <div class="button-box">
                          <div class="login-toggle-btn">
                            <!-- <input type="checkbox" /> -->
                            <!-- <label>Remember me</label> -->
                            <!-- <a href="#">Forgot Password?</a> -->
                          </div>
                          <button type="submit"><span>Sign Up</span></button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div id="lg2" class="tab-pane">
                  <div class="login-form-container">
                    <div class="login-register-form">
                      <form action="#" method="post">
                        <input type="text" name="user-name" placeholder="Username" />
                        <input type="password" name="user-password" placeholder="Password" />
                        <input name="user-email" placeholder="Email" type="email" />
                        <div class="button-box">
                          <!-- <button type="submit"><span>Register</span></button> -->
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>First Name:</label>
        <input type="text" class="form-control" v-model="firstName" />
      </div>
      <div class="form-group">
        <label>Last Name:</label>
        <input type="text" class="form-control" v-model="lastName" />
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" class="form-control" v-model="email" />
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" class="form-control" v-model="password" />
      </div>
      <div class="form-group">
        <label>Password confirmation:</label>
        <input type="password" class="form-control" v-model="passwordConfirmation" />
      </div>
      <div class="form-group">
        <label>Location ID:</label>
        <input type="locationID" class="form-control" v-model="locationId" />
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
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      locationId: "",
      errors: [],
    };
  },
  methods: {
    submit: function() {
      console.log("submit");
      var params = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
        location_id: this.locationId,
      };
      axios
        .post("/api/users", params)
        .then(response => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
