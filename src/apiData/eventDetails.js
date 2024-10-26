export const eventDetails = [
  {
    id: 1,
    objDetails: {
      name: "Dj mixer Isolated as Gradient in Neon",
      location: "Gurgaon, Haryana India",
      type: "Stand Up Comedy",
      ticketsRemain: "130",
      totalSpeaker: "14",
      time: "March 22, 2023 at 8 P.M",
      duration: "2hrs",
    },
    speakerName: [
      {
        name: "Harish",
        image: "https://placehold.co/100x100",
      },
      {
        name: "Sunny",
        image: "https://placehold.co/100x100",
      },
    ],
    transportDetails: [
      {
        name: "Abc",
        type: "Bus",
        contact: "3843993893",
        address: "Gurgaon sector 12",
        map: "28.47330159585543, 77.02112969759816",
      },
    ],
    images: [
      {
        type: "banner",
        label: "Banner Image",
        src: "https://placehold.co/1325x519",
      },
      {
        type: "gallery",
        label: "Image 1",
        src: "https://placehold.co/400x320",
      },
      {
        type: "gallery",
        label: "Image 2",
        src: "https://placehold.co/400x320",
      },
      {
        type: "gallery",
        label: "Image 3",
        src: "https://placehold.co/400x320",
      },
      {
        type: "gallery",
        label: "Image 4",
        src: "https://placehold.co/400x320",
      },
      {
        type: "icon",
        label: "Icon 1",
        src: "https://placehold.co/100x100",
      },
      {
        type: "icon",
        label: "Icon 2",
        src: "https://placehold.co/100x100",
      },
      {
        type: "icon",
        label: "Icon 3",
        src: "https://placehold.co/100x100",
      },
      {
        type: "icon",
        label: "Icon 4",
        src: "https://placehold.co/100x100",
      },
      {
        type: "icon",
        label: "Icon 5",
        src: "https://placehold.co/100x100",
      },
    ],

    rateRules: [
      {
        ruleId: "lg2dg10vnpsuddt",
        category: "kid",
        conditions: [
          {
            ruleId: "lg2dg10vsnw",
            field: "age",
            operator: "lte",
            value: 5,
          },
        ],
        amountConditions: [
          {
            ruleId: "lsg2dga1s0vndw",
            description: "full entry",
            actionType: "entry",
            operator: "full",
            amount: 0,
          },
        ],
        baseAmount: 0,
      },
      {
        ruleId: "lg2dg10vnpuddt",
        category: "student",
        conditions: [
          {
            ruleId: "lg2dg10vnw",
            field: "age",
            operator: "lte",
            value: 18,
          },
        ],
        amountConditions: [
          {
            ruleId: "lg2dga10vndw",
            description: "entry after 10pm",
            actionType: "entry",
            operator: "after",
            time: 22,
            amount: 70,
          },
          {
            ruleId: "lg2dga10vnw",
            description: "entry after 2pm",
            actionType: "entry",
            operator: "after",
            time: 14,
            amount: 80,
          },
          {
            ruleId: "lsg2dga10vndw",
            description: "full entry",
            actionType: "entry",
            operator: "full",
            amount: 120,
          },
        ],
        baseAmount: 120,
      },
      {
        ruleId: "lg2dg10vnpudsdt",
        category: "adult",
        conditions: [
          {
            ruleId: "lg2dg10vnq",
            field: "age",
            operator: "gt",
            value: 18,
          },
        ],
        amountConditions: [
          {
            ruleId: "zzlg2dga10svndw",
            description: "entry after 10pm",
            actionType: "entry",
            operator: "after",
            time: 22,
            amount: 80,
          },
          {
            ruleId: "lzzg2dgsas10vnw",
            description: "entry after 2pm",
            actionType: "entry",
            operator: "after",
            time: 14,
            amount: 110,
          },
          {
            ruleId: "lzzsg2adga10avndw",
            description: "full entry",
            actionType: "entry",
            operator: "full",
            amount: 150,
          },
        ],
        baseAmount: 150,
      },
      {
        ruleId: "lg2dg10vnd2dsdt",
        category: "default",
        baseAmount: 150,
        conditions: [
          {
            description: "new condition 1",
            ruleId: "lljnfuqj5o0ku",
          },
          {
            description: "new condition 2",
            ruleId: "lm6x8gow2e95gr",
          },
        ],
        amountConditions: [
          {
            ruleId: "lg2d10vndw",
            description: "entry after 10pm",
            actionType: "entry",
            operator: "after",
            time: 22,
            amount: 150,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    objDetails: {
      name: "Festival Event",
      location: "Gurgaon, Haryana India",
      type: "Stand Up Comedy",
      ticketsRemain: "130",
      totalSpeaker: "14",
      time: "March 22, 2023 at 8 P.M",
      duration: "2hrs",
    },
    speakerName: [
      {
        name: "Harish",
        image: "https://placehold.co/100x100",
      },
      {
        name: "Sunny",
        image: "https://placehold.co/100x100",
      },
    ],
    transportDetails: [
      {
        name: "Abc",
        type: "Bus",
        contact: "3843993893",
        address: "Gurgaon sector 12",
        map: [
          {
            latitude: "28.47330159585543",
            longitude: "77.02112969759816",
          },
        ],
      },
    ],
    images: [
      {
        type: "banner",
        label: "Banner Image",
        src: "https://placehold.co/1325x519",
      },
      {
        type: "gallery",
        label: "Image 1",
        src: "https://placehold.co/400x320",
      },
      {
        type: "gallery",
        label: "Image 2",
        src: "https://placehold.co/400x320",
      },
      {
        type: "gallery",
        label: "Image 3",
        src: "https://placehold.co/400x320",
      },
      {
        type: "gallery",
        label: "Image 4",
        src: "https://placehold.co/400x320",
      },
      {
        type: "icon",
        label: "Icon 1",
        src: "https://placehold.co/100x100",
      },
      {
        type: "icon",
        label: "Icon 2",
        src: "https://placehold.co/100x100",
      },
      {
        type: "icon",
        label: "Icon 3",
        src: "https://placehold.co/100x100",
      },
      {
        type: "icon",
        label: "Icon 4",
        src: "https://placehold.co/100x100",
      },
    ],

    rate: [
      {
        name: "student",
        rate: "₹ 200",
      },
      {
        name: "others",
        rate: "₹ 750 onwards",
      },
    ],
  },
];

export function findId(id) {
  const detail = eventDetails.find((event) => {
    console.log(event.id, "id", id, "sa");
    console.log(event.id == id, "event.id==id");
    return event.id == id;
  });
  return detail;
}
