import React from 'react'
import FormItem from './FormItem'
import { Select } from 'antd';
import FormSection from './FormSection';

function ContactInfo() {


    const contactFields = [
        { name: 'पत्ता', label: 'Address Line 1', placeholder: 'Address Line 1' },
        { name: '', label: '', placeholder: 'Address Line 2 (Optional)' },
        { name: 'मोबाईल नंबर', label: 'मोबाईल नंबर', placeholder: 'मोबाईल नंबर' },
      ];

    const handleChange = (value) => {
        console.log(value); 
      };

  return (
    <>
    
    <div className="flex flex-col w-full items-center">
  {/* <h1>कौटुंबिक माहिती </h1> */}
  <Select
  className='mb-16 bg-blue-600'
  // style={{ backgroundColor: 'green' }}
    labelInValue
    defaultValue={{
      value: 'संपर्क ',
      label: 'संपर्क ',
    }}
    style={{
      width: 200,
    }}
    onChange={handleChange}
    options={[
      {
        value: 'संपर्क ',
        label: 'संपर्क ',
      },
      {
        value: '',
        label: '',
      },

    ]}
  />

  <div className="contact-info flex justify-between w-4/5">
    

    <FormSection fields={contactFields} name="Contact"/>
  </div>
  </div>
    </>
  )
}

export default ContactInfo