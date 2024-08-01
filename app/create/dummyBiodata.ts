const dummyBiodata: FormSectionsType = [
  {
    name: "personal",
    titles: ["बायोडाटा", "परिचय पत्र ", "वैयक्तिक माहिती"],
    fields: [
      {
        id: "name",
        labels: ["नाव", "मुलाचे नाव", "मुलीचे नाव"],
        input: {
          placeholder: "संपूर्ण नाव",
          type: "input",
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
          type: "input",
        },
      },
      {
        id: "birthPlace",
        labels: ["जन्म स्थळ", "जन्म ठिकाण "],
        input: {
          placeholder: "जन्म स्थळ",
          type: "input",
        },
      },
      {
        id: "caste",
        labels: ["धर्म", "जात"],
        input: {
          placeholder: "धर्म-जात",
          type: "input",
        },
      },
      {
        id: "kuldevi",
        labels: ["कुलदैवत"],
        input: {
          placeholder: "",
          type: "input",
        },
        isLabelStatic: true,
      },
      {
        id: "gotra",
        labels: ["गोत्र"],
        input: {
          placeholder: "",
          type: "input",
        },
        isLabelStatic: true,
      },
      {
        id: "devak",
        labels: ["देवक"],
        input: {
          placeholder: "",
          type: "input",
        },
        isLabelStatic: true,
      },
      {
        id: "nakshatra",
        labels: ["नक्षत्र"],
        input: {
          placeholder: "",
          type: "input",
        },
        isLabelStatic: true,
      },
      {
        id: "gan",
        labels: ["गण"],
        input: {
          placeholder: "",
          type: "input",
        },
        isLabelStatic: true,
      },
      {
        id: "rashi",
        labels: ["राशी"],
        input: {
          placeholder: "",
          type: "input",
        },
        isLabelStatic: true,
      },
      {
        id: "nadi",
        labels: ["नाडी"],
        input: {
          placeholder: "",
          type: "input",
        },
        isLabelStatic: true,
      },
      {
        id: "height",
        labels: ["ऊंची"],
        input: {
          placeholder: "",
          type: "number",
        },
        isLabelStatic: true,
      },
      {
        id: "varna",
        labels: ["वर्ण"],
        input: {
          placeholder: "",
          type: "input",
        },
        isLabelStatic: true,
      },
      {
        id: "bloodGroup",
        labels: ["रक्तगट"],
        input: {
          placeholder: "",
          type: "input",
        },
        isLabelStatic: true,
      },
      {
        id: "education",
        labels: ["शिक्षण"],
        input: {
          placeholder: "",
          type: "input",
        },
        isLabelStatic: true,
      },
      {
        id: "occupation",
        labels: ["नोकरी/व्यवसाय"],
        input: {
          placeholder: "",
          type: "input",
        },
        isLabelStatic: true,
      },
      {
        id: "income",
        labels: ["वेतन/उत्पन्न"],
        input: {
          placeholder: "",
          type: "input",
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
          type: "input",
        },
        isLabelStatic: true,
      },
      {
        id: "fatherOccupation",
        labels: ["वडिलांचा व्यवसाय"],
        input: {
          placeholder: "वडिलांचा व्यवसाय किंवा नोकरी",
          type: "input",
        },
        isLabelStatic: true,
      },
      {
        id: "mothername",
        labels: ["आईचे नाव"],
        input: {
          placeholder: "आईचे संपूर्ण नाव",
          type: "input",
        },
        isLabelStatic: true,
      },
      {
        id: "sister",
        labels: ["बहीण"],
        input: {
          placeholder: "1 बहीण विवाहित",
          type: "input",
        },
        isLabelStatic: true,
      },
      {
        id: "brother",
        labels: ["भाऊ"],
        input: {
          placeholder: "2 भाऊ/1 विवाहित",
          type: "input",
        },
        isLabelStatic: true,
      },
      {
        id: "maternalUncle",
        labels: ["मामा"],
        input: {
          placeholder: "मामाचे नाव/आजोळ",
          type: "input",
        },
        isLabelStatic: true,
      },
      {
        id: "relations",
        labels: ["नातेसंबंध"],
        input: {
          placeholder: "नातेवाईकांची आडनावे",
          type: "input",
        },
        isLabelStatic: true,
      },
      {
        id: "family8",
        labels: ["अपेक्षा"],
        input: {
          placeholder: "",
          type: "input",
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
          type: "input",
        },
        isLabelStatic: true,
      },
      {
        id: "contact2",
        labels: ["येथे अतिरिक्त शीर्षक अ‍ॅड करू शकता"],
        input: {
          placeholder: "Address Line 2(Optional)",
          type: "input",
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

export default dummyBiodata;
