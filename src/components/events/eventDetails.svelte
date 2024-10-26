<script>
  import { onDestroy, onMount } from "svelte";

  // import { experiences } from "./../../../apiData/experiences";
  // import GoogleSignIn from "./googleSignIn.svelte";
  export let eventDetail;

  let selectedTransportComingName = {};
  let selectedTransportReturnName = {};
  let totalAmountOfUsers = 0;

  let transportComing = [];
  let transportReturn = [];

  // user details
  let userDetails = [
    {
      id: 1,
      objDetails: {
        name: "",
        bookId: "",
        receiptId: "",
        transportComingName: "",
        transportReturnName: "",
        mobile: "",
        pincode: "",
        gender: "male",
        age: "",
        startDate: "",
        endDate: "",
        days: null,
        amount: "",
        aadhar: "",
        delete: null,
        isMaster: false,
      },
      hasError: false,
    },
  ];

  // transport details
  let transportDetails = [
    {
      id: 1,
      objDetails: {
        name: "",
        mode: "bus",
        fromDate: "2024-06-05",
        toDate: "2024-06-15",
        fromTime: "09:00",
        toTime: "20:00",
        boardingLocation: "New Delhi Railway Station",
        boardingTime: "08:30",
        destinationLocation: "Mumbai",
        destinationTime: "21:00",
        needPickup: false,
        totalPerson: "",
        comment: "",
      },
      hasError: false,
    },
  ];

  // payment history
  let paymentHistory = [
    {
      id: 1,
      objDetails: {
        paymentId: "843nn03",
        txId: "4o95edndsnd",
      },
      participants: [
        {
          id: 1,
          objDetails: {
            name: "", // Personal details and transport details
          },
          participantsName: [], // List of participant names
        },
      ],
    },
  ];

  // error messages
  let errorMessages = {
    1: {
      name: false,
      transportComingName: false,
      transportReturnName: false,
      mobile: false,
      pincode: false,
      gender: false,
      age: false,
      startDate: false,
      days: false,
      aadhar: false,
    },
    // Add more rows as needed
  };

  // error messages transport
  let errorMessagesTransport = {
    1: {
      transportName: false,
      mode: false,
      fromDate: false,
      toDate: false,
      boardingLocation: false,
      boardingTime: false,
      destinationLocation: false,
      destinationTime: false,
      totalPerson: false,
      comment: false,
    },
  };

  // add participant names
  function addParticipantNames() {
    userDetails.forEach((user) => {
      // Find the matching payment history participant by ID
      paymentHistory.forEach((payment) => {
        payment.participants.forEach((participant) => {
          if (participant.id === user.id) {
            // Add the user's name to the participantsName array if not already present
            if (!participant.participantsName.includes(user.objDetails.name)) {
              participant.participantsName.push(user.objDetails.name);
            }
          }
        });
      });
    });

    // Trigger reactivity
    paymentHistory = [...paymentHistory];
    console.log(paymentHistory, "payment history");
  }

  let x = eventDetail.transportDetails[0].map[0].latitude;
  let y = eventDetail.transportDetails[0].map[0].longitude;

  // for changing the view mobile or desktop
  let selectedOption = "Desktop View";
  let filteredUser = [...userDetails];

  function handleOptionChange(event) {
    selectedOption = event.target.value;
  }

  // add use details row
  function addUserDetailsRow() {
    const newId = userDetails.length + 1;
    userDetails = [
      ...userDetails,
      {
        id: newId,
        objDetails: {
          name: "",
          bookId: "",
          receiptId: "",
          transportComingName: "",
          transportReturnName: "",
          mobile: "",
          pincode: "",
          gender: "male",
          age: "",
          startDate: "",
          endDate: "",
          days: null,
          amount: "",
          aadhar: "",
          delete: null,
          isMaster: false,
        },
        hasError: false,
      },
    ];

    // Add new row to errorMessages
    errorMessages[newId] = {
      name: false,
      transportComingName: false,
      transportReturnName: false,
      mobile: false,
      pincode: false,
      gender: false,
      age: false,
      startDate: false,
      days: false,
      aadhar: false,
    };

    errorMessages = { ...errorMessages };
    userDetails = [...userDetails];
    filteredUser = [...userDetails];
    console.log(filteredUser, "filteredUser");
  }

  // add transport details new row
  function addTransportDetailsRow() {
    let newId = transportDetails.length + 1;
    transportDetails = [
      ...transportDetails,
      {
        id: newId,
        objDetails: {
          name: "",
          mode: "bus",
          fromDate: "2024-06-05",
          toDate: "2024-06-15",
          fromTime: "09:00",
          toTime: "20:00",
          boardingLocation: "New Delhi Railway Station",
          boardingTime: "08:30",
          destinationLocation: "Mumbai",
          destinationTime: "21:00",
          needPickup: false,
          comment: "",
        },
        hasError: false,
      },
    ];
    errorMessagesTransport[newId] = {
      transportName: true,
      mode: false,
      fromDate: false,
      toDate: false,
      boardingLocation: false,
      boardingTime: false,
      destinationLocation: false,
      destinationTime: false,
      totalPerson: false,
      comment: false,
    };
    errorMessagesTransport = { ...errorMessagesTransport };
  }

  // delete user rows
  function deleteRowUserDetails(id) {
    filteredUser = filteredUser.filter((row) => row.id !== id);
    filteredUser = [...filteredUser];
  }

  // delete transport row
  function deleteRowTransportDetails(id) {
    transportDetails = transportDetails.filter((row) => row.id !== id);
    transportDetails = [...transportDetails];
  }

  // Validation Functions
  function validateField(field, value) {
    switch (field) {
      case "name":
        return value !== "";
      case "transportComingName":
        return value !== "";
      case "transportReturnName":
        return value !== "";
      case "mobile":
        return /^\d{10}$/.test(value);
      case "pincode":
        return /^\d{6}$/.test(value);
      case "gender":
        return value !== "";
      case "age":
        return value > 0;
      case "startDate":
        return value !== "";
      case "days":
        return value > 0;
      case "aadhar":
        return /^\d{12}$/.test(value);

      default:
        return true;
    }
  }
  // validate transport field
  function validateTransportField(field, value) {
    let isValid = true;
    let errorMessage = "";

    switch (field) {
      case "transportName":
        isValid = value !== "";
        errorMessage = isValid ? "" : "Please enter a name.";
        break;
      case "mode":
        isValid = value !== "";
        errorMessage = isValid ? "" : "Please select a mode of transport.";
        break;
      case "fromDate":
        isValid = value !== "";
        errorMessage = isValid ? "" : "Please enter a from date.";
        break;
      case "toDate":
        isValid = value !== "";
        errorMessage = isValid ? "" : "Please enter a to date.";
        break;
      case "boardingLocation":
        isValid = value !== "";
        errorMessage = isValid ? "" : "Please enter a boarding location.";
        break;
      case "destinationLocation":
        isValid = value !== "";
        errorMessage = isValid ? "" : "Please enter a destination location.";
        break;
      case "boardingTime":
        isValid = value !== "";
        errorMessage = isValid ? "" : "Please enter a boarding time.";
        break;
      case "destinationTime":
        isValid = value !== "";
        errorMessage = isValid ? "" : "Please enter a destination time.";
        break;

      case "totalPerson":
        isValid = !isNaN(value) && Number(value) > 0;
        errorMessage = isValid
          ? ""
          : "Please enter a valid number greater than 0 for total travellers.";
        break;
      case "comment":
        isValid = true;
        errorMessage = "";
        break;
      default:
        isValid = true;
        errorMessage = "";
        break;
    }

    return { isValid, errorMessage };
  }

  // validate user row
  function validateRow(row) {
    const fields = [
      "name",
      "mobile",
      "transportComingName",
      "transportReturnName",
      "pincode",
      "gender",
      "age",
      "startDate",
      "days",
      "aadhar",
    ];
    let isValid = true;
    row.hasError = false; // Reset the error state for the row
    fields.forEach((field) => {
      if (!validateField(field, row.objDetails[field])) {
        isValid = false;
        row.objDetails[`${field}Error`] = true;
        errorMessages[row.id][field] = true; // Set the error visibility
        errorMessages[row.id][field] = "Please enter this";
        console.log(errorMessages, "errormesssages");
      } else {
        row.objDetails[`${field}Error`] = false;
        errorMessages[row.id][field] = false; // Clear the error visibility
      }
    });

    // Trigger reactivity for errorMessages
    errorMessages = { ...errorMessages };

    if (!isValid) {
      row.hasError = true; // Set the row error state if any field is invalid
    }
    return isValid;
  }

  // validate transport row
  function validateTransportRow(transport) {
    const fields = [
      "transportName",
      "mode",
      "fromDate",
      "toDate",
      "boardingLocation",
      "boardingTime",
      "destinationLocation",
      "destinationTime",
      "totalPerson",
      "comment",
    ];

    let isValid = true;
    transport.hasError = false;

    fields.forEach((field) => {
      const validation = validateTransportField(
        field,
        transport.objDetails[field]
      );
      // Update the errorMessagesTransports object
      if (!errorMessagesTransport[transport.id]) {
        errorMessagesTransport[transport.id] = {};
      }

      if (!validation.isValid) {
        isValid = false;
        transport.objDetails[`${field}Error`] = true;
        errorMessagesTransport[transport.id][field] = true;
        // errorMessagesTransport[transport.id]["transportName"] = true;

        errorMessagesTransport[transport.id][field] = validation.errorMessage;
      } else {
        transport.objDetails[`${field}Error`] = false;
        errorMessagesTransport[transport.id][field] = "";
        errorMessagesTransport[transport.id][field] = false;
      }
    });

    if (!isValid) {
      transport.hasError = true;
    }

    return isValid;
  }

  // submit form
  const submitForm = async (event, action) => {
    event.preventDefault();

    const form = document.getElementById("form");
    let formIsValid = true;
    form.classList.add("validated");

    userDetails = userDetails.map((row) => {
      // Ensure reactivity in Svelte
      if (!validateRow(row)) {
        formIsValid = false;
      }
      return { ...row }; // Ensure Svelte re-renders the row
    });

    transportDetails = transportDetails.map((transport) => {
      if (!validateTransportRow(transport)) {
        formIsValid = false;
      }
      return { ...transport };
    });

    if (formIsValid) {
      console.log(filteredUser, "userDetails");
      console.log(userDetails, "userDetails");
      console.log(transportDetails, "transportDetails");

      addParticipantNames();

      if (action === "save") {
        addParticipantNames();

        // Uncomment the fetch call when backend API is ready
        // const response = await fetch("http://localhost:5050/api/participant/saveParticipant", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({ userDetails, transportDetails }),
        // });
        // if (response.ok) {
        //   alert("Data saved successfully");
        //   document.getElementById("my_modal_11").style.display = "none"; // Hide the modal
        // } else {
        //   alert("Failed to save data");
        //   console.error(response);
        // }
      } else if (action === "pay") {
        // Generate unique IDs
        const paymentId = `PAY${Date.now()}`;
        const transactionId = `TXN${Date.now()}`;
        // Redirect to payment page with user details and transport details
        window.location.href = `/payments/payment?data=${encodeURIComponent(
          JSON.stringify({
            userDetails,
            transportDetails,
            totalAmountOfUsers,
            paymentId,
            transactionId,
          })
        )}`;
      }
    } else {
      alert("Please correct the errors in the form.");
    }
  };
  // handle input user details
  function handleInput(row, field) {
    return (event) => {
      row.objDetails[field] = event.target.value;
      // Update the error message visibility for the specific row and field
      errorMessages[row.id][field] = validateField(field, event.target.value);

      // Trigger reactivity in Svelte by reassigning the errorMessages object
      errorMessages = { ...errorMessages };
      console.log(errorMessages, "errormessages");

      validateRow(row); // Validate the entire row on input change
    };
  }

  // add transport coming and return
  function handleTransportAdd(transport) {
    const transportIndex = transportComing.indexOf(transport.objDetails.name);
    const transportIndex2 = transportReturn.indexOf(transport.objDetails.name);

    // If the transport name doesn't already exist in the array, add it
    if (transportIndex === -1 && transportIndex2 === -1) {
      transportComing.push(transport.objDetails.name);
      transportReturn.push(transport.objDetails.name);
    } else {
      // If it exists, update the value
      transportComing[transportIndex] = transport.objDetails.name;
      transportReturn[transportIndex] = transport.objDetails.name;
    }

    transportComing = [...transportComing]; //re-rendering
    transportReturn = [...transportReturn];
  }

  function handleTransportChange(user) {
    const userId = user.id;
    if (
      selectedTransportComingName[userId] &&
      !user.objDetails.transportComingName.includes(selectedTransportComingName[userId])
    ) {
      user.objDetails.transportComingName.push(selectedTransportComingName[userId]);
    }

    if (
      selectedTransportReturnName[userId] &&
      !user.objDetails.transportReturnName.includes(selectedTransportReturnName[userId])
    ) {
      user.objDetails.transportReturnName.push(selectedTransportReturnName[userId]);
    }

    // Trigger reactivity
    userDetails = [...userDetails];
  }

  function handleTransportInput(transport, field) {
    return (event) => {
      transport.objDetails[field] = event.target.value;

      const validation = validateTransportField(field, event.target.value);

      // Update the error messages object
      if (!errorMessagesTransport[transport.id]) {
        errorMessagesTransport[transport.id] = {};
      }

      errorMessagesTransport[transport.id][field] = validation.isValid
        ? ""
        : validation.errorMessage;

      validateTransportRow(transport);
    };
  }

  // for update last date
  function updateEndDate(row) {
    if (row.objDetails.startDate && row.objDetails.days) {
      const startDate = new Date(row.objDetails.startDate);

      // Correct way to add days by using UTC time to avoid timezone issues
      const endDate = new Date(
        startDate.getTime() + row.objDetails.days * 24 * 60 * 60 * 1000
      );

      // Format the end date to 'YYYY-MM-DD'
      row.objDetails.endDate = endDate.toISOString().split("T")[0];

      console.log("Start Date:", startDate);
      console.log("Days to Add:", row.objDetails.days);
      console.log("End Date:", row.objDetails.endDate);
    }
  }

  // calculate amount
  function calculateAmount(row) {
    const days = row.objDetails.days;
    const age = row.objDetails.age;
    let selectedRateRule;

    // Select the rate rule based on age
    if (age <= 5) {
      selectedRateRule = eventDetail.rateRules.find(
        (rule) => rule.category === "kid"
      );
    } else if (age <= 18) {
      selectedRateRule = eventDetail.rateRules.find(
        (rule) => rule.category === "student"
      );
    } else if (age > 18) {
      selectedRateRule = eventDetail.rateRules.find(
        (rule) => rule.category === "adult"
      );
    } else {
      selectedRateRule = eventDetail.rateRules.find(
        (rule) => rule.category === "default"
      );
    }

    // Initialize the total amount with the baseAmount
    let totalAmount = selectedRateRule.baseAmount;

    // Apply any additional amount rules based on conditions (like time)
    // selectedRateRule.amountConditions.forEach((condition) => {
    //   if (condition.operator === "after" && entryTime >= condition.time) {
    //     totalAmount += condition.amount;
    //   } else if (condition.operator === "full") {
    //     totalAmount += condition.amount;
    //   }
    // });

    // Calculate the final amount for the given days
    row.objDetails.amount = days * totalAmount;

    // Calculate the total amount from all users
    totalAmountOfUsers = userDetails.reduce((sum, user) => {
      return sum + (user.objDetails.amount || 0); // Ensures that undefined amounts are treated as 0
    }, 0);

    console.log(totalAmountOfUsers, "Total Amount");
  }
  // call function updateEndDate and CalculateAmount
  $: {
    filteredUser.forEach((row) => {
      updateEndDate(row);
      calculateAmount(row);
    });
  }

  // accordion
  let isPersonalDetailsOpen = false;
  let isTransportDetailsOpen = true;
  let isPaymentHistoryOpen = false;
  function toggleSection(section) {
    if (section === "personal") {
      isPersonalDetailsOpen = !isPersonalDetailsOpen;
    } else if (section === "transport") {
      isTransportDetailsOpen = !isTransportDetailsOpen;
    } else if (section === "paymentHistory") {
      isPaymentHistoryOpen = !isPaymentHistoryOpen;
    }
  }

  // direct move to new entry button after aadhar when using tab key
  function focusOnNewEntry(event) {
    if (event.key === "Tab" && !event.shiftKey) {
      event.preventDefault();
      document.getElementById("new-entry-button").focus();
    }
  }
  function focusOnNewEntry2(event) {
    if (event.key === "Tab" && !event.shiftKey) {
      event.preventDefault();
      document.getElementById("new-entry-button2").focus();
    }
  }

  // mobile screen filter options
  let isMobileScreen = false;
  let selectedOptionFilterMobile = ""; // Stores the selected option from the dropdown

  function handleResize() {
    isMobileScreen = window.innerWidth < 640; // Check if the screen is small (mobile)
  }

  // Detect screen size on load
  onMount(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  });

  // Cleanup event listener
  onDestroy(() => {
    window.removeEventListener("resize", handleResize);
  });

  // Options for the select dropdown
  const filterOptions = [
    { value: "pincode", label: "Pincode" },
    { value: "fromDate", label: "From Date" },
    { value: "days", label: "Days" },
  ];

  // Close form (Cancel button)
  function cancelSubmitForm(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Close the modal
    const modal = document.getElementById("my_modal_11").close();

    // Reset any validation or form states if necessary
    const form = document.getElementById("form");
    form.classList.remove("validated"); // Reset the form validation state
  }

  // Filter variables
  let pincodeFilter = "";
  let fromDateFilter = "";
  let daysFilter = null;

  // Apply pincode filter to userDetails
  function applyPincodeFilter(event) {
    event.preventDefault();

    // Filter userDetails based on pincode
    filteredUser = userDetails.filter((user) => {
      // Check if the pincode exists and is equal to the filter value
      return user.objDetails && user.objDetails.pincode === pincodeFilter;
    });

    if (filteredUser.length === 0) {
      console.log("No users found with the specified pincode.");
    } else {
      console.log(
        `Filtered ${filteredUser.length} users with pincode ${pincodeFilter}`
      );
    }

    console.log(userDetails, "user details");
  }

  // Apply fromDate filter to transportDetails
  function applyFromDateFilter() {
    event.preventDefault();
    filteredUser = userDetails.filter((user) => {
      return user.objDetails.startDate === fromDateFilter;
    });
  }

  // Apply days filter to userDetails
  function applyDaysFilter(event) {
    event.preventDefault();
    filteredUser = userDetails.filter((user) => {
      return user.objDetails.days === daysFilter;
    });
  }
