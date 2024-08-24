<script>
    import axios from "axios";
  
    let contestName = "";
    let contestCategory = "Nature Contest";
    let mediaFile = "";
    let contestAwardPrice = "";
    let deadline = "";
    let contestDescription = "";
  
    function handleFileChange(event) {
      const files = event.target.files;
      if (files.length > 0) {
        mediaFile = files[0];
      }
    }
  
    const handleSubmit = async () => {
      try {
        const formData = new FormData();
        formData.append("contestName", contestName);
        formData.append("contestCategory", contestCategory);
        formData.append("image", mediaFile);
        formData.append("contestAwardPrice", contestAwardPrice);
        formData.append("deadline", deadline);
        formData.append("contestDescription", contestDescription);
  
        const response = await axios.post(
          `http://localhost:4747/api/contest/add-contest`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("contest added", response.data);
        clearForm();
        alert("Contest added successfully");
      } catch (err) {
        console.error(err);
      }
    };
    function clearForm() {
      contestName = "";
      deadline = "";
      mediaFile = "";
      contestDescription = "";
      contestAwardPrice = "";
    }
    let audioLibrary = [
    { name: "Audio 1", file: "audio1.mp3" },
    { name: "Audio 2", file: "audio2.mp3" },
    { name: "Audio 3", file: "audio3.mp3" },
  ];

  let currentAudio = audioLibrary[0].file;
  let audioElement;
  let isPlaying = false;

  function playAudio() {
    audioElement.play();
    isPlaying = true;
  }

  function pauseAudio() {
    audioElement.pause();
    isPlaying = false;
  }

  function stopAudio() {
    audioElement.pause();
    audioElement.currentTime = 0;
    isPlaying = false;
  }

  function changeAudio(event) {
    currentAudio = event.target.value;
    audioElement.load();
    playAudio();
  }
  </script>
  
  <div>
    <div class="container">
      <div class="p-3 w-75" style="margin: 0 auto;">
        <div class="mt-3 border shadow-sm p-3">
          <h4 class=" text-center mb-4">Add Contest</h4>
  
          <div class="w-75" style="margin: 0 auto;">
            <label for="">Contest Name</label>
            <input
              type="text"
              class="form-control mt-2 mb-3 bg-light"
              bind:value={contestName}
              placeholder="e.g. A day in the nature"
            />
            <label for="">Choose category</label>
            <select
              name=""
              id=""
              bind:value={contestCategory}
              class="form-control mt-1 mb-3"
            >
              <option value="Nature Contest">Nature Contest</option>
              <option value="Space Contest">Space Contest</option>
              <option value="Portrait Picture">Portrait Picture</option>
            </select>
            <label for="">Choose photo</label>
            <input
              type="file"
              name="file"
              id="file"
              bind:value={mediaFile}
              on:change={handleFileChange}
              class="form-control mb-3 mt-2 bg-light"
              accept="image/*"
            />
            <label for="">Award Price</label>
            <input
              type="text"
              class="form-control mt-2 mb-3"
              bind:value={contestAwardPrice}
              placeholder="e.g. 2000"
            />
            <label for="">Deadline</label>
            <input
              type="date"
              class="form-control mt-2 mb-3 bg-light"
              bind:value={deadline}
            />
  
            <label for="">Description</label>
            <textarea
              bind:value={contestDescription}
              class="form-control mt-2 mb-3"
              name=""
              id=""
              cols="30"
              rows="3"
            ></textarea>
  
            <div class="my-3 d-flex justify-content-end align-items-center">
              <button
                type="submit"
                on:click={handleSubmit}
                class="btn btn-sm border-line"
                style="font-size: 13px;">Submit</button
              >
            </div>
          </div>
        </div>
      </div>
      <div class="player-container">
        <h2>Custom Audio Player</h2>
        <audio bind:this={audioElement} controls loop>
          <source src={currentAudio} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      
        <div class="controls">
          <button on:click={playAudio} disabled={isPlaying}>Play</button>
          <button on:click={pauseAudio} disabled={!isPlaying}>Pause</button>
          <button on:click={stopAudio}>Stop</button>
        </div>
      
        <select on:change={changeAudio}>
          {#each audioLibrary as audio}
            <option value={audio.file}>{audio.name}</option>
          {/each}
        </select>
      </div>
    </div>
  </div>
  
  <style>
    input,
    select {
      font-size: 14px;
    }
    input:focus,
    button:focus,
    select:focus,
    textarea:focus {
      box-shadow: none;
    }
    .player-container {
    width: 300px;
    margin: auto;
    padding: 20px;
    text-align: center;
    background-color: #f3f3f3;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }



  button:disabled {
    background-color: #ccc;
  }

  </style>
  