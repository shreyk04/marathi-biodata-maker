import React from "react";
import { Select, Input } from "antd";

function PersonalInfo() {
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <>
      <div>
        <div className="row">
          <Select
            showSearch
            placeholder="नाव"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={filterOption}
            className="w-80 mb-2"
            bordered={false}
            defaultValue="नाव "
            options={[
              {
                value: "नाव",
                label: "नाव",
              },
              {
                value: "मुलाचे नाव",
                label: "मुलाचे नाव",
              },
              {
                value: "मुलीचे नाव",
                label: "मुलीचे नाव",
              },
            ]}
          />
          <Input placeholder="संपूर्ण नाव" className="mb-6" />
        </div>

        <div className="row flex justify-around">
          <div className="col">
            <Select
              showSearch
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={filterOption}
              className="w-80 mb-8"
              defaultValue="जन्म वेळ "
              options={[
                {
                  value: "जन्म वेळ ",
                  label: "जन्म वेळ ",
                },
                {
                  value: "जन्म वार",
                  label: "जन्म वार ",
                },
                {
                  value: "जन्म  वेळ व  वार",
                  label: "जन्म  वेळ व  वार",
                },
              ]}
            />
            <Input placeholder="जन्माची वेळ " className="mb-6" />
          </div>
          <div className="col">
            <Select
              showSearch
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={filterOption}
              className="w-80 mb-8"
              defaultValue="जन्म स्थळ"
              options={[
                {
                  value: "जन्म स्थळ",
                  label: "जन्म स्थळ",
                },
                {
                  value: "जन्म ठिकाण",
                  label: "जन्म ठिकाण",
                },
            
              ]}
            />
            <Input placeholder="जन्म स्थळ" className="mb-6" />
          </div>
          <div className="col">
            <Select
              showSearch
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={filterOption}
              className="w-80 mb-8"
              defaultValue="नावरस नाव"
              options={[
                {
                  value: "नावरस नाव",
                  label: "नावरस नाव",
                },
                {
                  value: "रास नाव",
                  label: "रास नाव",
                },
                {
                  value: "जन्म नाव",
                  label: "जन्म नाव",
                },
              ]}
            />
            <Input placeholder="नावरस नाव/जन्म नाव" className="mb-6" />
          </div>
          <div className="col">
            <Select
              showSearch
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={filterOption}
              className="w-80 mb-8"
              defaultValue="धर्म-जात"
              options={[
                {
                  value: "धर्म-जात",
                  label: "धर्म-जात",
                },
                {
                  value: "धर्म",
                  label: "धर्म",
                },
                {
                  value: "जात",
                  label: "जात",
                },
              ]}
            />
            <Input placeholder="धर्म-जात" className="mb-6" />
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalInfo;