</script>

<section>
  <!-- page heading events -->
  <div class="page-heading">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2 header-text">
          <h2>{eventDetail.objDetails.name} <em>SnapX</em></h2>
          <p>
            <span class="mb-3 d-inline-block"
              >{eventDetail.objDetails.type} | {eventDetail.objDetails
                .duration}</span
            >
          </p>
        </div>
      </div>
    </div>
  </div>

  <!--event details page start-->
  <div class="px-5 py-4 mt-4 mb-3 eventDetailsResponsive">
    <div class="">
      <div class="event-dts-item">
        <div class="flex event-dts gap-3">
          <div>
            <div class="flex gap-3 items-center py-2">
              <a href="#" class="btn btn1">Save on Calendar</a>

              <a
                href="#"
                style="background-color:red"
                class="btn btn2 text-white"
                onclick="my_modal_11.showModal()">Participate</a
              >
            </div>
            <ul class="flex gap-5 justify-start mt-5 flex-wrap">
              <li>
                <div class="flex gap-4">
                  <img
                    src={eventDetail.images[5].src}
                    alt=""
                    class="w-[60px] h-[60px]"
                    style="border-radius: 14px;"
                  />
                  <div>
                    <p>Date Conference</p>
                    <h4>{eventDetail.objDetails.time}</h4>
                  </div>
                </div>
              </li>
              <li>
                <div class="flex gap-4">
                  <img
                    src={eventDetail.images[5].src}
                    alt=""
                    class="w-[60px] h-[60px]"
                    style="border-radius: 14px;"
                  />
                  <div>
                    <p>Location</p>
                    <h4>{eventDetail.objDetails.location}</h4>
                  </div>
                </div>
              </li>
              <li>
                <div class="flex gap-4">
                  <img
                    src={eventDetail.images[5].src}
                    alt=""
                    class="w-[60px] h-[60px]"
                    style="border-radius: 14px;"
                  />
                  <div>
                    <p>Tickets Remaining</p>
                    <h4>{eventDetail.objDetails.ticketsRemain} Tickets</h4>
                  </div>
                </div>
              </li>

              <li>
                <div class="flex gap-4">
                  <img
                    src={eventDetail.images[5].src}
                    alt=""
                    class="w-[60px] h-[60px]"
                    style="border-radius: 14px;"
                  />
                  <div>
                    <p>Speaker</p>
                    <h4>
                      {eventDetail.objDetails.totalSpeaker} Professional Speakers
                    </h4>
                  </div>
                </div>
              </li>
              <li>
                <div class="flex gap-4">
                  <img
                    src={eventDetail.images[5].src}
                    alt=""
                    class="w-[60px] h-[60px]"
                    style="border-radius: 14px;"
                  />
                  <div>
                    <p>Price</p>
                    <h4>
                      <strong>Student:</strong>&nbsp;<span
                        class="text-success"
                        style="font-size: 1.3rem;"
                        >{eventDetail.rateRules[0].amount}</span
                      >
                    </h4>
                    <h4>
                      <strong>Others:</strong>&nbsp;<span
                        class="text-success"
                        style="font-size: 1.3rem;"
                        >{eventDetail.rateRules[1].amount}</span
                      >
                    </h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="col-lg-4">
            <div>
              <h4>Transport Details:</h4>
              <p>
                Type:{eventDetail.transportDetails[0].type}, Name:{eventDetail
                  .transportDetails[0].name}, Contact:{eventDetail
                  .transportDetails[0].contact}, Address:{eventDetail
                  .transportDetails[0].address}
              </p>
            </div>
            <div class="event-maps-wrap">
              <iframe
                title=""
                src={`https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3507.2323570251697!2d${y}!3d${x}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDI4JzIxLjIiTiA3N8KwMDEnNTQuNSJF!5e0!3m2!1sen!2sin!4v1697799312612!5m2!1sen!2sin`}
                width="600"
                height="450"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Open the modal using ID.showModal() method -->
    <dialog id="my_modal_11" class="modal participantModal">
      <div class="modal-box max-w-[95vw] w-[90vw]">
        <form action="" on:submit={submitForm} id="form" novalidate>
          <div class="text-center mt-3">
            <div class="flex items-center justify-between"></div>
            <h4 class="mb-2">Enter/Edit Participant Details</h4>
            <span>(All * fields are mandatory)</span>
            <select
              name=""
              id=""
              class="bg-gray-50 border border-gray-300 rounded-md outline-none text-sm hover:bg-gray-100 mx-3 p-1"
              bind:value={selectedOption}
              on:change={handleOptionChange}
            >
              <option value="Desktop View">Desktop View</option>
              <option value="Mobile View">Mobile View</option>
            </select>
            <!-- <button class="bg-[#00bdfe] text-sm text-white mx-2  tracking-[0.05rem] hover:bg-blue-500 rounded-md py-1.5 px-3 border border-blue-500"
          ><svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.926 10.898 15 7.727m-7.074 5.39L15 16.29M8 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm12 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm0-11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
          </svg>
          </button> -->
          </div>
          {#if selectedOption === "Desktop View"}
            <!-- {#if signedIn} -->
            <div class="flex justify-center w-full">
              <div class=" mt-5 flex">
                <input
                  type="search"
                  class="form-control w-[50vw] max-w-screen"
                />
                <button
                  class="bg-[#00bdfe] text-sm text-white mx-2 tracking-[0.05rem] hover:bg-blue-500 rounded-md py-1 px-3 border border-blue-500"
                  ><i class="fa-solid fa-search" /></button
                >
              </div>
            </div>

            <!-- filters for mobile and desktop -->
            <div class=" mt-5">
              {#if isMobileScreen}
                <!-- Mobile View -->
                <div>
                  <select
                    bind:value={selectedOptionFilterMobile}
                    class="form-control py-1"
                    placeholder="Select an option"
                  >
                    <option value="" disabled selected
                      >Select an filter option</option
                    >
                    {#each filterOptions as option}
                      <option value={option.value}>{option.label}</option>
                    {/each}
                  </select>
                </div>

                <!-- Conditionally render the input and button based on the selected option -->
                {#if selectedOptionFilterMobile === "pincode"}
                  <div class="mt-4">
                    <input
                      type="text"
                      class="form-control py-1"
                      placeholder="Enter Pincode"
                      bind:value={pincodeFilter}
                    />
                    <button
                      class="btn btn-light mt-2 w-full"
                      style="font-size: 13px;"
                      on:click={applyPincodeFilter}
                      >Apply Pincode
                    </button>
                  </div>
                {/if}

                {#if selectedOptionFilterMobile === "fromDate"}
                  <div class="mt-4">
                    <input
                      type="date"
                      class="form-control py-1"
                      bind:value={fromDateFilter}
                    />
                    <button
                      class="btn btn-light mt-2 w-full"
                      on:click={applyFromDateFilter}
                      style="font-size: 13px;">Apply From Date</button
                    >
                  </div>
                {/if}

                {#if selectedOptionFilterMobile === "days"}
                  <div class="mt-4">
                    <input
                      type="number"
                      class="form-control py-1"
                      placeholder="Enter Days"
                      bind:value={daysFilter}
                    />
                    <button
                      class="btn btn-light mt-2 w-full"
                      on:click={applyDaysFilter}
                      style="font-size: 13px;">Apply Days</button
                    >
                  </div>
                {/if}
              {:else}
                <div class="flex justify-between gap-2 items-center">
                  <div class="d-flex gap-3 align-items-center">
                    <input
                      type="text"
                      class="form-control py-1"
                      bind:value={pincodeFilter}
                    />
                    <button
                      class="btn btn-light"
                      style="font-size: 13px;width:52%;max-width:100%"
                      on:click={applyPincodeFilter}>Apply all pincode</button
                    >
                  </div>
                  <div class="d-flex gap-3 align-items-center">
                    <input
                      type="date"
                      class="form-control py-1 min-w-[10vw]"
                      style="color:rgba(0,0,0,0.7)"
                      bind:value={fromDateFilter}
                    />
                    <button
                      class="btn btn-light"
                      style="font-size: 13px;width:56%;max-width:100%"
                      on:click={applyFromDateFilter}>Apply all FromDate</button
                    >
                  </div>
                  <div class="d-flex gap-3 align-items-center">
                    <input
                      type="number"
                      class="form-control py-1"
                      bind:value={daysFilter}
                    />
                    <button
                      class="btn btn-light"
                      style="font-size: 13px;width:52%;max-width:100%"
                      on:click={applyDaysFilter}>Apply all Days</button
                    >
                  </div>
                </div>
              {/if}
            </div>

            <!-- Accordion for Transport Details -->
            <div class="border border-gray-300 rounded-md mt-5">
              <div
                class="bg-gray-100 p-2 cursor-pointer flex justify-between items-center"
                on:click={() => toggleSection("transport")}
              >
                <h5 class="font-medium text-lg">Transport Details</h5>
                <span class="text-xs text-gray-500"
                  >{isTransportDetailsOpen ? "▲" : "▼"}</span
                >
              </div>
              {#if isTransportDetailsOpen}
                <div class="p-2 bg-white">
                  <div class="table-responsive mt-2">
                    <table
                      class="table table-striped table-hover table-bordered"
                    >
                      <thead class="">
                        <tr style="font-size: 14px;">
                          <th scope="col">Select</th>
                          <th scope="col">SNo.</th>
                          <th scope="col">Name</th>
                          <th scope="col">Mode</th>
                          <th scope="col">From Date</th>
                          <th scope="col">To Date</th>
                          <th scope="col">BoardingPlace</th>
                          <th scope="col">BoardingTime</th>
                          <th scope="col">DestinationPlace</th>
                          <th scope="col">DestinationTime</th>
                          <th scope="col-2">Total Person</th>
                          <th scope="col-2">Comment</th>

                          <th scope="col" />
                        </tr>
                      </thead>
                      <tbody>
                        {#each transportDetails as transport}
                          <tr
                            class={transport.hasError
                              ? "border-pink-600 ring-2 ring-pink-200"
                              : "border-gray-300"}
                          >
                            <td class="text-center"
                              ><input type="checkbox" name="" id="" /></td
                            >
                            <td class="text-center">{transport.id}</td>
                            <!-- transport name -->
                            <td>
                              <input
                                type="text"
                                class="form-control w-100 {transport.objDetails
                                  .transportNameError
                                  ? 'border-pink-600 ring-2 ring-pink-200'
                                  : 'border-gray-300'}"
                                bind:value={transport.objDetails.name}
                                on:input={handleTransportInput(
                                  transport,
                                  "transportName"
                                )}
                                on:change={() => handleTransportAdd(transport)}
                                autofocus
                                required
                              />
                              <span
                                class="mt-2 {errorMessagesTransport[
                                  transport.id
                                ].transportName
                                  ? ''
                                  : 'hidden'}  error-message text-pink-600 text-xs"
                              >
                                Please enter name.
                              </span>
                            </td>
                            <!-- mode -->
                            <td>
                              <select
                                name=""
                                style="font-size: 12px;"
                                id=""
                                class="form-control {transport.objDetails
                                  .modeError
                                  ? 'border-pink-600 ring-2 ring-pink-200'
                                  : 'border-gray-300'}"
                                bind:value={transport.objDetails.mode}
                                on:input={handleTransportInput(
                                  transport,
                                  "mode"
                                )}
                              >
                                <option value="bus">Bus</option>
                                <option value="train">Train</option>
                                <option value="flight">Flight</option>
                              </select>
                              <span
                                class="mt-2 {errorMessagesTransport[
                                  transport.id
                                ].mode
                                  ? ''
                                  : 'hidden'} error-message text-pink-600 text-xs"
                              >
                                Please enter mode of transport.
                              </span>
                            </td>
                            <!-- from date -->
                            <td
                              ><input
                                type="date"
                                class="form-control {transport.objDetails
                                  .fromDateError
                                  ? 'border-pink-600 ring-2 ring-pink-200'
                                  : 'border-gray-300'}"
                                style="font-size: 12px;color:rgba(0,0,0,0.8)"
                                bind:value={transport.objDetails.fromDate}
                                on:input={handleTransportInput(
                                  transport,
                                  "fromDate"
                                )}
                              />
                              <span
                                class="mt-2 {errorMessagesTransport[
                                  transport.id
                                ].fromDate
                                  ? ''
                                  : 'hidden'} error-message text-pink-600 text-xs"
                              >
                                Please enter from date.
                              </span>
                            </td>
                            <!-- <!- to date -->
                            <td
                              ><input
                                type="date"
                                class="form-control {transport.objDetails
                                  .toDateError
                                  ? 'border-pink-600 ring-2 ring-pink-200'
                                  : 'border-gray-300'}"
                                style="font-size: 12px;color:rgba(0,0,0,0.8)"
                                bind:value={transport.objDetails.toDate}
                                on:input={handleTransportInput(
                                  transport,
                                  "toDate"
                                )}
                              />
                              <span
                                class="mt-2 {errorMessagesTransport[
                                  transport.id
                                ].toDate
                                  ? ''
                                  : 'hidden'} error-message text-pink-600 text-xs"
                              >
                                Please enter to date.
                              </span>
                            </td>
                            <!-- boarding location -->
                            <td
                              ><input
                                type="text"
                                class="form-control {transport.objDetails
                                  .boardingLocationError
                                  ? 'border-pink-600 ring-2 ring-pink-200'
                                  : 'border-gray-300'}"
                                style="font-size: 12px;color:rgba(0,0,0,0.8)"
                                bind:value={transport.objDetails
                                  .boardingLocation}
                                on:input={handleTransportInput(
                                  transport,
                                  "boardingLocation"
                                )}
                              />
                              <span
                                class="mt-2 {errorMessagesTransport[
                                  transport.id
                                ].boardingLocation
                                  ? ''
                                  : 'hidden'} error-message text-pink-600 text-xs"
                              >
                                Please enter boarding location.
                              </span>
                            </td>
                            <!-- boarding time -->
                            <td
                              ><input
                                type="time"
                                class="form-control {transport.objDetails
                                  .boardingTimeError
                                  ? 'border-pink-600 ring-2 ring-pink-200'
                                  : 'border-gray-300'}"
                                style="font-size: 12px;color:rgba(0,0,0,0.8)"
                                bind:value={transport.objDetails.boardingTime}
                                on:input={handleTransportInput(
                                  transport,
                                  "boardingTime"
                                )}
                              />
                              <span
                                class="mt-2 {errorMessagesTransport[
                                  transport.id
                                ].boardingTime
                                  ? ''
                                  : 'hidden'} error-message text-pink-600 text-xs"
                              >
                                Please enter boarding time.
                              </span>
                            </td>
                            <!-- destination location -->
                            <td
                              ><input
                                type="text"
                                class="form-control {transport.objDetails
                                  .destinationLocationError
                                  ? 'border-pink-600 ring-2 ring-pink-200'
                                  : 'border-gray-300'}"
                                style="font-size: 12px;color:rgba(0,0,0,0.8)"
                                bind:value={transport.objDetails
                                  .destinationLocation}
                                on:input={handleTransportInput(
                                  transport,
                                  "destinationLocation"
                                )}
                              />
                              <span
                                class="mt-2 {errorMessagesTransport[
                                  transport.id
                                ].destinationLocation
                                  ? ''
                                  : 'hidden'} error-message text-pink-600 text-xs"
                              >
                                Please enter destination location.
                              </span>
                            </td>
                            <!-- destination time -->
                            <td
                              ><input
                                type="time"
                                class="form-control {transport.objDetails
                                  .destinationTimeError
                                  ? 'border-pink-600 ring-2 ring-pink-200'
                                  : 'border-gray-300'}"
                                style="font-size: 12px;color:rgba(0,0,0,0.8)"
                                bind:value={transport.objDetails
                                  .destinationTime}
                                on:input={handleTransportInput(
                                  transport,
                                  "destinationTime"
                                )}
                              />
                              <span
                                class="mt-2 {errorMessagesTransport[
                                  transport.id
                                ].destinationTime
                                  ? ''
                                  : 'hidden'} error-message text-pink-600 text-xs"
                              >
                                Please enter destination time.
                              </span>
                            </td>
                            <!-- total person -->

                            <td
                              ><input
                                type="number"
                                class="form-control {transport.objDetails
                                  .totalPersonError
                                  ? 'border-pink-600 ring-2 ring-pink-200'
                                  : 'border-gray-300'}"
                                style="font-size: 12px;color:rgba(0,0,0,0.8)"
                                bind:value={transport.objDetails.totalPerson}
                                on:input={handleTransportInput(
                                  transport,
                                  "totalPerson"
                                )}
                              />
                              <span
                                class="mt-2 {errorMessagesTransport[
                                  transport.id
                                ].totalPerson
                                  ? ''
                                  : 'hidden'} error-message text-pink-600 text-xs"
                              >
                                Please enter total traveller.
                              </span>
                            </td>
                            <!-- comment -->
                            <td on:keydown={focusOnNewEntry2}>
                              <textarea
                                name=""
                                id=""
                                rows="1"
                                cols="2"
                                class=""
                              >
                                {transport.objDetails.comment}
                              </textarea>
                            </td>

                            <!-- delete row -->
                            <td>
                              <button
                                tabindex="-1"
                                class="btn btn-light"
                                on:click={() =>
                                  deleteRowTransportDetails(transport.id)}
                              >
                                <i class="fa-solid fa-trash" />
                              </button>
                            </td>
                          </tr>
                        {/each}
                      </tbody>
                    </table>
                    <div>
                      <button
                        id="new-entry-button2"
                        on:click={addTransportDetailsRow}
                        style="font-weight: 600;"
                        class="bg-[#00bdfe] text-sm text-white tracking-[0.05rem] hover:bg-blue-500 rounded-md py-1.5 px-3 border border-blue-500"
                        >New Entry</button
                      >
                    </div>
                  </div>
                  <!-- Add more transport details here -->
                </div>
              {/if}
            </div>

            <!-- Accordion for Personal Details -->
            <div class="border border-gray-300 rounded-md mt-3">
              <div
                class="bg-gray-100 p-2 cursor-pointer flex justify-between items-center"
                on:click={() => toggleSection("personal")}
              >
                <h5 class="font-medium text-lg">Personal Details</h5>
                <span class="text-xs text-gray-500"
                  >{isPersonalDetailsOpen ? "▲" : "▼"}</span
                >
              </div>
              {#if isPersonalDetailsOpen}
                <div class="p-2 bg-white">
                  {#if filteredUser.length > 0}
                    <div class="table-responsive mt-2">
                      <table
                        class="table table-striped table-hover table-bordered"
                      >
                        <thead class="">
                          <tr>
                            <th scope="col">Select</th>
                            <th scope="col">SNo.</th>
                            <th scope="col">Name*</th>
                            <th scope="col">BookId</th>
                            <th scope="col">ReceiptId</th>
                            <th scope="col">TransportComing</th>
                            <th scope="col">TransportReturn</th>
                            <th scope="col">Mobile*</th>
                            <th scope="col">Pincode*</th>
                            <th scope="col">Gender*</th>
                            <th scope="col">Age*</th>
                            <th scope="col">From Date</th>
                            <th scope="col">Days*</th>
                            <th scope="col">To Date</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Aadhar</th>
                            <th scope="col" />
                          </tr>
                        </thead>
                        <tbody>
                          {#each filteredUser as row (row.id)}
                            <tr
                              class="{row.hasError
                                ? 'border-pink-600 ring-2 ring-pink-200'
                                : 'border-gray-300'} "
                            >
                              <td class="text-center"
                                ><label for="" class="text-xs">Master</label
                                >&nbsp;<input
                                  type="checkbox"
                                  name=""
                                  id=""
                                /></td
                              >
                              <td class="text-center">{row.id}</td>
                              <!-- name -->
                              <td>
                                <div>
                                  <input
                                    type="text"
                                    class="form-control w-100 focus:text-blue-600 {row
                                      .objDetails.nameError
                                      ? 'border-pink-600 ring-2 ring-pink-200'
                                      : 'border-gray-300'}"
                                    bind:value={row.objDetails.name}
                                    placeholder=" "
                                    required
                                    autofocus
                                    on:input={handleInput(row, "name")}
                                  />
                                  <span
                                    class="mt-2 {errorMessages[row.id].name
                                      ? ''
                                      : 'hidden'} error-message text-pink-600 text-xs"
                                  >
                                    Please provide your name.
                                  </span>
                                </div>
                              </td>

                              <!-- pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" -->
                              <!-- book id -->
                              <td
                                ><input
                                  type="text"
                                  class="form-control w-100 focus:text-blue-600 border-gray-300"
                                  bind:value={row.objDetails.bookId}
                                  placeholder=" "
                                />
                              </td>
                              <!-- receipt id -->
                              <td
                                ><input
                                  type="text"
                                  class="form-control w-100 focus:text-blue-600 border-gray-300"
                                  bind:value={row.objDetails.receiptId}
                                  placeholder=" "
                                />
                              </td>
                              <!-- transport coming name -->
                              <td>
                                <select
                                  name=""
                                  id=""
                                  class="form-control {row.objDetails
                                    .transportComingNameError
                                    ? 'border-pink-600 ring-2 ring-pink-200'
                                    : 'border-gray-300'}"
                                  bind:value={selectedTransportComingName[row.id]}
                                  on:input={handleInput(
                                    row,
                                    "transportComingName"
                                  )}
                                  on:change={() => handleTransportChange(row)}
                                >
                                  <option value="none" disabled
                                    >Select Transport Coming</option
                                  >
                                  {#each transportComing as coming}
                                    <option value={coming}>{coming}</option>
                                  {/each}
                                </select>
                                <span
                                  class="mt-2 {errorMessages[row.id]
                                    .transportComingName
                                    ? ''
                                    : 'hidden'}  error-message text-pink-600 text-xs"
                                >
                                  Please select transport coming.
                                </span>
                              </td>
                              <!-- transport return name -->
                              <td>
                                <select
                                  name=""
                                  id=""
                                  class="form-control {row.objDetails
                                    .transportReturnNameError
                                    ? 'border-pink-600 ring-2 ring-pink-200'
                                    : 'border-gray-300'}"
                                  bind:value={selectedTransportReturnName[row.id]}
                                  on:input={handleInput(
                                    row,
                                    "transportReturnName"
                                  )}
                                  on:change={() => handleTransportChange(row)}
                                >
                                  <option value="" disabled
                                    >Select Transport Return</option
                                  >
                                  {#each transportReturn as returning}
                                    <option value={returning}
                                      >{returning}</option
                                    >
                                  {/each}
                                </select>
                                <span
                                  class="mt-2 {errorMessages[row.id]
                                    .transportReturnName
                                    ? ''
                                    : 'hidden'}  error-message text-pink-600 text-xs"
                                >
                                  Please select transport return.
                                </span>
                              </td>
                              <!-- mobile -->
                              <td
                                ><input
                                  type="text"
                                  class="form-control w-100 {row.objDetails
                                    .mobileError
                                    ? 'border-pink-600 ring-2 ring-pink-200'
                                    : 'border-gray-300'}"
                                  bind:value={row.objDetails.mobile}
                                  on:input={handleInput(row, "mobile")}
                                />
                                <span
                                  class="mt-2 {errorMessages[row.id].mobile
                                    ? ''
                                    : 'hidden'}  error-message text-pink-600 text-xs"
                                >
                                  Mobile should be 10 digit long 
                                </span>
                              </td>
                              <!-- pincode -->
                              <td
                                ><input
                                  type="text"
                                  class="form-control w-100 {row.objDetails
                                    .pincodeError
                                    ? 'border-pink-600 ring-2 ring-pink-200'
                                    : 'border-gray-300'}"
                                  bind:value={row.objDetails.pincode}
                                  on:input={handleInput(row, "pincode")}
                                />
                                <span
                                  class="mt-2 {errorMessages[row.id].pincode
                                    ? ''
                                    : 'hidden'}  error-message text-pink-600 text-xs"
                                >
                                  Please enter 6 digit pincode.
                                </span>
                              </td>
                              <!-- gender -->
                              <td>
                                <select
                                  name=""
                                  id=""
                                  class="form-control {row.objDetails
                                    .genderError
                                    ? 'border-pink-600 ring-2 ring-pink-200'
                                    : 'border-gray-300'}"
                                  bind:value={row.objDetails.gender}
                                  on:input={handleInput(row, "gender")}
                                >
                                  <option value="male">Male</option>
                                  <option value="female">Female</option>
                                </select>
                                <span
                                  class="mt-2 {errorMessages[row.id].gender
                                    ? ''
                                    : 'hidden'}  error-message text-pink-600 text-xs"
                                >
                                  Please select gender.
                                </span>
                              </td>
                              <!-- age -->
                              <td
                                ><input
                                  type="number"
                                  name=""
                                  id=""
                                  class="form-control {row.objDetails.ageError
                                    ? 'border-pink-600 ring-2 ring-pink-200'
                                    : 'border-gray-300'}"
                                  bind:value={row.objDetails.age}
                                  on:input={handleInput(row, "age")}
                                />
                                <span
                                  class="mt-2 {errorMessages[row.id].age
                                    ? ''
                                    : 'hidden'}  error-message text-pink-600 text-xs"
                                >
                                  Please enter age.
                                </span>
                              </td>
                              <!-- start date -->
                              <td
                                ><input
                                  type="date"
                                  class="form-control {row.objDetails
                                    .startDateError
                                    ? 'border-pink-600 ring-2 ring-pink-200'
                                    : 'border-gray-300'}"
                                  style="font-size: 14px;color:rgba(0,0,0,0.8)"
                                  bind:value={row.objDetails.startDate}
                                  on:input={() => calculateAmount(row)}
                                  on:input={handleInput(row, "startDate")}
                                />
                                <span
                                  class="mt-2 {errorMessages[row.id].startDate
                                    ? ''
                                    : 'hidden'}  error-message text-pink-600 text-xs"
                                >
                                  Please select from date.
                                </span>
                              </td>
                              <!--days -->
                              <td
                                ><input
                                  type="number"
                                  name=""
                                  id=""
                                  class="form-control {row.objDetails.daysError
                                    ? 'border-pink-600 ring-2 ring-pink-200'
                                    : 'border-gray-300'}"
                                  bind:value={row.objDetails.days}
                                  on:input={handleInput(row, "days")}
                                  on:input={() => updateEndDate(row)}
                                />
                                <span
                                  class="mt-2 {errorMessages[row.id].days
                                    ? ''
                                    : 'hidden'}  error-message text-pink-600 text-xs"
                                >
                                  Please enter number of days.
                                </span>
                              </td>
                              <!-- end date -->
                              <td
                                ><input
                                  type="date"
                                  class="form-control border-gray-300"
                                  style="font-size: 14px;color:rgba(0,0,0,0.8)"
                                  bind:value={row.objDetails.endDate}
                                  readonly
                                />
                              </td>
                              <!-- amount -->
                              <td
                                ><input
                                  type="text"
                                  class="form-control border-gray-300"
                                  bind:value={row.objDetails.amount}
                                  readonly
                                />
                              </td>
                              <!-- aadhar -->
                              <td
                                ><input
                                  type="text"
                                  class="form-control {row.objDetails
                                    .aadharError
                                    ? 'border-pink-600 ring-2 ring-pink-200'
                                    : 'border-gray-300'}"
                                  bind:value={row.objDetails.aadhar}
                                  on:input={handleInput(row, "aadhar")}
                                  on:keydown={focusOnNewEntry}
                                />
                                <span
                                  class="mt-2 {errorMessages[row.id].aadhar
                                    ? ''
                                    : 'hidden'}  error-message text-pink-600 text-xs"
                                >
                                  Please enter 12 digit aadhar number.
                                </span>
                              </td>
                              <!-- delete button -->
                              <td>
                                <button
                                  class="btn btn-light"
                                  tabindex="-1"
                                  on:click={() => deleteRowUserDetails(row.id)}
                                >
                                  <i class="fa-solid fa-trash" />
                                </button>
                              </td>
                            </tr>
                          {/each}
                        </tbody>
                      </table>
                      <div>
                        <button
                          id="new-entry-button"
                          on:click={addUserDetailsRow}
                          style="font-weight: 600;"
                          class="bg-[#00bdfe] text-sm text-white tracking-[0.05rem] hover:bg-blue-500 rounded-md py-1.5 px-3 border border-blue-500"
                          >New Entry</button
                        >
                      </div>
                    </div>
                  {:else}
                    <div class="py-3 text-center tracking-[0.06rem]">
                      No User found
                    </div>
                  {/if}
                </div>
              {/if}
            </div>

            <!-- total amount -->
            <div class="flex mt-4 mb-2 gap-3 items-center">
              <h2>Total</h2>
              <span>=</span>
              <span class="text-xl text-green-600"
                >{totalAmountOfUsers > 0 ? totalAmountOfUsers : "0"}</span
              >
            </div>

            <!-- Accordion for payment history -->
            <div class="border border-gray-300 rounded-md mt-3">
              <div
                class="bg-gray-100 p-2 cursor-pointer flex justify-between items-center"
                on:click={() => toggleSection("paymentHistory")}
              >
                <h5 class="font-medium text-lg">Payment History</h5>
                <span class="text-xs text-gray-500"
                  >{isPaymentHistoryOpen ? "▲" : "▼"}</span
                >
              </div>
              {#if isPaymentHistoryOpen}
                <div class="p-2 bg-white">
                  <div class="table-responsive mt-2">
                    <table
                      class="min-w-full table-striped table-hover table-bordered border-gray-300"
                    >
                      <thead class="border-gray-300">
                        <tr>
                          <th
                            class="w-1/4 py-2 px-4 text-left border-gray-300 text-gray-500 text-sm tracking-[0.05rem]"
                            >Payment ID</th
                          >
                          <th
                            class="w-1/4 py-2 px-4 text-left border-gray-300 text-gray-500 text-sm tracking-[0.05rem]"
                            >Transaction ID</th
                          >
                          <th
                            class="w-1/2 py-2 px-4 text-left border-gray-300 text-gray-500 text-sm tracking-[0.05rem]"
                            >Participants Names</th
                          >
                          <th
                            class="w-1/4 py-2 px-4 text-left border-gray-300 text-gray-500 text-sm tracking-[0.05rem]"
                            >Total
                          </th>
                        </tr>
                      </thead>
                      <tbody class="">
                        {#each paymentHistory as payment}
                          <tr
                            class="bg-gray-100 border-b border-gray-300 text-gray-800 text-sm tracking-[0.05rem]"
                          >
                            <td
                              class="py-2 px-4 border-gray-300 text-gray-800 text-sm tracking-[0.05rem]"
                              >{payment.objDetails.paymentId}</td
                            >
                            <td
                              class="py-2 px-4 border-gray-300 text-gray-800 text-sm tracking-[0.05rem]"
                              >{payment.objDetails.txId}</td
                            >
                            <td
                              class="py-2 px-4 border-gray-300 text-gray-800 text-sm tracking-[0.05rem]"
                            >
                              {#each payment.participants as participant}
                                {participant.participantsName.join(", ")}
                              {/each}
                            </td>
                            <td
                              class="py-2 px-4 text-center border-gray-300 text-gray-800 text-sm tracking-[0.05rem]"
                            >
                              {#each payment.participants as participant}
                                {participant.participantsName.length}
                              {/each}
                            </td>
                          </tr>
                        {/each}
                      </tbody>
                    </table>
                  </div>
                </div>
              {/if}
            </div>

            <!-- {:else}
            <div class="text-center mt-5">
              <GoogleSignIn {signedIn} />
            </div>
          {/if} -->
          {:else if selectedOption === "Mobile View"}
            Mobile View
          {/if}
          <div class="my-5">
            <label for="">Suggestion:</label>
            <input type="text" class="form-control" />
          </div>

          <div class="flex items-center mt-2">
            <button
              on:click={(e) => submitForm(e, "save")}
              type="submit"
              style="font-weight: 600;"
              class="bg-[#00bdfe] text-sm text-white tracking-[0.05rem] hover:bg-blue-500 rounded-md py-1.5 px-3 border border-blue-500"
              >Save</button
            >
            <button
              on:click={(e) => submitForm(e, "pay")}
              style="font-weight: 600;"
              class="bg-[#00bdfe] mx-3 text-sm text-white tracking-[0.05rem] hover:bg-blue-500 rounded-md py-1.5 px-3 border border-blue-500"
            >
              Pay
            </button>
            <button
              on:click={cancelSubmitForm}
              style="font-weight: 600;"
              class="bg-base-100 text-sm tracking-[0.05rem] hover:bg-gray-100 rounded-md py-1.5 px-3 border border-gray-300"
              >Cancel</button
            >
          </div>
        </form>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  </div>
</section>

<style>
  section {
    margin-top: 70px;
  }
  :root:has(
      :is(
          .modal-open,
          .modal:target,
          .modal-toggle:checked + .modal,
          .modal[open]
        )
    ) {
    overflow: auto;
    scrollbar-gutter: auto;
  }
  .participantModal .modal-box::-webkit-scrollbar {
    width: 5px !important;
  }
  input:focus,
  select:focus {
    box-shadow: none;
  }

  .text-xs {
    font-size: 9px !important;
    letter-spacing: 0.05rem;
  }
  .table td {
    padding: 0.3rem !important;
  }
  .table td input:not([type="checkbox"]),
  .table td select,
  .table td textarea {
    padding: 0rem 0.2rem 0rem 0.2rem !important;
    /* border: 1px solid #fafafa; */
    min-width: 100px !important;
    font-size: 13px !important;
  }
  .table td select {
    min-width: 70px !important;
  }

  .table-responsive::-webkit-scrollbar {
    height: 30px;
  }

  .btn:focus,
  input:focus {
    box-shadow: none;
  }

  .event-dts-places li .icon img {
    vertical-align: middle;
  }

  .event-dts-places li p {
    line-height: 100%;
    padding-bottom: 12px;
  }
  .event-maps-wrap {
    max-width: 100%;
    margin-left: auto;
    border-radius: 20px;
  }

  .event-maps-wrap iframe {
    width: 100%;
    height: 220px;
    border-radius: 20px;
  }

  @media (max-width: 600px) {
    .eventDetailsResponsive {
      padding: 0.5rem !important;
    }
    .eventDetailsResponsive .event-dts-item .event-dts {
      flex-direction: column !important;
      gap: 3.5rem !important;
    }
  }

  @media (max-width: 767px) {
    .event-dts-item li {
      width: 100%;
      padding-left: 20px;
    }
    .event-dts-item {
      padding: 20px;
    }
  }
</style>
