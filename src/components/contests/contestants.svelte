<script>
    import { onMount } from "svelte";
    import axios from "axios";
    let contestants = [];
    let filteredContestants = [];
    let baseUrl;
  
    onMount(async () => {
      const getContestants = async () => {
        const response = await axios.get(
          "http://localhost:4747/api/contestants/get-contestant"
        );
        contestants = response.data;
        filteredContestants = [...contestants];
        baseUrl = "http://localhost:4747";
      };
  
      getContestants();
    });
  
    const contestantsPerPage = 4;
    let currentPage = 1;
  
    // Calculate the current page's contests
    $: filteredContestants = contestants.slice(
      (currentPage - 1) * contestantsPerPage,
      currentPage * contestantsPerPage
    );
  
    function handlePaginationClick(pageNumber) {
      currentPage = pageNumber;
    }
    function handleArrowLeftClick() {
      if (currentPage > 1) {
        currentPage--;
      }
    }
  
    // Function to handle clicking on the arrow right button
    function handleArrowRightClick() {
      if (currentPage < Math.ceil(contestants.length / contestantsPerPage)) {
        currentPage++;
      }
    }
  
    const handleVote = async (contestantId) => {
      try {
        const response = await axios.post(
          `http://localhost:4747/api/contestants/vote/${contestantId}`
        );
        if (response.status === 200) {
          // Update the votes locally
          const updatedContestants = filteredContestants.map((contestant) => {
            if (contestant._id === contestantId) {
              contestant.votes += 1;
              contestant.voted = true;
            }
            return contestant;
          });
  
          filteredContestants = [...updatedContestants];
        } else {
          const errorMessage = await response.data;
          console.error("Error adding vote:", errorMessage);
        }
      } catch (error) {
        console.error("Error adding vote:", error.message);
      }
    };
  
    const handleReport = (contestantId) => {
      alert("We got your report");
    };
  </script>
  
  <div class="page-heading">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2 header-text">
          <h2>Discover who participated in contest at <em>SnapX</em></h2>
          <p>
            When you need Free CSS Templates, you just remember our website
            TemplateMo. We provide you best quality website templates at
            absolutely free of charge. No hidden cost involved.
          </p>
        </div>
      </div>
    </div>
  </div>
  
  <section class="popular-categories">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-heading">
            <h6>Our Contestants</h6>
            <h4>Check Out <em>Recent</em> Contestants</h4>
          </div>
        </div>
  
        {#each filteredContestants as contestant (contestant._id)}
          <div class="col-lg-3 col-sm-6 aspect-ratio">
            <div class="popular-item ">
              <div class="">
                <h5 class="text-center mb-3">
                  <em class="text-danger"> {contestant.contestName} </em><br />
                </h5>
                <img
                  src={`${baseUrl}${contestant.mediaFile}`}
                  alt="images"
                  class="h-fit "
                />
  
                <div class="down-content">
                  <h4>{contestant.title}</h4>
                </div>
                <div
                  class="mt-3 d-flex justify-content-between align-items-center"
                >
                  <div>
                    <h6 style="font-weight: 550;font-size:15px">
                      {contestant.contestantName}
                    </h6>
                    <span>Artist</span>
                  </div>
                  <div>
                    <h6 style="font-weight: 550;font-size:15px">
                      {contestant.category}
                    </h6>
                    <span>Category</span>
                  </div>
                </div>
                <div
                  class="mt-3 d-flex justify-content-between align-items-center"
                >
                  <div>
                    <div class="border-button btn-sm m-0 p-0">
                      <a href="">Know more</a>
                    </div>
                  </div>
                  <div>
                    <h6 style="font-weight: 550;font-size:15px">
                      {contestant.contestantLocation}
                    </h6>
                    <span>Location</span>
                  </div>
                </div>
                <div
                  class="mt-3 d-flex justify-content-between align-items-center"
                >
                  <div>
                    <i
                      on:click={() => handleVote(contestant._id)}
                      class="fa-solid fa-check-to-slot"
                      style:color={contestant.voted ? "red" : ""}
                      style="color: rgba(0,0,0,0.6);font-sze:16px;cursor:pointer"
                    ></i>
                    <span>{contestant.votes} votes</span>
                  </div>
                  <div>
                    <button
                      on:click={() => handleReport(contestant._id)}
                      class="btn btn-sm btn-warning bg-warning p-1"
                      style="font-size: 12px;">Report</button
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/each}
        <div class="col-lg-12">
          <ul class="pagination">
            <li>
              <a href="#" on:click={handleArrowLeftClick}
                ><i class="fa fa-arrow-left"></i>
              </a>
            </li>
            {#each Array.from({ length: Math.ceil(contestants.length / contestantsPerPage) }, (_, i) => i + 1) as pageNumber}
              <li class:active={currentPage === pageNumber}>
                <a href="#" on:click={() => handlePaginationClick(pageNumber)}
                  >{pageNumber}</a
                >
              </li>
            {/each}
  
            <li>
              <a href="#" on:click={handleArrowRightClick}
                ><i class="fa fa-arrow-right"></i></a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  
  <section class="popular-categories">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-heading">
            <h6>Our Winners</h6>
            <h4>Check Out <em>Recent</em> Winners</h4>
          </div>
        </div>
  
        {#each filteredContestants as contestant (contestant._id)}
          <div class="col-lg-3 col-sm-6">
            <div class="popular-item">
              <div class="">
                <h5 class="text-center mb-3">
                  <em class="text-danger"> {contestant.contestName} </em><br />
                </h5>
                <img
                  src={`${baseUrl}${contestant.mediaFile}`}
                  alt="images"
                  height="150"
                />
  
                <div class="down-content">
                  <h4>{contestant.title}</h4>
                </div>
                <div
                  class="mt-3 d-flex justify-content-between align-items-center"
                >
                  <div>
                    <h6 style="font-weight: 550;font-size:15px">
                      {contestant.contestantName}
                    </h6>
                    <span>Contest Winner</span>
                  </div>
                  <div>
                    <h6 style="font-weight: 550;font-size:15px">$2000</h6>
                    <span>Prize</span>
                  </div>
                </div>
                <div
                  class="mt-3 d-flex justify-content-between align-items-center"
                >
                  <div>
                    <h6 style="font-weight: 550;font-size:15px">
                      {contestant.category}
                    </h6>
                    <span>Category</span>
                  </div>
                  <div>
                    <h6 style="font-weight: 550;font-size:15px">
                      {contestant.contestantLocation}
                    </h6>
                    <span>Location</span>
                  </div>
                </div>
                <div
                  class="mt-3 d-flex justify-content-between align-items-center"
                >
                  <span>Rating</span>
                  <div style="color:#00bdfe">
                    <i class="fa-solid mx-1 fa-star"></i>
                    <i class="fa-solid mx-1 fa-star"></i>
                    <i class="fa-solid mx-1 fa-star"></i>
                    <i class="fa-solid mx-1 fa-star-half"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/each}
  
        <div class="col-lg-12">
          <ul class="pagination">
            <li>
              <a href="#" on:click={handleArrowLeftClick}
                ><i class="fa fa-arrow-left"></i>
              </a>
            </li>
            {#each Array.from({ length: Math.ceil(contestants.length / contestantsPerPage) }, (_, i) => i + 1) as pageNumber}
              <li class:active={currentPage === pageNumber}>
                <a href="#" on:click={() => handlePaginationClick(pageNumber)}
                  >{pageNumber}</a
                >
              </li>
            {/each}
  
            <li>
              <a href="#" on:click={handleArrowRightClick}
                ><i class="fa fa-arrow-right"></i></a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  
  <style>
    .down-content h4 {
      font-size: 16px;
      color: #00bdfe !important;
      font-weight: 700;
      margin: 16px 0;
    }
    .popular-categories {
      margin-bottom: 100px;
    }
  </style>
  