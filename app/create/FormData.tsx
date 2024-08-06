import { FormSectionsType } from "./FormSectionTypes";

export const biodataForm: FormSectionsType = [
  {
    name: "personal",
    titles: ["बायोडाटा", "परिचय पत्र ", "वैयक्तिक माहिती"],
    fields: [
      {
        id: "name",
        labels: ["नाव", "मुलाचे नाव", "मुलीचे नाव"],
        input: {
          placeholder: "संपूर्ण नाव",
        },

      },
      {
        id: "dob",
        labels: ["जन्मतारीख"],
        input: {
          type: "date",
        },
      },
      {
        id: "birthTime",
        labels: ["जन्म वेळ", "जन्म वार", "जन्म वार व वेळ"],
        input: {
          placeholder: "जन्माची वेळ",
        }
      },
      {
        id: "birthPlace",
        labels: ["जन्म स्थळ", "जन्म ठिकाण "],
        input: {
          placeholder: "जन्म स्थळ",
        }
      },
      // {
      //     id: "personal5",
      //   labels: ["नावरस नाव", "रास नाव", "जन्म नाव"],
      //   input: {
      //     placeholder: "नावरस नाव/जन्म नाव",
      //   }
      // },
      {
        id: "caste",
        labels: ["धर्म", "जात"],
        input: {
          placeholder: "धर्म-जात",
        }
      },
      {
        id: "kuldevi",
        labels: ["कुलदैवत"],
        input: {
          placeholder: "",
        },
        isLabelStatic: true,

      },
      {
        id: "gotra",
        labels: ["गोत्र"],
        input: {
          placeholder: "",
        },
        isLabelStatic: true,
      },
      {
        id: "devak",
        labels: ["देवक"],
        input: {
          placeholder: "",
        },
        isLabelStatic: true,

      },
      {
        id: "nakshatra",
        labels: ["नक्षत्र"],
        input: {
          placeholder: "",
        },
        isLabelStatic: true,

      },
      {
        id: "gan",
        labels: ["गण"],
        input: {
          placeholder: "",
        },
        isLabelStatic: true,

      },
      {
        id: "rashi",
        labels: ["राशी"],
        input: {
          placeholder: "",
        },
        isLabelStatic: true,

      },
      {
        id: "nadi",
        labels: ["नाडी"],
        input: {
          placeholder: "",
        },
        isLabelStatic: true,

      },
      {
        id: "height",
        labels: ["ऊंची"],
        input: {
          placeholder: "",
        },
        isLabelStatic: true,
      },
      {
        id: "varna",
        labels: ["वर्ण"],
        input: {
          placeholder: "",
        },
        isLabelStatic: true,

      },
      {
        id: "bloodGroup",
        labels: ["रक्तगट"],
        input: {
          placeholder: "",
        },
        isLabelStatic: true,

      },
      {
        id: "education",
        labels: ["शिक्षण"],
        input: {
          placeholder: "",
        },
        isLabelStatic: true,

      },
      {
        id: "occupation",
        labels: ["नोकरी/व्यवसाय"],
        input: {
          placeholder: "",
        },
        isLabelStatic: true,

      },
      {
        id: "income",
        labels: ["वेतन/उत्पन्न"],
        input: {
          placeholder: "",
        },
        isLabelStatic: true,

      },
    ],
  },
  {
    name: "family",
    titles: ["कौटुंबिक महिती"],
    fields: [
      {
        id: "fathername",
        labels: ["वडिलांचे नाव"],
        input: {
          placeholder: "वडिलांचे संपूर्ण नाव",
        },

        isLabelStatic: true,

      },
      {
        id: "fatherOccupation",
        labels: ["वडिलांचा व्यवसाय"],
        input: {
          placeholder: "वडिलांचा व्यवसाय किंवा नोकरी",
        },
        isLabelStatic: true,

      },

      {
        id: "mothername",
        labels: ["आईचे नाव"],
        input: {
          placeholder: "आईचे संपूर्ण नाव",
        },
        isLabelStatic: true,

      },
      {
        id: "sister",
        labels: ["बहीण"],
        input: {
          placeholder: "1 बहीण विवाहित",
        },
        isLabelStatic: true,

      },
      {
        id: "brother",
        labels: ["भाऊ"],
        input: {
          placeholder: "2 भाऊ/1 विवाहित",
        },
        isLabelStatic: true,

      },
      {
        id: "maternalUncle",
        labels: ["मामा"],
        input: {
          placeholder: "मामाचे नाव/आजोळ",
        },
        isLabelStatic: true,

      },
      {
        id: "relations",
        labels: ["नातेसंबंध"],
        input: {
          placeholder: "नातेवाईकांची आडनावे",
        },
        isLabelStatic: true,

      },
      {
        id: "family8",
        labels: ["अपेक्षा"],
        input: {
          placeholder: "",
        },
      },

    ],
  },
  {
    name: "contact",
    titles: ["संपर्क"],
    fields: [
      {
        id: "contact1",
        labels: ["पत्ता"],
        input: {
          placeholder: "Address Line 1",
        },
        isLabelStatic: true,

      },
      {
        id: "contact2",
        labels: ["येथे अतिरिक्त शीर्षक अ‍ॅड करू शकता"],
        input: {
          placeholder: "Address Line 2(Optional)",
        },
        isLabelStatic: true,

      },
      {
        id: "mobileNumber",
        labels: ["मोबाईल नंबर"],
        input: {
          type: "tel",
          placeholder: "1234567890",
        },
        isLabelStatic: true,

      },



    ],
  },
];




