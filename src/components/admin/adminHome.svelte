<script>
    import AddContest from "./addContest.svelte";
    import ContestantsList from "./contestantsList.svelte";
  
    let activeSection = "";
  
    function showSection(section) {
        event.preventDefault();
      activeSection = section;
    }
  
    let isActiveSideNav = false;
  
    function addSideNav() {
      isActiveSideNav = !isActiveSideNav;
    }
  </script>
  
  <div id="layoutSidenav" class="">
    <div id="layoutSidenav_nav" class:active={isActiveSideNav}>
      <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div class="sb-sidenav-menu">
          <div class="nav">
            <div class="sb-sidenav-menu-heading">Core</div>
            <a class="nav-link" href="" on:click={() => showSection("")}>
              <div class="sb-nav-link-icon">
                <i class="fas fa-tachometer-alt"></i>
              </div>
              Dashboard
            </a>
            <div class="sb-sidenav-menu-heading">Interface</div>
  
            <a
              class="nav-link collapsed"
              href="#"
              data-bs-toggle="collapse"
              data-bs-target="#collapseLayouts3"
              aria-expanded="false"
              aria-controls="collapseLayouts"
            >
              <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
              Contest
              <div class="sb-sidenav-collapse-arrow">
                <i class="fas fa-angle-down"></i>
              </div>
            </a>
  
            <div
              class="collapse"
              id="collapseLayouts3"
              aria-labelledby="headingTwo"
              data-bs-parent="#sidenavAccordion"
            >
              <nav class="sb-sidenav-menu-nested nav">
                <a
                  class="nav-link"
                  href=""
                  on:click={() => showSection("addContest")}>Add Contest</a
                >
              </nav>
            </div>
  
            <a
              class="nav-link collapsed"
              href="#"
              data-bs-toggle="collapse"
              data-bs-target="#collapseLayouts"
              aria-expanded="false"
              aria-controls="collapseLayouts"
            >
              <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
              Contestants
              <div class="sb-sidenav-collapse-arrow">
                <i class="fas fa-angle-down"></i>
              </div>
            </a>
  
            <div
              class="collapse"
              id="collapseLayouts"
              aria-labelledby="headingTwo"
              data-bs-parent="#sidenavAccordion"
            >
              <nav class="sb-sidenav-menu-nested nav">
                <a
                  class="nav-link"
                  href="/admin"
                  on:click={() => showSection("contestantsList")}>Table</a
                >
              </nav>
            </div>
  
            <div class="sb-sidenav-menu-heading">Addons</div>
            <a class="nav-link" href="charts.html">
              <div class="sb-nav-link-icon">
                <i class="fas fa-chart-area"></i>
              </div>
              Charts
            </a>
            <a class="nav-link" href="tables.html">
              <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
              Tables
            </a>
          </div>
        </div>
      </nav>
    </div>
    <div id="layoutSidenav_content">
      <nav
        class="navbar shadow-sm navbar-expand navbar-light bg-white topbar static-top"
      >
        <!-- Topbar Search -->
        <form
          class=" d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"
        >
          <div class="input-group">
            <input
              type="text"
              class="form-control bg-light border-0 small"
              placeholder="Search for..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <button class="btn btn-primary px-3 py-2 border-0" type="button">
                <i class="fas fa-search fa-sm"></i>
              </button>
            </div>
          </div>
        </form>
  
        <!-- Topbar Navbar -->
        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown no-arrow d-sm-none">
            <!-- Dropdown - Messages -->
            <div
              class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
              aria-labelledby="searchDropdown"
            >
              <form class="form-inline mr-auto w-100 navbar-search">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control bg-light border-0 small"
                    placeholder="Search for..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-primary" type="button">
                      <i class="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>
          <!-- Nav Item - Alerts -->
          <li class="nav-item dropdown no-arrow mx-1">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="alertsDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-bell fa-fw"></i>
              <!-- Counter - Alerts -->
              <span class="badge badge-danger badge-counter">3+</span>
            </a>
            <!-- Dropdown - Alerts -->
            <div
              class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="alertsDropdown"
            >
              <h6 class="dropdown-header">Alerts Center</h6>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <div class="mr-3">
                  <div class="icon-circle bg-primary">
                    <i class="fas fa-file-alt text-white"></i>
                  </div>
                </div>
                <div>
                  <div class="small text-gray-500">December 12, 2019</div>
                  <span class="font-weight-bold"
                    >A new monthly report is ready to download!</span
                  >
                </div>
              </a>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <div class="mr-3">
                  <div class="icon-circle bg-success">
                    <i class="fas fa-donate text-white"></i>
                  </div>
                </div>
                <div>
                  <div class="small text-gray-500">December 7, 2019</div>
                  $290.29 has been deposited into your account!
                </div>
              </a>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <div class="mr-3">
                  <div class="icon-circle bg-warning">
                    <i class="fas fa-exclamation-triangle text-white"></i>
                  </div>
                </div>
                <div>
                  <div class="small text-gray-500">December 2, 2019</div>
                  Spending Alert: We've noticed unusually high spending for your account.
                </div>
              </a>
              <a class="dropdown-item text-center small text-gray-500" href="#"
                >Show All Alerts</a
              >
            </div>
          </li>
  
          <!-- Nav Item - Messages -->
          <li class="nav-item dropdown no-arrow mx-1">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="messagesDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-envelope fa-fw"></i>
              <!-- Counter - Messages -->
              <span class="badge badge-danger badge-counter">7</span>
            </a>
            <!-- Dropdown - Messages -->
            <div
              class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="messagesDropdown"
            >
              <h6 class="dropdown-header">Message Center</h6>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <div class="dropdown-list-image mr-3">
                  <img
                    class="rounded-circle"
                    src="img/undraw_profile_1.svg"
                    alt="..."
                  />
                  <div class="status-indicator bg-success"></div>
                </div>
                <div class="font-weight-bold">
                  <div class="text-truncate">
                    Hi there! I am wondering if you can help me with a problem
                    I've been having.
                  </div>
                  <div class="small text-gray-500">Emily Fowler · 58m</div>
                </div>
              </a>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <div class="dropdown-list-image mr-3">
                  <img
                    class="rounded-circle"
                    src="img/undraw_profile_2.svg"
                    alt="..."
                  />
                  <div class="status-indicator"></div>
                </div>
                <div>
                  <div class="text-truncate">
                    I have the photos that you ordered last month, how would you
                    like them sent to you?
                  </div>
                  <div class="small text-gray-500">Jae Chun · 1d</div>
                </div>
              </a>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <div class="dropdown-list-image mr-3">
                  <img
                    class="rounded-circle"
                    src="img/undraw_profile_3.svg"
                    alt="..."
                  />
                  <div class="status-indicator bg-warning"></div>
                </div>
                <div>
                  <div class="text-truncate">
                    Last month's report looks great, I am very happy with the
                    progress so far, keep up the good work!
                  </div>
                  <div class="small text-gray-500">Morgan Alvarez · 2d</div>
                </div>
              </a>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <div class="dropdown-list-image mr-3">
                  <img
                    class="rounded-circle"
                    src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                    alt="..."
                  />
                  <div class="status-indicator bg-success"></div>
                </div>
                <div>
                  <div class="text-truncate">
                    Am I a good boy? The reason I ask is because someone told me
                    that people say this to all dogs, even if they aren't good...
                  </div>
                  <div class="small text-gray-500">Chicken the Dog · 2w</div>
                </div>
              </a>
              <a class="dropdown-item text-center small text-gray-500" href="#"
                >Read More Messages</a
              >
            </div>
          </li>
  
          <!-- Nav Item - User Information -->
          <li class="nav-item dropdown no-arrow">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="mr-2 d-lg-inline small" style="color:#a6a8b5;"
                >Douglas McGee</span
              >
              <img
                class="img-profile rounded-circle"
                src="img/undraw_profile.svg"
              />
            </a>
            <!-- Dropdown - User Information -->
            <div
              class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="userDropdown"
            >
              <a class="dropdown-item" href="#">
                <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                Profile
              </a>
              <a class="dropdown-item" href="#">
                <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                Settings
              </a>
              <a class="dropdown-item" href="#">
                <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                Activity Log
              </a>
              <div class="dropdown-divider"></div>
              <a
                class="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#logoutModal"
              >
                <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Logout
              </a>
            </div>
          </li>
          <!-- Sidebar Toggle (Topbar) -->
          <button
            id="sidebarToggleTop"
            style="font-size: 17px;"
            on:click={addSideNav}
            class="d-md-none btn btn-sm btn-white mr-3 p-1 bg-white text-dark"
          >
            <i class="fa fa-bars"></i>
          </button>
        </ul>
      </nav>
      {#if activeSection === "addContest"}
        <AddContest />
      {:else if activeSection === "contestantsList"}
        <ContestantsList />
      {:else}
        <main>
          <div class="container-fluid pt-3" style="background-color: #fafafa;">
            <!-- Page Heading -->
            <div
              class="d-sm-flex align-items-center justify-content-between mb-4"
            >
              <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
              <a
                href="#"
                style="border-radius: 17px;"
                class="d-none d-sm-inline-block px-3 py-2 border-0 btn btn-sm btn-primary shadow-sm"
                ><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a
              >
            </div>
  
            <!-- Content Row -->
            <div class="row pt-4">
              <!-- Earnings (Monthly) Card Example -->
              <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-primary shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div class="text-xs text-primary text-uppercase mb-1">
                          Earnings (Monthly)
                        </div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">
                          $40,000
                        </div>
                      </div>
                      <div class="col-auto">
                        <i class="fas fa-calendar fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              <!-- Earnings (Monthly) Card Example -->
              <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-success shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div class="text-xs text-success text-uppercase mb-1">
                          Earnings (Annual)
                        </div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">
                          $215,000
                        </div>
                      </div>
                      <div class="col-auto">
                        <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-danger shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div class="text-xs text-danger text-uppercase mb-1">
                          Total Contest
                        </div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">
                          200
                        </div>
                      </div>
                      <div class="col-auto">
                        <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              <!-- Pending Requests Card Example -->
              <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-warning shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div class="text-xs text-warning text-uppercase mb-1">
                          Contest Ongoing
                        </div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">
                          18
                        </div>
                      </div>
                      <div class="col-auto">
                        <i class="fas fa-comments fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- content row end -->
            <!-- Content Row -->
            <div class="row pt-4">
              <!-- Earnings (Monthly) Card Example -->
              <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-info shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div class="text-xs text-info text-uppercase mb-1">
                          Tasks
                        </div>
                        <div class="row no-gutters align-items-center">
                          <div class="col-auto">
                            <div
                              class="h5 mb-0 mr-3 font-weight-bold text-gray-800"
                            >
                              50%
                            </div>
                          </div>
                          <div class="col">
                            <div
                              class="progress progress-sm mr-2"
                              style="height: 11px;"
                            >
                              <div
                                class="progress-bar bg-info"
                                role="progressbar"
                                style="width: 50%;height:11px"
                                aria-valuenow="50"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-auto">
                        <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              <!-- Pending Requests Card Example -->
              <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-secondary shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div class="text-xs text-secondary text-uppercase mb-1">
                          Pending Requests
                        </div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">
                          18
                        </div>
                      </div>
                      <div class="col-auto">
                        <i class="fas fa-message fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      {/if}
    </div>
  </div>
  
  <style>
    input:focus {
      box-shadow: none !important;
    }
    input:focus,
    button:focus {
      outline: 0;
      box-shadow: none;
    }
    .topbar {
      height: 4.375rem;
      padding: 10px 37px;
    }
    .topbar .navbar-search {
      width: 25rem;
    }
    .input-group:not(.has-validation) > .form-control:not(:last-child) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  
    .topbar .navbar-search input {
      font-size: 0.85rem;
      height: auto;
    }
    .btn:not(:disabled):not(.disabled) {
      cursor: pointer;
    }
    .navbar-expand .navbar-nav {
      flex-direction: row;
    }
  
    .ml-auto,
    .mx-auto {
      margin-left: auto !important;
    }
    .navbar-nav {
      display: flex;
      flex-direction: column;
      padding-left: 0;
      margin-bottom: 0;
      list-style: none;
    }
    .topbar.navbar-light .navbar-nav .nav-item .nav-link {
      color: #a6a8b5;
    }
    .badge {
      left: 25px;
      background-color: red;
      display: inline-block;
      padding: 0.3em 0.5em;
      font-size: 11px;
      font-size: 12px;
      position: absolute;
      top: 17px;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      vertical-align: baseline;
      border-radius: 0.25rem;
    }
  
    .topbar .nav-item .nav-link {
      height: 4.375rem;
      display: flex;
      align-items: center;
      padding: 0 0.75rem;
    }
    .fa-fw {
      text-align: center;
      width: 1.25em;
    }
    .sidebar .nav-item .nav-link,
    .topbar .nav-item .nav-link {
      position: relative;
    }
    .topbar .dropdown .dropdown-menu {
      width: calc(100% - 1.5rem);
      right: 0.75rem;
    }
    .navbar-expand .navbar-nav .dropdown-menu {
      position: absolute;
    }
    .dropdown .dropdown-menu {
      font-size: 0.85rem;
    }
    .navbar-nav .dropdown-menu {
      position: static;
      float: none;
    }
  
    .p-3 {
      padding: 1rem !important;
    }
    .shadow {
      box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15) !important;
    }
    .dropdown-menu-right {
      right: 0;
      left: auto;
    }
    .dropdown-menu {
      position: absolute;
      top: 100%;
      left: 0;
      z-index: 1000;
      display: none;
      float: left;
      min-width: 10rem;
      padding: 0.5rem 0;
      margin: 0.125rem 0 0;
      font-size: 0.85rem;
      color: #858796;
      text-align: left;
      list-style: none;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #e3e6f0;
      border-radius: 0.35rem;
    }
    #layoutSidenav {
      display: flex;
      margin-top: 5rem;
    }
    #layoutSidenav #layoutSidenav_nav {
      flex-basis: 170px;
      flex-shrink: 0;
      transition: transform 0.15s ease-in-out;
      z-index: 1038;
      position: relative;
      height: 100vh;
      top: 10%;
      left: 0;
      transform: translateX(-225px);
    }
    #layoutSidenav #layoutSidenav_content {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: start;
      min-width: 0;
      flex-grow: 1;
      overflow: auto;
      max-height: 100vh;
      margin-left: -225px;
    }
    #layoutSidenav #layoutSidenav_content::-webkit-scrollbar {
      width: 5px;
    }
  
    .sb-sidenav-toggled #layoutSidenav #layoutSidenav_nav {
      transform: translateX(0);
    }
    .sb-sidenav-toggled #layoutSidenav #layoutSidenav_content:before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #000;
      z-index: 1037;
      opacity: 0.5;
      transition: opacity 0.3s ease-in-out;
    }
  
    .sb-nav-fixed #layoutSidenav #layoutSidenav_nav {
      width: 225px;
      height: 100vh;
      z-index: 1038;
    }
    .sb-nav-fixed #layoutSidenav #layoutSidenav_nav .sb-sidenav {
      padding-top: 56px;
    }
    .sb-nav-fixed #layoutSidenav #layoutSidenav_nav .sb-sidenav .sb-sidenav-menu {
      overflow-y: auto;
    }
    .sb-nav-fixed #layoutSidenav #layoutSidenav_content {
      padding-left: 225px;
      top: 56px;
    }
  
    .nav .nav-link .sb-nav-link-icon,
    .sb-sidenav-menu .nav-link .sb-nav-link-icon {
      margin-right: 0.5rem;
    }
  
    .sb-sidenav {
      display: flex;
      flex-direction: column;
      height: 100%;
      flex-wrap: nowrap;
    }
    .sb-sidenav .sb-sidenav-menu {
      flex-grow: 1;
    }
    .sb-sidenav .sb-sidenav-menu .nav {
      flex-direction: column;
      flex-wrap: nowrap;
    }
    .sb-sidenav .sb-sidenav-menu .nav .sb-sidenav-menu-heading {
      padding: 1.75rem 1rem 0.75rem;
      font-size: 0.75rem;
      font-weight: bold;
      text-transform: uppercase;
    }
    .sb-sidenav .sb-sidenav-menu .nav .nav-link {
      display: flex;
      align-items: center;
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      position: relative;
    }
    .sb-sidenav .sb-sidenav-menu .nav .nav-link .sb-nav-link-icon {
      font-size: 0.9rem;
    }
    .sb-sidenav .sb-sidenav-menu .nav .nav-link .sb-sidenav-collapse-arrow {
      display: inline-block;
      margin-left: auto;
      transition: transform 0.15s ease;
    }
    .sb-sidenav
      .sb-sidenav-menu
      .nav
      .nav-link.collapsed
      .sb-sidenav-collapse-arrow {
      transform: rotate(-90deg);
    }
    .sb-sidenav .sb-sidenav-menu .nav .sb-sidenav-menu-nested {
      margin-left: 1.5rem;
      flex-direction: column;
    }
  
    .sb-sidenav-dark {
      background-color: #212529;
      color: rgba(255, 255, 255, 0.5);
    }
  
    .sb-sidenav-dark .sb-sidenav-menu .sb-sidenav-menu-heading {
      color: rgba(255, 255, 255, 0.25);
    }
    .sb-sidenav-dark .sb-sidenav-menu .nav-link {
      color: rgba(255, 255, 255, 0.5);
    }
    .sb-sidenav-dark .sb-sidenav-menu .nav-link .sb-nav-link-icon {
      color: rgba(255, 255, 255, 0.25);
    }
    .sb-sidenav-dark .sb-sidenav-menu .nav-link .sb-sidenav-collapse-arrow {
      color: rgba(255, 255, 255, 0.25);
    }
    .sb-sidenav-dark .sb-sidenav-menu .nav-link:hover {
      color: #fff;
    }
    .sb-sidenav-dark .sb-sidenav-menu .nav-link.active .sb-nav-link-icon {
      color: #fff;
    }
  
    .sb-sidenav-light .sb-sidenav-menu .sb-sidenav-menu-heading {
      color: #adb5bd;
    }
    .sb-sidenav-light .sb-sidenav-menu .nav-link {
      color: #212529;
    }
    .sb-sidenav-light .sb-sidenav-menu .nav-link .sb-nav-link-icon {
      color: #adb5bd;
    }
    .sb-sidenav-light .sb-sidenav-menu .nav-link .sb-sidenav-collapse-arrow {
      color: #adb5bd;
    }
    .sb-sidenav-light .sb-sidenav-menu .nav-link:hover {
      color: #0d6efd;
    }
  
    .sb-sidenav-light .sb-sidenav-menu .nav-link.active .sb-nav-link-icon {
      color: #0d6efd;
    }
  
    .sb-sidenav-menu::-webkit-scrollbar {
      width: 5px;
    }
  
    .card-body {
      flex: 1 1 auto;
      min-height: 1px;
      padding: 1.25rem;
    }
    .border-left-primary {
      border-left: 0.25rem solid #4e73df !important;
    }
    .border-left-success {
      border-left: 0.25rem solid #1cc88a !important;
    }
    .border-left-info {
      border-left: 0.25rem solid #36b9cc !important;
    }
    .border-left-warning {
      border-left: 0.25rem solid #f6c23e !important;
    }
    .border-left-danger {
      border-left: 0.25rem solid #e74a3b !important;
    }
    .border-left-secondary {
      border-left: 0.25rem solid #858796 !important;
    }
    .text-xs {
      font-size: 13px;
      font-weight: 600;
    }
    .font-weight-bold {
      font-weight: bold;
      font-size: 19px;
      color: rgba(0, 0, 0, 0.5);
    }
    .text-gray-300 {
      color: lightgray;
    }
  
    @media screen and (min-width: 250px) and (max-width: 768px) {
      #layoutSidenav #layoutSidenav_nav {
        flex-basis: 220px;
      }
      .topbar {
        padding: 8px 5px;
      }
      #layoutSidenav {
        display: flex;
        margin-top: 6rem;
      }
      .btn {
        padding: 0.4rem 0.5rem !important;
        font-size: 13px;
      }
      #layoutSidenav #layoutSidenav_nav.active {
        flex-basis: 170px;
        flex-shrink: 0;
        transition: transform 0.15s ease-in-out;
        z-index: 1038;
        transform: translateX(0);
      }
    }
  
    @media (min-width: 992px) {
      #layoutSidenav #layoutSidenav_nav {
        transform: translateX(0);
      }
      #layoutSidenav #layoutSidenav_content {
        margin-left: 0;
        transition: margin 0.15s ease-in-out;
      }
      .sb-sidenav-toggled #layoutSidenav #layoutSidenav_nav {
        transform: translateX(-225px);
      }
      .sb-sidenav-toggled #layoutSidenav #layoutSidenav_content {
        margin-left: -225px;
      }
      .sb-sidenav-toggled #layoutSidenav #layoutSidenav_content:before {
        display: none;
      }
    }
  </style>
  