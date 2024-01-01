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
    ],
  },
];
