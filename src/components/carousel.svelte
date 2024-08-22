<script>
    export let items = [];
    let currentIndex = 0;
  
    const visibleSlides = 3;
  
    function nextSlide() {
      if (currentIndex < items.length - visibleSlides) {
        currentIndex++;
      }
    }
  
    function prevSlide() {
      if (currentIndex > 0) {
        currentIndex--;
      }
    }
  </script>
  
  <!-- <div class="slider-wrapper"> -->
    <div class="carousel-container relative overflow-hidden">
      <button class="prev-button absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2" on:click={prevSlide}>‹</button>
  
      <div
        class="carousel flex transition-transform duration-300 w-full"
        style="transform: translateX(-{currentIndex * (100 / visibleSlides)}%);"
      >
        {#each items as item (item.id)}
          <div class="p-2">
            <div class="hover-content-box">
              <div class="thumb">
                <img src={item.imgSrc} alt={item.altText} />
                <div class="hover-effect">
                  <div class="content">
                    <h4>
                      {item.title}
                      <i class="fa fa-star"></i><i class="fa fa-star"></i>
                      <i class="fa fa-star"></i><i class="fa fa-star"></i>
                      <span>({item.rating})</span>
                    </h4>
                    <ul>
                      <li><span>Contest Winner:</span> {item.contestWinner}</li>
                      <li><span>Contest Author:</span> {item.contestAuthor}</li>
                      <li><span>Awards:</span> {item.awards}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
  
      <button class="next-button absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2" on:click={nextSlide}>›</button>
    </div>
  <!-- </div> -->
  
  <style>
    .carousel-container {
      width:70vw;
      max-width: 1200px;
      margin: auto;
    }

    .prev-button,
    .next-button {
      z-index: 10;
    }

  
    .thumb img {
      width: 100%;
      height: auto;
      transition: transform 0.3s ease-in-out;
    }
  
    .hover-effect {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: none;
      align-items: center;
      justify-content: center;
      color: white;
      padding: 10px;
      text-align: center;
    }
  
    .thumb:hover img {
      transform: scale(1.1);
    }
  
    .thumb:hover .hover-effect {
      display: flex;
    }
  </style>
  