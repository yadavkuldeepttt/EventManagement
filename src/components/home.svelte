<script>
  import featured_01 from "../assets/images/featured-01.jpg";
  import featured_02 from "../assets/images/featured-02.jpg";
  import featured_03 from "../assets/images/featured-03.jpg";
  import icon_01 from "../assets/images/icon-01.png";
  import icon_02 from "../assets/images/icon-02.png";
  import icon_03 from "../assets/images/icon-03.png";
  import icon_04 from "../assets/images/icon-04.png";
  import popular_01 from "../assets/images/popular-01.png";
  import popular_02 from "../assets/images/popular-02.png";
  import popular_03 from "../assets/images/popular-03.png";
  import popular_04 from "../assets/images/popular-04.png";
  import closed_01 from "../assets/images/closed-01.jpg";
  import closed_02 from "../assets/images/closed-02.jpg";
  import closed_03 from "../assets/images/closed-03.jpg";
  import pricing_01 from "../assets/images/pricing-01.jpg";
  import pricing_02 from "../assets/images/pricing-02.jpg";
  import pricing_03 from "../assets/images/pricing-03.jpg";

  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import "@splidejs/splide/dist/css/splide.min.css";

  // slider on banner items
  const carouselItems = [
    {
      imgSrc: popular_01.src,
      altText: "Burger",
      title: "Walk In The Nature",
      rating: 4.5,
      contestWinner: "Vincent Adam",
      contestAuthor: "Anthony Soft",
      awards: "$1,000 + Camera Nikon",
    },
    {
      imgSrc: popular_02.src,
      altText: "Burger",
      title: "Walk In The Nature",
      rating: 4.5,
      contestWinner: "Vincent Adam",
      contestAuthor: "Anthony Soft",
      awards: "$1,000 + Camera Nikon",
    },
    {
      imgSrc: popular_03.src,
      altText: "Burger",
      title: "Walk In The Nature",
      rating: 4.5,
      contestWinner: "Vincent Adam",
      contestAuthor: "Anthony Soft",
      awards: "$1,000 + Camera Nikon",
    },
    {
      imgSrc: popular_04.src,
      altText: "Burger",
      title: "Walk In The Nature",
      rating: 4.5,
      contestWinner: "Vincent Adam",
      contestAuthor: "Anthony Soft",
      awards: "$1,000 + Camera Nikon",
    },
  ];
  // popular categories items
  const popularCategories = [
    {
      icon: icon_01.src,
      title: "Nature Pic Contest",
      availableContests: 126,
      image: popular_01.src,
      category: "Top Contest",
      likes: 256,
      link: "contest-details.html",
    },
    {
      icon: icon_02.src,
      title: "Random Pic Contest",
      availableContests: 116,
      image: popular_02.src,
      category: "Top Contest",
      likes: 256,
      link: "contest-details.html",
    },
    {
      icon: icon_03.src,
      title: "Portrait Pic Contest",
      availableContests: 164,
      image: popular_03.src,
      category: "Top Contest",
      likes: 256,
      link: "contest-details.html",
    },
    {
      icon: icon_04.src,
      title: "Space Pic Contest",
      availableContests: 135,
      image: popular_04.src,
      category: "Top Contest",
      likes: 256,
      link: "contest-details.html",
    },
  ];

  //closed contests list
  const closedContests = [
    {
      id: 1,
      image: closed_01.src,
      participants: 96,
      pictures: 410,
    },
    {
      id: 2,
      image: closed_02.src,
      participants: 96,
      pictures: 410,
    },
    {
      id: 3,
      image: closed_03.src,
      participants: 96,
      pictures: 410,
    },
  ];
</script>

