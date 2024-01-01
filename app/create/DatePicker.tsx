// DatePicker.tsx

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type DatePickerSelectProps = {
  values: string[];
  placeholder: string;
  onSelect: (value: string) => void;
};

const DatePickerSelect: React.FC<DatePickerSelectProps> = ({
  values,
  placeholder,
  onSelect,
}) => (
  <Select>
    <SelectTrigger className="w-full">
      <SelectValue placeholder={placeholder} />
    </SelectTrigger>
    <SelectContent>
      {values.map((value) => (
        <SelectItem key={value} value={value}>
          {value}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);

type DatePickerProps = {
  onDateChange: (selectedDate: string) => void;
};

const DatePicker: React.FC<DatePickerProps> = ({ onDateChange }) => {
  const marathiMonths = [
    "जानेवारी",
    "फेब्रुवारी",
    "मार्च",
    "एप्रिल",
    "मे",
    "जून",
    "जुलै",
    "ऑगस्ट",
    "सप्टेंबर",
    "ऑक्टोबर",
    "नोव्हेंबर",
    "डिसेंबर",
  ];

  const handleDateChange = (day: string, month: string, year: string) => {
    const selectedDate = `${day} ${
      marathiMonths[parseInt(month, 10) - 1]
    } ${year}`;
    onDateChange(selectedDate);
  };

  const days = Array.from({ length: 31 }, (_, index) => (index + 1).toString());
  const months = Array.from({ length: 12 }, (_, index) =>
    (index + 1).toString()
  );
  const years = Array.from({ length: 10 }, (_, index) =>
    (1990 + index).toString()
  );

  return (
    <div className="flex gap-0">
      {/* Day Select */}
      <DatePickerSelect
        values={days}
        placeholder="Day"
        onSelect={(day) => handleDateChange(day, "1", "2022")}
      />

      {/* Month Select */}
      <DatePickerSelect
        values={months.map((month) => marathiMonths[parseInt(month, 10) - 1])}
        placeholder="Month"
        onSelect={(month) =>
          handleDateChange("1", months[marathiMonths.indexOf(month)], "2022")
        }
      />

      {/* Year Select */}
      <DatePickerSelect
        values={years}
        placeholder="Year"
        onSelect={(year) => handleDateChange("1", "1", year)}
      />
    </div>
  );
};

export default DatePicker;
