<script>
  import featured_01 from "../../assets/images/featured-01.jpg";
  import featured_02 from "../../assets/images/featured-02.jpg";
  import featured_03 from "../../assets/images/featured-03.jpg";
  import icon_01 from "../../assets/images/icon-01.png";
  import icon_02 from "../../assets/images/icon-02.png";
  import icon_03 from "../../assets/images/icon-03.png";
  import icon_04 from "../../assets/images/icon-04.png";
  import closed_01 from "../../assets/images/closed-01.jpg";
  import closed_02 from "../../assets/images/closed-02.jpg";
  import closed_03 from "../../assets/images/closed-03.jpg";
  import author from "../../assets/images/author.jpg";
  import contest_01 from "../../assets/images/contest-01.jpg";
  import contest_02 from "../../assets/images/contest-02.jpg";
  import contest_03 from "../../assets/images/contest-03.jpg";
  import contest_04 from "../../assets/images/contest-04.jpg";

 

  // Data for top categories
  const topCategories = [
    { icon: icon_01, title: 'Nature Picture', count: 128 },
    { icon: icon_02, title: 'Space Contest', count: 224 },
    { icon: icon_03, title: 'Portrait Picture', count: 145 },
    { icon: icon_04, title: 'Nature Picture', count: 268 },
    { icon: icon_01, title: 'Space Picture', count: 310 }
  ];

  // Data for featured contests
  const featuredContests = [
    {
      image: featured_02,
      award: '$1,600',
      title: 'Walk In The Nature Night',
      participants: 60,
      submissions: 188,
      link: 'contest-details.html'
    },
    {
      image: featured_01,
      award: '$3,200',
      title: 'Walk In The Nature Night',
      participants: 78,
      submissions: 240,
      link: 'contest-details.html'
    },
    {
      image: featured_03,
      award: '$4,100',
      title: 'Walk In The Nature Night',
      participants: 112,
      submissions: 286,
      link: 'contest-details.html'
    }
    
  ];



  // Data for testimonials
  const testimonials = [
    {
      text: "“SnapX Photography is a professional website template for photo and video related businesses. This Bootstrap v5.1.3 HTML CSS template is provided by TemplateMo website.”",
      name: 'Thomas Wilson',
      userId: '#007704',
      image: author
    },
    {
      text: "“If you need a working contact form, please visit TemplateMo contact page for more information. You can easily buy and use a simple PHP contact form.”",
      name: 'Vincent Anthon',
      userId: '#007794',
      image: author
    }
  ];

  // Data for client logos
  const clientLogos = [
    contest_01,
    contest_02,
    contest_03,
    contest_04,
    contest_01,
    contest_02
  ];


  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import "@splidejs/splide/dist/css/splide.min.css";
</script>




  <!-- page banner -->
  <div class="page-heading">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2 header-text">
          <h2>Discover Most Popular Categories on <em>SnapX</em></h2>
          <p>
            You are allowed to freely use SnapX Photography Template for your
            commercial websites. You are not allowed to redistribute the template
            ZIP file on any other Free CSS websites.
          </p>
        </div>
      </div>
    </div>
  </div>
  
  <!-- top categories -->
  <div class="top-categories">
    <div class="container">
      <div class="row">
        {#each topCategories as { icon, title, count }}
          <div class="col-lg col-sm-4">
            <div class="item">
              <div class="icon p-3">
                <img src={icon.src} alt="" class=""/>
              </div>
              <h4>{title}</h4>
              <span>Available Contests</span>
              <span class="counter">{count}</span>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
  
  <!-- featured contests -->
  <section class="featured-contests">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-heading text-center">
            <h6>Featured Contests</h6>
            <h4>View Most <em>Popular</em> Category <em>Contests</em></h4>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 ">
        {#each featuredContests as { image, award, title, participants, submissions, link }}
            <div class="item">
              <div class="thumb">
                <img src={image.src} alt="" class="max-h-[60vh] object-cover object-center" loading="lazy" />
                <div class="hover-effect">
                  <div class="content">
                    <div class="top-content">
                      <span class="award">Award Price</span>
                      <span class="price">{award}</span>
                    </div>
                    <h4>{title}</h4>
                    <div class="info">
                      <span class="participants"
                        ><img src={icon_03.src} alt="" /><br />{participants}<br />Participants</span
                      >
                      <span class="submittions"
                        ><img src={icon_01.src} alt="" /><br />{submissions}<br />Submissions</span
                      >
                    </div>
                    <div class="border-button">
                      <a href={link}>Browse Nature Contests</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/each}
        </div>
      </div>
    </div>
  </section>
  
  <!-- testimonials -->
  <section class="testimonials">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-heading text-center">
            <h6>What Clients Say</h6>
            <h4>What <em>Website</em> Users Are Saying <em>Topics</em></h4>
          </div>
        </div>
        <div class="col-lg-8 offset-lg-2">
          <div class="slider-wrapper owl-testimonials owl-carousel">
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
                    perPage: 1,
                  },
                  768: {
                    perPage: 1,
                  },
                  500: {
                    perPage: 1,
                  },
                },
                gap: "1rem",
              }}
              aria-label="Testimonials"
            >
              {#each testimonials as { text, name, userId, image }}
                <SplideSlide>
                  <div class="item">
                    <div class="content">
                      <div class="left-content">
                        <p>{text}</p>
                        <h4>{name}</h4>
                        <span>{userId}</span>
                      </div>
                      <div class="right-image">
                        <img src={image.src} alt="" />
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              {/each}
            </Splide>
          </div>
        </div>
      </div>
    </div>
  </section>
  

  <!-- clients section -->
  <section class="clients">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-heading text-center">
            <h6>Our Clients</h6>
            <h4>Trusted By <em>Big</em> Companies <em>Worldwide</em></h4>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="flex mb-5 gap-2">
            {#each clientLogos as logo}
              <div class="item ">
                <img src={logo.src} alt="Client Logo" class="w-fit h-fit rounded-lg"/>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </section>
  

  <style>
      .col-lg {
    flex: 0 0 auto !important;
    width: 19.333333% !important;
  }
  @media screen and (max-width: 600px) {
    .col-lg {
      flex: 0 0 auto !important;
      width: 49.333333% !important;
    }
  }
  </style>