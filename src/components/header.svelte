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

  onMount(() => {
    socialauth = true;
  });

  let token = "";

  let clientId =
    "903421820217-b6482d9nsronpftg0srsv172nhfuni2u.apps.googleusercontent.com"; // Replace with your actual Google Client ID

  function initGoogleSignIn() {
    google.accounts.id.initialize({
      client_id: clientId,
      callback: handleCredentialResponse,
    });

    google.accounts.id.prompt(); // This triggers the Google sign-in prompt
  }

  async function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);

    // Send the credential (JWT token) to the backend for validation
    await fetch("http://localhost:4747/api/auth/google", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: response.credential,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("User info:", data);
        // You can now redirect to the dashboard or store the user's info
      })
      .catch((error) => console.error("Error:", error));
  }

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
            <li>
              <a href="/" class="active">Home</a>
            </li>
            <li class="has-sub">
              <a href="javascript:void(0)">Photos &amp; Videos</a>
              <ul class="sub-menu">
                <li>
                  <a href="/contests/contestList">Contests</a>
                </li>
                <li>
                  <a href={`/singleContest/${contest._id}`}>Single Contest</a>
                </li>
                <li>
                  <a href="/events/event-list">Events</a>
                </li>
                <li>
                  <a href="/events/event-list">Participate</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/contests/categories">Categories</a>
            </li>
            <li>
              <a href="/contests/contestants">Contestants</a>
            </li>
            <li>
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

            <a href="#" class="social_box google" on:click={initGoogleSignIn}>
              <span class="icon"><i class="fab fa-google-plus"></i></span>
              <span class="icon_title">Connect with Google</span>
            </a>
          </div>
        </div>
      {/if}
    </section>
  </div>
{/if}
{#if showmenu}
  <div class="showmenu">
    <ul class="d-flex flex-column nav">
      <li>
        <a href="/" class="active">Home</a>
      </li>
      <li class="has-sub">
        <a href="javascript:void(0)">Photos &amp; Videos</a>
        <ul class="sub-menu">
          <li>
            <a href="/contests/contestList">Contests</a>
          </li>
          <li>
            <a href="/singleContest">Single Contest</a>
          </li>
          <li>
            <a href="/events/event-list">Participate</a>
          </li>
          <li>
            <a href="/events/event-list">Events</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="/contests/categories">Categories</a>
      </li>
      <li>
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
