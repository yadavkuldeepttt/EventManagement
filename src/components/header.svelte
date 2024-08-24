<script>
  import logo from "../assets/images/logo.png";
  import { onMount } from "svelte";
  // import axios from "axios";

  let showauth = false;
  let loginsection = false;
  let signupsection = false;
  let socialauth = false;

  function showAuthModal() {
    showauth = true;
  }
  function closeShowAuth() {
    showauth = false;
  }

  function signupSection() {
    signupsection = true;
    loginsection = false;
    socialauth = false;
  }

  function loginSection() {
    loginsection = true;
    signupsection = false;
    socialauth = false;
  }
  onMount(() => {
    socialauth = true;
  });

  function backToSocial() {
    socialauth = true;
    loginsection = false;
    signupsection = false;
  }

  let username = "";
  let useremail = "";
  let userpassword = "";
  let usernameOrEmail = "";
  let password = "";
  let errorMessage = "";
  let foundUser = {};
  let token = "";

  // const registerAuth = async () => {
  //   try {
  //     const response = await axios.post("http://localhost:4747/auth/register", {
  //       username,
  //       useremail,
  //       userpassword,
  //     });

  //     if (response.status === 201) {
  //       alert("Authentication saved successfully.");
  //       clearInputs();
  //       signupsection = false;
  //       loginsection = true;
  //     } else {
  //       console.error("Unexpected response status:", response.status);
  //       alert("Failed to save authentication details. Please try again.");
  //     }
  //   } catch (err) {
  //     if (err.code === 11000 && err.keyPattern.username) {
  //       console.error("Username already exists");
  //     } else if (err.code === 11000 && err.keyPattern.useremail) {
  //       console.error("Email already exists");
  //     } else {
  //       console.error("Error adding authentication details:", err);
  //     }
  //   }
  // };

  // const loginAuth = async () => {
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:4747/auth/authenticate",
  //       {
  //         usernameOrEmail,
  //         password,
  //       }
  //     );
  //     if (response.status === 200) {
  //       token = response.data.token;
  //       foundUser = response.data.user;
  //       alert("Login successful! Welcome " + foundUser.username);

  //       localStorage.setItem("token", token);
  //       localStorage.setItem("user", JSON.stringify(foundUser));
  //       closeShowAuth();
  //     } else {
  //       errorMessage =
  //         "Login failed. Please check your credentials and try again.";
  //     }
  //   } catch (err) {
  //     console.error("Error during login:", err);
  //     alert("An error occurred during login. Please try again later.");
  //   }
  // };

  // const logoutUser = async () => {
  //   try {
  //     localStorage.removeItem("token");
  //     sessionStorage.removeItem("token");
  //     alert("Logout successfully");
  //     token = "";
  //   } catch (err) {
  //     console.error("Error during logout:", err);
  //   }
  // };

  // onMount(() => {
  //   token = localStorage.getItem("token") || "";
  // });

  // function clearInputs() {
  //   username = "";
  //   useremail = "";
  //   userpassword = "";
  // }

  let contest = [];

  // onMount(async () => {
  //   const getContest = async () => {
  //     const response = await axios.get(
  //       "http://localhost:4747/api/contest/get-contest"
  //     );
  //     contest = response.data;
  //   };

  //   getContest();
  // });
  let showmenu = false;

  function showMenu() {
    showmenu = !showmenu;
  }

  // // Function to handle Facebook login
  // function loginWithFacebook() {
  //   FB.login(function (response) {
  //     if (response.authResponse) {
  //       console.log("Facebook login successful");
  //       // Handle the authentication response here
  //     } else {
  //       console.log("Facebook login failed");
  //     }
  //   });
  // }
  // // Initialize Facebook SDK
  // window.fbAsyncInit = function () {
  //   FB.init({
  //     appId: "374102501931210",
  //     cookie: true,
  //     xfbml: true,
  //     version: "v11.0",
  //   });
  // };

  // // Load the Facebook SDK asynchronously
  // (function (d, s, id) {
  //   var js,
  //     fjs = d.getElementsByTagName(s)[0];
  //   if (d.getElementById(id)) {
  //     return;
  //   }
  //   js = d.createElement(s);
  //   js.id = id;
  //   js.src = "https://connect.facebook.net/en_US/sdk.js";
  //   fjs.parentNode.insertBefore(js, fjs);
  // })(document, "script", "facebook-jssdk");
</script>

