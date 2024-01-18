import { FormSectionsType } from "./FormSectionTypes";

export const biodataForm: FormSectionsType = [
  {
    name: "personal",
    titles: ["बायोडाटा", "परिचय पत्र ", "वैयक्तिक माहिती"],
    fields: [
      {
        labels: ["नाव", "मुलाचे नाव", "मुलीचे नाव"],
        input: {
          name: "personal1",
          placeholder: "संपूर्ण नाव",
        },
      },
      {
        labels: ["जन्मतारीख"],
        input: {
          name: "personal2",
          type: "date",
        },
      },
      {
        labels:["जन्म वेळ","जन्म वार","जन्म वार व वेळ"],
        input:{
          name:"personal3",
          placeholder:"जन्माची वेळ",
        }
      },
      {
        labels:["जन्म स्थळ","जन्म ठिकाण "],
        input:{
          name:"personal4",
          placeholder:"जन्म स्थळ",
        }
      },
      {
        labels:["नावरस नाव","रास नाव","जन्म नाव"],
        input:{
          name:"personal5",
          placeholder:"नावरस नाव/जन्म नाव",
        }
      },
      {
        labels:["धर्म","जात"],
        input:{
          name:"personal6",
          placeholder:"धर्म-जात",
        }
      },
    ],
  },
  {
    name: "family",
    titles: ["कौटुंबिक महिती"],
    fields: [
      {
        labels: ["वडिलांचे नाव"],
        input: {
          name: "family1",
          placeholder: "वडिलांचे संपूर्ण नाव",
        },
      },
      {
        labels: ["वडिलांचा व्यवसाय"],
        input: {
          name: "family2",
          placeholder:"वडिलांचा व्यवसाय किंवा नोकरी",
        },
      },
      
      {
        labels: ["आईचे नाव"],
        input: {
          name: "family3",
          placeholder:"आईचे संपूर्ण नाव",
        },
      },
      {
        labels: ["बहीण"],
        input: {
          name: "family4",
          placeholder:"1 बहीण विवाहित",
        },
      },
      {
        labels: ["भाऊ"],
        input: {
          name: "family5",
          placeholder:"2 भाऊ/1 विवाहित",
        },
      },
      {
        labels: ["मामा"],
        input: {
          name: "family6",
          placeholder:"मामाचे नाव/आजोळ",
        },
      },
      {
        labels: ["नातेसंबंध"],
        input: {
          name: "family7",
          placeholder:"नातेवाईकांची आडनावे",
        },
      },
      {
        labels: ["अपेक्षा"],
        input: {
          name: "family8",
          placeholder:"",
        },
      },
      
    ],
  },
  {
    name: "contact",
    titles: ["संपर्क"],
    fields: [
      {
        labels: ["पत्ता"],
        input: {
          name: "contact1",
          placeholder: "Address Line 1",
        },
      },
      {
        labels: ["येथे अतिरिक्त शीर्षक अ‍ॅड करू शकता"],
        input: {
          name: "contact2",
          placeholder: "Address Line 2(Optional)",
        },
      },
      {
        labels: ["मोबाईल नंबर"],
        input: {
          name: "contact3",
          placeholder: "",
        },
      },
     
      
    ],
  },
];