<!-- ***** Main Banner Area Start ***** -->
<div class="main-banner">
  <div class="container">
    <div class="row">
      <div class="col-lg-10 offset-lg-1">
        <div class="header-text">
          <h2>
            Enter a world of <em>Photos</em> &amp; Amazing <em>Awards</em>
          </h2>
          <p>
            SnapX Photography is a professional website template with 5
            different HTML pages for maximum customizations. It is free for
            commercial usage. This Bootstrap v5.1.3 CSS layout is provided by
            TemplateMo Free CSS Templates.
          </p>
          <div class="buttons">
            <div class="big-border-button">
              <a href="contests.html">Explore SnapX Contest</a>
            </div>
            <div class="icon-button">
              <a href="https://youtube.com/templatemo" target="_blank"
                ><i class="fa fa-play"></i> Watch Our Video Now</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- ***** Main Banner Area End ***** -->

<!-- slider on banner -->
<div class="slider-wrapper">
  <Splide
    class="splide"
    options={{
      rewind: true,
      AutoScroll: {
        speed: 5,
      },
      autoplay: true,
      width: 900,
      type: "loop",
      breakpoints: {
        1500: {
          perPage: 3,
        },
        768: {
          perPage: 2,
        },
        500: {
          perPage: 1,
        },
      },
      gap: "1rem",
    }}
    aria-label="My Favorite Images"
  >
    {#each carouselItems as item}
      <SplideSlide>
        <div class="hover-content-box">
          <div class="thumb">
            <img src={item.imgSrc} alt="Image 1" />
            <div class="hover-effect">
              <div class="content">
                <h4>
                  {item.title} <i class="fa fa-star"></i><i class="fa fa-star"
                  ></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
                  <span>({item.rating})</span>
                </h4>
                <ul>
                  <li><span>Contest Winner:</span>{item.contestWinner}</li>
                  <li><span>Contest Author:</span>{item.contestAuthor}</li>
                  <li><span>Awards:</span>{item.awards}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SplideSlide>
    {/each}
  </Splide>
</div>

<!-- popular categories -->
<section class="popular-categories">
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-6">
        <div class="section-heading">
          <h6>Our Categories</h6>
          <h4>Check Out <em>Popular</em> Contest <em>Categories</em></h4>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="main-button">
          <a href="categories.html">Discover All Categories</a>
        </div>
      </div>
      {#each popularCategories as category}
        <div class="col-lg-3 col-sm-6">
          <div class="popular-item">
            <div class="top-content">
              <div class="icon">
                <img src={category.icon} alt="{category.title} Icon" />
              </div>
              <div class="right">
                <h4>{category.title}</h4>
                <span
                  ><em>{category.availableContests}</em> Available Contests</span
                >
              </div>
            </div>
            <div class="thumb">
              <img src={category.image} alt="{category.title} Image" />
              <span class="category">{category.category}</span>
              <span class="likes"
                ><i class="fa fa-heart"></i> {category.likes}</span
              >
            </div>
            <div class="border-button">
              <a href={category.link}>Browse {category.title}</a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- closed contests -->
<section class="closed-contest">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="section-heading text-center">
          <h6>Closed Photography Contests</h6>
          <h4><em>Previous Contests</em> With Handpicked <em>Winners</em></h4>
        </div>
      </div>
      <div class="col-lg-12">
        <div class="slider-wrapper-closed mt-2">
          <Splide
            class="splide"
            options={{
              rewind: true,
              AutoScroll: {
                speed: 3,
              },
              autoplay: true,
              width: 1000,
              type: "loop",
              breakpoints: {
                1500: {
                  perPage: 3,
                },
                768: {
                  perPage: 2,
                },
                500: {
                  perPage: 1,
                },
              },
              gap: "1rem",
            }}
            aria-label="My Favorite Images"
          >
            {#each closedContests as contest (contest.id)}
              <SplideSlide>
                <img
                  src={contest.image}
                  alt={`Image ${contest.id}`}
                  class="img-fit"
                />
                <div class="down-content">
                  <div class="row">
                    <div class="col-7">
                      <h4>
                        {contest.participants} Participants <br />
                        <span>Number Of Artists</span>
                      </h4>
                    </div>
                    <div class="col-5">
                      <h4 class="pics">
                        {contest.pictures} Pictures <br />
                        <span>Submitted Pics</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            {/each}
          </Splide>
        </div>

        <div class="col-lg-12 mt-4">
          <div class="border-button text-center">
            <a href="contests.html">Browse Open Contests</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- pricing plan -->
<section class="pricing-plans">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="section-heading text-center">
          <h6>Our Pricing</h6>
          <h4>Photography <em>Contest Plans</em> and Price <em>Awards</em></h4>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="pricing-item">
          <img src={pricing_01} alt="" />
          <h4>Basic Plan</h4>
          <ul class="first-plan">
            <li>Lorem Ipsum Dolores Sonte</li>
            <li>Songe Lorem Ipsum Dol</li>
            <li>Matrios Venga Heptuss</li>
            <li>Denim Sriracha Kogi</li>
            <li>Digital Photography Awards</li>
          </ul>
          <span class="price">$25 USD</span>
          <div class="border-button">
            <a href="#">Choose This Plan</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="pricing-item">
          <img src={pricing_02} alt="" />
          <h4>Standard Plan</h4>
          <ul class="second-plan">
            <li>Lorem Ipsum Dolores Sonte</li>
            <li>Songe Lorem Ipsum Dol</li>
            <li>Matrios Venga Heptuss</li>
            <li>Denim Sriracha Kogi</li>
            <li>Digital Photography Awards</li>
          </ul>
          <span class="price">$45 USD</span>
          <div class="border-button">
            <a href="#">Choose This Plan</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="pricing-item">
          <img src={pricing_03} alt="" />
          <h4>Advanced Plan</h4>
          <ul class="third-plan">
            <li>Lorem Ipsum Dolores Sonte</li>
            <li>Songe Lorem Ipsum Dol</li>
            <li>Matrios Venga Heptuss</li>
            <li>Denim Sriracha Kogi</li>
            <li>Digital Photography Awards</li>
          </ul>
          <span class="price">$85 USD</span>
          <div class="border-button">
            <a href="#">Choose This Plan</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .slider-wrapper {
    display: flex;
    justify-content: center;
    margin-top: -5rem;
    transition: all 0.5s ease-in-out;
  }
  .slider-wrapper img {
    border-radius: 18px;
    cursor: pointer;
  }
  .slider-wrapper-closed {
    display: flex;
    justify-content: center;
  }
  .slider-wrapper-closed img {
    border-radius: 18px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .slider-wrapper .hover-content-box .thumb {
    position: relative;
  }

  .slider-wrapper .hover-content-box .thumb img {
    border-radius: 15px;
  }

  .slider-wrapper .hover-content-box .thumb:hover .hover-effect {
    top: 0;
    opacity: 1;
    cursor: pointer;
  }

  .slider-wrapper .hover-content-box .thumb .hover-effect {
    background-color: rgba(250, 250, 250, 0.92);
    left: 0;
    top: 100%;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    position: absolute;
    opacity: 0;
    transition: all 0.3s;
  }

  .slider-wrapper .hover-content-box .thumb .hover-effect .content {
    text-align: center;
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    padding: 0px 15px;
  }

  .slider-wrapper .hover-content-box .thumb .hover-effect .content h4 {
    font-size: 18px;
    color: #00bdfe;
    margin-bottom: 22px;
  }

  .slider-wrapper .hover-content-box .thumb .hover-effect .content h4 i {
    font-size: 13px;
    margin-left: 5px;
    font-weight: 600;
  }

  .slider-wrapper .hover-content-box .thumb .hover-effect .content h4 span {
    font-size: 13px;
    font-weight: 500;
    color: #afafaf;
  }

  .slider-wrapper .hover-content-box .thumb .hover-effect .content ul li {
    font-size: 14px;
    font-weight: 400;
    color: #afafaf;
    margin-bottom: 7px;
  }

  .slider-wrapper
    .hover-content-box
    .thumb
    .hover-effect
    .content
    ul
    li:last-child {
    margin-bottom: 0px;
  }

  .slider-wrapper .hover-content-box .thumb .hover-effect .content ul li span {
    color: #2a2a2a;
    font-weight: 500;
  }
</style>