<!-- ***** Header Area Start ***** -->
<header class="header-area header-sticky">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <nav class="main-nav flex bg-transparent min-h-[80px]">
          <!-- ***** Logo Start ***** -->
          <a href="index.html" class="logo">
            <img src={logo.src} alt="SnapX Photography Template" />
          </a>
          <!-- ***** Logo End ***** -->
          <!-- ***** Menu Start ***** -->
          <ul class="nav">
            <li >
              <a href="/" class="active">Home</a>
            </li>
            <li class="has-sub">
              <a href="javascript:void(0)">Photos &amp; Videos</a>
              <ul class="sub-menu">
                <li
              
                >
                  <a href="/contests/contestList">Contests</a>
                </li>
                <li
             
                >
                  <a href={`/singleContest/${contest._id}`}>Single Contest</a>
                </li>
                <li
             
                >
                  <a href="/events/event-list">Events</a>
                </li>
                <li
             
                >
                  <a href="/events/event-list">Participate</a>
                </li>
              </ul>
            </li>
            <li
          
            >
              <a href="/contests/categories">Categories</a>
            </li>
            <li
      
            >
              <a href="/contests/contestants">Contestants</a>
            </li>
            <li
          
            >
              <a href="/speakers">Speakers</a>
            </li>
          </ul>
          {#if token}
            <div class="ms-5">
              <div class="border-button">
                <a
                  id="modal_trigger"
                  on:click={logoutUser}
                  href="#a"
                  class="sign-in-up"
                  style="font-size: 14px;">Log Out</a
                >
              </div>
            </div>
          {:else}
            <div class="border-button">
              <a
                id="modal_trigger"
                on:click={showAuthModal}
                href="#modal"
                class="sign-in-up"
                style="font-size: 14px;"
                ><i class="fa fa-user"></i> Sign In/Up</a
              >
            </div>
          {/if}
          <a class="menu-trigger" on:click={showMenu}>
            <span>Menu</span>
          </a>
          <!-- ***** Menu End ***** -->
        </nav>
      </div>
    </div>
  </div>
</header>
<!-- ***** Header Area End ***** -->

{#if showauth}
  <div class="popupContainer">
    <div class="popupHeader">
      <span class="header_title">Login</span>
      <span class="modal_close" on:click={closeShowAuth}
        ><i class="fa fa-times"></i></span
      >
    </div>

    <section class="popupBody">
      {#if socialauth}
        <!-- Social Login -->
        <div class="social_login">
          <div class="">
            <a href="#" class="social_box fb">
              <span class="icon"><i class="fab fa-facebook"></i></span>
              <span class="icon_title">Connect with Facebook</span>
            </a>

            <a href="#" class="social_box google">
              <span class="icon"><i class="fab fa-google-plus"></i></span>
              <span class="icon_title">Connect with Google</span>
            </a>
          </div>

          <div class="centeredText">
            <span>Or use your Email address</span>
          </div>

          <div class="action_btns">
            <div class="one_half">
              <a
                href="#"
                id="login_form"
                class="btn btn-sm"
                on:click={loginSection}>Login</a
              >
            </div>
            <div class="one_half last">
              <a
                href="#"
                id="register_form"
                class="btn btn-sm"
                on:click={signupSection}>Sign up</a
              >
            </div>
          </div>
        </div>
      {/if}
      {#if loginsection}
        <!-- Username & Password Login form -->
        <div class="user_login">
          <form on:submit|preventDefault={loginAuth}>
            <label>Email / Username</label>
            <input
              name="usernameOrEmail"
              type="text"
              id="usernameOrEmail"
              bind:value={usernameOrEmail}
            />
            <br />

            <label>Password</label>
            <input
              name="password"
              type="password"
              id="password"
              bind:value={password}
            />
            <br />

            {#if errorMessage}
              <p class="error">{errorMessage}</p>
            {/if}

            <div class="checkbox">
              <input id="remember" type="checkbox" />
              <label for="remember">Remember me on this computer</label>
            </div>

            <div class="action_btns">
              <div class="one_half">
                <a href="#" class="btn back_btn btn-sm" on:click={backToSocial}
                  ><i class="fa fa-angle-double-left"></i> Back</a
                >
              </div>
              <div class="one_half last">
                <button type="submit" class="btn btn_red btn-sm">Login</button>
              </div>
            </div>
          </form>

          <a href="#" class="forgot_password">Forgot password?</a>
        </div>
      {/if}

      {#if signupsection}
        <!-- Register Form -->
        <div class="user_register">
          <form on:submit|preventDefault={registerAuth}>
            <label>Username</label>
            <input
              name="username"
              type="text"
              id="username"
              bind:value={username}
              required
            />
            <br />

            <label>Email Address</label>
            <input
              name="email"
              type="email"
              id="email"
              bind:value={useremail}
              required
            />
            <br />

            <label>Password</label>
            <input
              name="password"
              type="password"
              id="password"
              bind:value={userpassword}
              required
            />
            <br />

            <div class="checkbox">
              <input id="send_updates" type="checkbox" />
              <label for="send_updates">Send me occasional email updates</label>
            </div>

            <div class="action_btns">
              <div class="one_half">
                <a href="#" class="btn back_btn btn-sm" on:click={backToSocial}
                  ><i class="fa fa-angle-double-left"></i> Back</a
                >
              </div>
              <div class="one_half last">
                <button
                  type="submit"
                  class="btn btn_red btn-sm"
                  on:click={registerAuth}>Register</button
                >
              </div>
            </div>
          </form>
        </div>
      {/if}
    </section>
  </div>
{/if}
{#if showmenu}
  <div class="showmenu">
    <ul class="d-flex flex-column nav">
      <li >
        <a href="/" class="active">Home</a>
      </li>
      <li class="has-sub">
        <a href="javascript:void(0)">Photos &amp; Videos</a>
        <ul class="sub-menu">
          <li
        
          >
            <a href="/contests/contestList">Contests</a>
          </li>
          <li
 
          >
            <a href="/singleContest">Single Contest</a>
          </li>
          <li
   
          >
            <a href="/events/event-list">Participate</a>
          </li>
          <li
   
          >
            <a href="/events/event-list">Events</a>
          </li>
        </ul>
      </li>
      <li
      >
        <a href="/contests/categories">Categories</a>
      </li>
      <li
        
      >
        <a href="/contests/contestants">Contestants</a>
      </li>
      <li>
        <a href="/speakers">Speakers</a>
      </li>
    </ul>
  </div>
{/if}

<style>
  @media screen and (max-width: 768px) {
    .showmenu {
      position: absolute;
      top: 17%;
      right: 0%;
      color: white;
      background-color: #00bdfe;
      width: 40vw;
      max-width: 100vw;
      padding: 13px 15px;
      z-index: 9999999;
    }
    .showmenu ul li a {
      color: white !important;
    }
    .showmenu ul {
      list-style-type: none !important;
    }
    .showmenu ul li {
      padding-bottom: 1rem !important;
    }

    .showmenu .nav li.has-sub {
      position: relative;
      padding-right: 15px;
    }

    .showmenu .nav li.has-sub:after {
      font-family: FontAwesome;
      content: "\f107";
      font-size: 12px;
      color: #fff;
      position: absolute;
      right: 2px;
      top: 3px;
    }

    .showmenu .nav li.has-sub ul.sub-menu {
      position: absolute;
      width: 160px;
      background-color: #fff;
      box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.06);
      overflow: hidden;
      top: 24px;
      border-radius: 0px;
      opacity: 0;
      transition: all 0.3s;
      transform: translateY(+2em);
      visibility: hidden;
      z-index: -1;
      -webkit-border-radius: 0px;
      -moz-border-radius: 0px;
      -ms-border-radius: 0px;
      -o-border-radius: 0px;
    }

    .showmenu .nav li.has-sub ul.sub-menu li {
      margin-left: 0px;
      padding-left: 0px;
      padding-right: 0px;
    }

    .showmenu .nav li.has-sub ul.sub-menu li a {
      opacity: 1;
      display: block;
      background: #f7f7f7;
      color: #2a2a2a !important;
      padding-left: 20px;
      height: 40px;
      line-height: 40px;
      -webkit-transition: all 0.3s ease 0s;
      -moz-transition: all 0.3s ease 0s;
      -o-transition: all 0.3s ease 0s;
      transition: all 0.3s ease 0s;
      position: relative;
      font-size: 13px;
      font-weight: 400;
      border-bottom: 1px solid #eee;
    }

    .showmenu .nav li.has-sub ul li a:hover {
      background: #fff;
      color: #00bdfe !important;
      padding-left: 25px;
    }

    .showmenu .nav li.has-sub ul li a:hover:before {
      width: 3px;
    }

    .showmenu .nav li.has-sub:hover ul.sub-menu {
      visibility: visible;
      opacity: 1;
      z-index: 1;
      transform: translateY(0%);
      transition-delay: 0s, 0s, 0.3s;
    }
  }
</style>
