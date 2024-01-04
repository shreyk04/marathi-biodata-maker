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
          name:"personal4",
          placeholder:"नावरस नाव/जन्म नाव",
        }
      },
      {
        labels:["धर्म","जात"],
        input:{
          name:"personal4",
          placeholder:"धर्म-जात",
        }
      },
    ],
  },
];
