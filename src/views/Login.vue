<template>
  <div class="login">
    <div class="login-register-area pt-100 pb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 col-md-12 ml-auto mr-auto">
            <div class="login-register-wrapper">
              <div class="login-register-tab-list nav">
                <a class="active" data-toggle="tab" href="#lg1">
                  <h4>login</h4>
                </a>
                <!-- <a data-toggle="tab" href="#lg2">
                  <h4>register</h4>
                </a> -->
              </div>
              <div class="tab-content">
                <div id="lg1" class="tab-pane active">
                  <div class="login-form-container">
                    <div class="login-register-form">
                      <form action="#" method="post" v-on:submit.prevent="submit()">
                        <li class="text-danger" v-for="error in errors" v-bind:key="error">
                          {{ error }}
                        </li>
                        <input type="email" name="user-name" placeholder="email" v-model="email" />
                        <input type="password" name="user-password" placeholder="Password" v-model="password" />
                        <div class="button-box">
                          <div class="login-toggle-btn">
                            <!-- <input type="checkbox" /> -->
                            <!-- <label>Remember me</label> -->
                            <!-- <a href="#">Forgot Password?</a> -->
                          </div>
                          <button type="submit"><span>Login</span></button>
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
                          <button type="submit"><span>Register</span></button>
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
    <!-- <form v-on:submit.prevent="submit()">
      <h1>Login</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" class="form-control" v-model="email" />
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" class="form-control" v-model="password" />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password,
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/");
        })
        .catch(error => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>
