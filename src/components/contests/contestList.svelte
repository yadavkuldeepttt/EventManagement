<script>
import photo_video_01 from "../../assets/images/photo-video-01.jpg";
import photo_video_02 from "../../assets/images/photo-video-02.jpg";
import photo_video_03 from "../../assets/images/photo-video-03.jpg";
import photo_video_04 from "../../assets/images/photo-video-04.jpg";
import photo_video_05 from "../../assets/images/photo-video-05.jpg";
import icon_01 from "../../assets/images/icon-01.png";
import icon_03 from "../../assets/images/icon-03.png";
import contest_01 from "../../assets/images/contest-01.jpg";


// Define the media items data array
const mediaItems = [
    {
      id: 1,
      title: "A Walk In Nature",
      views: 840,
      likes: 160,
      rank: "1st",
      category: "Photos",
      imageUrl: photo_video_01,
      isVideo: false
    },
    {
      id: 2,
      title: "Blue Mountain Hill",
      views: 1722,
      likes: 320,
      rank: "2nd",
      category: "Videos",
      imageUrl: photo_video_02,
      isVideo: true,
      videoUrl: "http://youtube.com"
    },
    {
      id: 3,
      title: "Underwater Turtle",
      views: 1436,
      likes: 256,
      rank: "3rd",
      category: "Photos",
      imageUrl: photo_video_03,
      isVideo: false
    },
    {
      id: 4,
      title: "Greeny Place",
      views: 1596,
      likes: 512,
      rank: "4th",
      category: "Videos",
      imageUrl: photo_video_04,
      isVideo: true,
      videoUrl: "http://youtube.com"
    },
    {
      id: 5,
      title: "Rocky Mountain",
      views: 1596,
      likes: 768,
      rank: "5th",
      category: "Random",
      imageUrl: photo_video_05,
      isVideo: false
    }
  ];

    import { onMount } from "svelte";
    import axios from "axios";
  
    let contest = [];
  
    function handleClick(item) {
      localStorage.setItem("item", JSON.stringify(item));
    }
    let filteredContests = [];
    let baseUrl;
  
    onMount(async () => {
      const getContest = async () => {
        const response = await axios.get(
          "http://localhost:4747/api/contest/get-contest"
        );
        contest = response.data;
        filteredContests = [...contest];
        baseUrl = "http://localhost:4747";
      };
  
      getContest();
    });
  
    const searchContests = async (event) => {
      const formData = new FormData(event.target);
      const contestNameSearch = formData.get("contest");
      const category = formData.get("category");
      const priceRange = formData.get("priceRange");
  
      filteredContests = contest.filter((contest) => {
        const isContestNameMatch = contest.contestName
          .toLowerCase()
          .includes(contestNameSearch.toLowerCase());
        const isCategoryMatch = contest.contestCategory === category;
  
        const price = parseInt(contest.contestAwardPrice);
        let isPriceRangeMatch = false;
        switch (priceRange) {
          case "500":
            isPriceRangeMatch = price >= 500 && price <= 1000;
            break;
          case "1500":
            isPriceRangeMatch = price >= 1500 && price <= 2000;
            break;
          case "2500":
            isPriceRangeMatch = price >= 2500 && price <= 3000;
            break;
          case "3500+":
            isPriceRangeMatch = price >= 3500;
            break;
          default:
            isPriceRangeMatch = true;
        }
  
        return isContestNameMatch && isCategoryMatch && isPriceRangeMatch;
      });
    };
  
    const contestsPerPage = 4;
    let currentPage = 1;
  
    // Calculate the current page's contests
    $: filteredContests = contest.slice(
      (currentPage - 1) * contestsPerPage,
      currentPage * contestsPerPage
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
      if (currentPage < Math.ceil(contest.length / contestsPerPage)) {
        currentPage++;
      }
    }
  </script>
  
  <div class="page-heading">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2 header-text">
          <h2>Discover what's currently going on at <em>SnapX</em></h2>
          <p>
            When you need Free CSS Templates, you just remember our website
            TemplateMo. We provide you best quality website templates at
            absolutely free of charge. No hidden cost involved.
          </p>
        </div>
      </div>
    </div>
  </div>
  
  <div class="search-form">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <form
            on:submit|preventDefault={searchContests}
            id="search-form"
            name="gs"
            method="submit"
            role="search"
            action="#"
          >
            <div class="row">
              <div class="col-lg-4">
                <fieldset>
                  <label for="contest" class="form-label"
                    >Search Any Contest</label
                  >
                  <input
                    type="text"
                    name="contest"
                    class="searchText"
                    placeholder="Contest Name..."
                    autocomplete="on"
                  />
                </fieldset>
              </div>
              <div class="col-lg-4">
                <fieldset>
                  <label for="category" class="form-label">Pick Category</label>
                  <select
                    name="category"
                    class="form-select"
                    aria-label="Choose a category"
                    id="category"
                  >
                    <option selected>Choose a category</option>
                    <option value="Nature Contest"
                      >Nature Photography (220 Contests)</option
                    >
                    <option value="Portrait Picture"
                      >Portrait Photography (172 Contests)</option
                    >
                    <option value="Space Contest"
                      >Space Photography (92 Contests)</option
                    >
                  </select>
                </fieldset>
              </div>
              <div class="col-lg-2">
                <fieldset>
                  <label for="chooseprice" class="form-label">Award Price</label>
                  <select
                    name="priceRange"
                    class="form-select"
                    aria-label="Default select example"
                    id="chooseCategory"
                  >
                    <option selected>Choose a price</option>
                    <option value="500">$500 to $1,000</option>
                    <option value="1500">$1,500 to $2,000</option>
                    <option value="2500">$2,500 to $3000</option>
                    <option value="3500+">$3,500+</option>
                  </select>
                </fieldset>
              </div>
              <div class="col-lg-2">
                <fieldset>
                  <button class="main-button">Search Now</button>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  
  <section class="photos-videos">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-heading text-center">
            <h6>Photos &amp; Videos At SnapX</h6>
            <h4>Our Featured <em>Photos &amp; Videos</em> At SnapX</h4>
          </div>
        </div>
        <div class={`grid gap-3 grid-cols-${mediaItems[0] && mediaItems[1] ? "2" : "3"}`}>
        {#each mediaItems as item}
          <div class="item">
            <div class="thumb">
              <img src={item.imageUrl.src} alt={item.title} class=" h-fit" />
              {#if item.isVideo}
                <div class="play-button">
                  <a href={item.videoUrl} target="_blank">
                    <i class="fa fa-play"></i>
                  </a>
                </div>
              {/if}
              <div class="top-content ">
                <h4>{item.title}</h4>
                <h6>
                  <i class="fa fa-eye"></i> {item.views} | <i class="fa fa-heart"></i> {item.likes}
                </h6>
              </div>
            </div>
            <div class="down-content">
              <div class="row">
                <div class="col-7">
                  <h2>Ranked: {item.rank}</h2>
                </div>
                <div class="col-5">
                  <h6>Category: {item.category}</h6>
                </div>
              </div>
            </div>
          </div>
          {/each}
        </div>
      </div>
    </div>
  </section>
  
  <section class="contest-win">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-heading text-center">
            <h6>Recently Added Contests by Users</h6>
            <h4>Current <em>Contests</em> to Enter Now &amp; <em>Win</em></h4>
          </div>
        </div>
  
        {#if filteredContests.length > 0}
          {#each filteredContests as item}
            <div class="col-lg-3">
              <div class="contest-item">
                <div class="top-content">
                  <span class="award">Award Price</span>
                  <span class="price">${item.contestAwardPrice}</span>
                </div>
  
                <!-- src={`${baseUrl}${contestant.mediaFile}`} -->
  
                <img alt="" src={contest_01} />
                <h4>{item.contestName}</h4>
                <div class="info">
                  <span class="participants"
                    ><img src={icon_03.src} alt="" /><br />80 Participants</span
                  >
                  <span class="submittions"
                    ><img src={icon_01.src} alt="" /><br />260 Submissions</span
                  >
                </div>
                <div
                  class="border-button"
               
                >
                  <a
                    href={`/singleContest/${item._id}`}
                    on:click={() => handleClick(item)}
                    >Browse {item.contestCategory}</a
                  >
                </div>
                <span class="info">* Client will pay via Online Payments</span>
              </div>
            </div>
          {/each}
        {:else}
          <div class="py-5 text-center">
            <h3>Not Found any Contest</h3>
          </div>
        {/if}
  
        <div class="col-lg-12">
          <ul class="pagination">
            <li>
              <a href="#" on:click={handleArrowLeftClick}
                ><i class="fa fa-arrow-left"></i>
              </a>
            </li>
            {#each Array.from({ length: Math.ceil(contest.length / contestsPerPage) }, (_, i) => i + 1) as pageNumber}
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
    button:focus,
    input:focus,
    select:focus {
      box-shadow: none;
    }
  </style>
  