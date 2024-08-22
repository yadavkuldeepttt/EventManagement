<script>
    import { onMount } from "svelte";
    import { events } from "../../apiData/event";
  
    let isDropdownVisible1 = false;
    let isDropdownVisible2 = false;
    let isDropdownVisible3 = false;
    let isDropdownVisible4 = false;
  
    const handleDropdown1 = () => {
      isDropdownVisible1 = !isDropdownVisible1;
    };
    const handleDropdown2 = () => {
      isDropdownVisible2 = !isDropdownVisible2;
    };
    const handleDropdown3 = () => {
      isDropdownVisible3 = !isDropdownVisible3;
    };
    const handleDropdown4 = () => {
      isDropdownVisible4 = !isDropdownVisible4;
    };
  
    onMount(() => {
      isDropdownVisible1 = true;
    });
  
    let selectedDateFilter = null;
    let filteredEvents = [];
  
    function handleDateFilter(filter) {
      selectedDateFilter = filter;
      filterEvents();
    }
  
    function filterEvents() {
      if (selectedDateFilter) {
        filteredEvents = events.filter(
          (event) => event.objDetails.date === selectedDateFilter
        );
      } else {
        filteredEvents = events;
      }
    }
    function initializeEvents() {
      filterEvents();
    }
    function showAllEvents() {
      selectedDateFilter = null;
      filterEvents();
    }
  
    onMount(() => {
      initializeEvents();
    });
  </script>
  
  <!-- page heading events -->
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
  
  <!-- search form -->
  <div class="search-form bg-gray-50">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <form
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
  
  <!-- event schedule sec start -->
  
  <div class="event-schedule-sec bg-gray-50 ">
    <div class="container-fluid">
      <div class="flex py-5 px-3 flex-row eventsResponsive">
        <div class="w-[60vw] filtersSection max-w-screen">
          <div class="filter_heading" style="font-weight: bold;font-size:1.3rem">
            Filters
          </div>
          <div
            class="filter_time_box filter_box px-3 bg-white mb-2 mt-4"
            style="width:76%"
          >
            <div class="d-flex justify-content-between p-2">
              <div
                class="d-flex align-items-center over"
                on:click={handleDropdown1}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 15 10"
                  height="12"
                  width="12"
                  ><path
                    fill="none"
                    stroke="#666666"
                    stroke-width="1.5"
                    d="M335 3L342 9.5 335 16"
                    transform="matrix(0 -1 -1 0 17 344)"
                  /></svg
                >
                <div class="text-danger px-2" style="font-size: 0.8rem;">
                  Date
                </div>
              </div>
              <div style="font-size: 0.8rem;">Clear</div>
            </div>
  
            {#if isDropdownVisible1}
              <div class="filter_dropdown">
                <div class="filter_buttons" style="font-size: 13px;">
                  <button
                    type="button"
                    class="btn btn-outline-danger m-2"
                    on:click={showAllEvents}>All</button
                  >
  
                  <button
                    type="button"
                    class="btn btn-outline-danger m-2"
                    on:click={() => handleDateFilter("Thu, 23 Oct")}>Today</button
                  >
                  <button
                    type="button"
                    class="btn btn-outline-danger"
                    on:click={() => handleDateFilter("Fri, 24 Oct")}
                    >Tomorrow</button
                  >
                  <button
                    type="button"
                    class="btn btn-outline-danger m-2"
                    on:click={() => handleDateFilter("Sun, 26 Oct")}
                    >This Weekened</button
                  >
                </div>
                <div class="date_filter p-1" style="margin:0.2rem 0.4rem">
                  <label for="" style="font-size: 15px;">Date:</label>
                  <input
                    type="date"
                    class="text-secondary m-2"
                    style="border:1px solid lightgrey;"
                  />&nbsp;
                </div>
              </div>
            {/if}
          </div>
  
          <div class="filter_time_box filter_box px-3 bg-white" style="width:76%">
            <div class="d-flex justify-content-between p-2">
              <div
                class="d-flex align-items-center over"
                on:click={handleDropdown2}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 15 10"
                  height="12"
                  width="12"
                  ><path
                    fill="none"
                    stroke="#666666"
                    stroke-width="1.5"
                    d="M335 3L342 9.5 335 16"
                    transform="matrix(0 -1 -1 0 17 344)"
                  /></svg
                >
                <div class="px-2" style="font-size: 0.8rem;">Languages</div>
              </div>
              <div style="font-size: 0.8rem;">Clear</div>
            </div>
  
            {#if isDropdownVisible2}
              <div class="filter_dropdown">
                <div class="filter_buttons" style="font-size: 13px;">
                  <button type="button" class="btn btn-outline-danger m-2"
                    >English</button
                  >
                  <button type="button" class="btn btn-outline-danger"
                    >Hindi</button
                  > 
                </div>
              </div>
            {/if}
          </div>
  
          <div
            class="filter_time_box filter_box px-3 bg-white mt-2"
            style="width:76%"
          >
            <div class="d-flex justify-content-between p-2">
              <div
                class="d-flex align-items-center over"
                on:click={handleDropdown3}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 15 10"
                  height="12"
                  width="12"
                  ><path
                    fill="none"
                    stroke="#666666"
                    stroke-width="1.5"
                    d="M335 3L342 9.5 335 16"
                    transform="matrix(0 -1 -1 0 17 344)"
                  /></svg
                >
                <div class="px-2" style="font-size: 0.8rem;">Price</div>
              </div>
              <div style="font-size: 0.8rem;">Clear</div>
            </div>
            {#if isDropdownVisible3}
              <div class="filter_dropdown">
                <div class="filter_buttons" style="font-size: 13px;">
                  <button type="button" class="btn btn-outline-danger m-2"
                    >Free</button
                  >
                  <button type="button" class="btn btn-outline-danger"
                    >0-500</button
                  >
                  <button type="button" class="btn btn-outline-danger m-2"
                    >501-2000</button
                  > 
                </div>
              </div>
            {/if}
          </div>
  
          <div
            class="filter_time_box filter_box px-3 bg-white mt-2"
            style="width:76%"
          >
            <div class="d-flex justify-content-between p-2">
              <div class="d-flex align-items-center" on:click={handleDropdown4}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 15 10"
                  height="12"
                  width="12"
                  ><path
                    fill="none"
                    stroke="#666666"
                    stroke-width="1.5"
                    d="M335 3L342 9.5 335 16"
                    transform="matrix(0 -1 -1 0 17 344)"
                  /></svg
                >
                <div class="px-2" style="font-size: 0.8rem;">Other Filters</div>
              </div>
              <div style="font-size: 0.8rem;">Clear</div>
            </div>
  
            {#if isDropdownVisible4}
              <div class="filter_dropdown">
                <div class="filter_buttons" style="font-size: 13px;">
                  <button type="button" class="btn btn-outline-danger m-2"
                    >Online Events</button
                  > 
                  <button type="button" class="btn btn-outline-danger m-2"
                    >Outdoor Events</button
                  >
                </div>
              </div>
            {/if}
          </div>
        </div>
  
        <div class="eventsSection">
          <div class="events" style="font-weight: bold;font-size:1.3rem">
            Events
          </div>
          <div class=" mt-4">
            <div class="flex flex-wrap gap-3">
              {#if selectedDateFilter}
                {#each filteredEvents as event}
                  <div class="">
                  <a href={`/events/details/${event.id}`} class="w-[22vw]">
                    <div class="single-speaker-wrap">
                      <div class="imgs">
                          <img src={event.objDetails.image} alt="">
                          <ul>
                              <li class="p-m"><i class="fa-solid fa-plus"></i></li>
                              <li>
                                  <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                              </li>
                              <li>
                                  <a href="#"><i class="fa-brands fa-twitter"></i></a>
                              </li>
                              <li>
                                  <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                              </li>
                          </ul>
                      </div>
                      <div class="cont bg-gray-50 p-2.5 ">
                       <div class="flex items-center justify-between">
                         <div class="text-xs tracking-[0.06rem] ">
                           {event.objDetails.date}
                          </div>
                          <span class=" text-secondary text-sm tracking-[0.06rem]"
                          >{event.objDetails.price}</span
                          >
                        </div>
                        <h5 class=" my-2 tracking-[0.05rem] text-sm text-gray-600" style="font-weight: 600;" >
                          {event.objDetails.name}
                        </h5>
                        <div class="flex items-center justify-between">

                          <span class="text-primary text-xs  tracking-[0.06rem]"
                          >{event.objDetails.location}</span
                          ><br />
                          <span class="text-secondary  text-xs tracking-[0.06rem]"
                          >{event.objDetails.type}</span
                          >                        </div>
                    
                      </div>
                  </div>
                </a>
                  </div>
                {/each}
              {:else} 
                {#each events as event}
                  <div class="event" data-testid="eventList">
                    <a href={`/events/details/${event.id}`} class="w-[22vw]">
                    <div class="single-speaker-wrap">
                      <div class="imgs">
                          <img src={event.objDetails.image} alt="">
                          <ul>
                              <li class="p-m"><i class="fa-solid fa-plus"></i></li>
                              <li>
                                  <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                              </li>
                              <li>
                                  <a href="#"><i class="fa-brands fa-twitter"></i></a>
                              </li>
                              <li>
                                  <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                              </li>
                          </ul>
                      </div>
                      <div class="cont bg-gray-50 p-2.5 ">
                       <div class="flex items-center justify-between">
                         <div class="text-xs tracking-[0.06rem] ">
                           {event.objDetails.date}
                          </div>
                          <span class=" text-secondary text-sm tracking-[0.06rem]"
                          >{event.objDetails.price}</span
                          >
                        </div>
                        <h5 class=" my-2 tracking-[0.05rem] text-sm text-gray-600" style="font-weight: 600;" >
                          {event.objDetails.name}
                        </h5>
                        <div class="flex items-center justify-between">

                          <span class="text-primary text-xs  tracking-[0.06rem]"
                          >{event.objDetails.location}</span
                          ><br />
                          <span class="text-secondary  text-xs tracking-[0.06rem]"
                          >{event.objDetails.type}</span
                          >                        </div>
                    
                      </div>
                  </div><!--/.single-speaker-wrap-->
                  </a>
                  </div>
                {/each}
              {/if} 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <style>
    
@media screen and (max-width : 600px){
  .eventsResponsive{
    flex-direction: column!important;
    gap: 2rem;
  }
  .eventsResponsive .filtersSection,.eventsResponsive .eventsSection{
    width: 100vw!important;
  }
  .eventsResponsive .eventsSection .event a{
    width: 80vw;
  }
}

.single-speaker-wrap .imgs{
  position: relative;
  z-index: 1;
  padding-top: 450px;
  border: 4px solid #fff;
  filter: drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.11));
  border-radius: 30px;
  overflow: hidden;
}
.single-speaker-wrap img{
  display: block;

  width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  object-fit: cover;
  object-position: top;
}

.single-speaker-wrap .imgs ul {
  position: absolute;
  right: 20px;
  top: 20px;
  width: auto;
  background: transparent;
  border-radius:  0px;
  padding: 0;
  text-align: right;
  -webkit-transition: 0.2s all ease;
  transition: 0.2s all ease;
  text-align: right;
}
.single-speaker-wrap:hover .imgs ul {
  min-width: 42px;
}


.single-speaker-wrap:hover .imgs ul li.p-m .fa-plus:before{
  content: "\f068";
}
.single-speaker-wrap .imgs ul li.p-m {
  width: 35px;
  height: 35px;
  background: #fff;
  text-align: center;
  color: #00bdfe;
  border-radius: 50%;
  line-height: 40px;
  font-size: 17px;
  opacity: 0.9;
  cursor: pointer;
}
.single-speaker-wrap .imgs ul li a {
  display: inline-block;
  width: 35px;
  height: 35px;
  background: #fff;
  text-align: center;
  border-radius: 50%;
  line-height: 40px;
  font-size: 17px;
  color: #00bdfe;
}
.single-speaker-wrap .imgs ul li:not(.p-m){
  position: absolute;
  -webkit-transition: 0.5s all ease-in-out;
  transition: 0.5s all ease-in-out;
  top: 0;
  opacity: 0;
}
.single-speaker-wrap:hover .imgs ul li:nth-child(2){
  opacity: 1;
  -webkit-transition: 0.3s all ease-in-out;
  transition: 0.3s all ease-in-out;
  top: 55px;
}
.single-speaker-wrap:hover .imgs ul li:nth-child(3){
  top: 110px;
  opacity: 1;
  -webkit-transition: 0.5s all ease-in-out;
  transition: 0.5s all ease-in-out;
}
.single-speaker-wrap:hover .imgs ul li:nth-child(4){
  top: 165px;
  opacity: 1;
  -webkit-transition: 0.8s all ease-in-out;
  transition: 0.8s all ease-in-out;
}
.single-speaker-wrap .cont {
  border-radius: 20px;
  border: 1px solid #fff;
  backdrop-filter: blur(6px);
  mix-blend-mode: normal;
  position: absolute;
  bottom: 20px;
  z-index: 1;
  width: 88%;
  left: 6%;
}
.single-speaker-wrap {
  position: relative;
  z-index: 1;
}
.single-speaker-wrap .cont h4{
  color: var(--clr-common-white);
}
.single-speaker-wrap .cont p{
  color: var(--clr-common-white);
  margin-top: 17px;
}
@media (max-width:767px){
  .single-speaker-wrap .imgs{
    padding-top: 350px;
  }
}

    .event-schedule-sec.light {
      background: #f4f5f7;
    }
  
    .btn {
      padding: 0.3rem 0.5rem;
      font-size: 15px;
      border: 1px solid lightgray;
    }
    .single-speaker-wrap img {
      border-top-right-radius: 13px;
      border-top-left-radius: 13px;
    }
    a {
      display: inline-block;
    }
  
    .single-speaker-wrap .imgs {
      border: 3px solid #fff;
      border-radius: 13px;
    }
    .single-speaker-wrap .imgs .single_speaker_date {
      background-color: #333;
      color: #fff;
      font-size: 15px;
      border-bottom-left-radius: 11px;
      border-bottom-right-radius: 11px;
      cursor: pointer;
    }
    .filter_box .over {
      cursor: pointer;
    }
  </style>
  