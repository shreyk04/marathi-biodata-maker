import React from 'react'
import FormItem from './FormItem'
import { Select } from 'antd';
import FormSection from './FormSection';

function FamilyInfo() {

 const sections = [
     {name: "कौटुंबिक माहिती ",
      fields: [ 
        {name:'वडिलांचे नाव', label: 'वडिलांचे नाव', placeholder: 'वडिलांचे संपुर्ण नाव' },
        {name: 'आईचे नाव', label: 'आईचे नाव', placeholder: 'आईचे संपुर्ण नाव' },
        { name: 'वडिलांचा व्यवसाय',label: 'वडिलांचा व्यवसाय', placeholder: 'वडिलांचा व्यवसाय किंवा नोकरी' },
        { name: 'बहीण',label: 'बहीण', placeholder: '1 बहीण विवाहित' },
        { name: 'भाऊ',label: 'भाऊ', placeholder: '2 भाऊ/1 विवाहित' },
        { name: 'मामा',label: 'मामा', placeholder: 'मामाचे नाव / आजोळ' },
        { name: 'नातेसंबंध',label: 'नातेसंबंध', placeholder: 'नातेवाईकांचे आडनावे' },
        { name: 'अपेक्षा',label: 'अपेक्षा', placeholder: '' },
      ]},
      {
        
      }
      
    ]
      //   {name: "वडिलांचे नाव", label:"वडिलांचे नाव", "placeholder":"संपुर्ण नाव", isFixed: true},
      // {name: "आईचे नाव", label:"आईचे नाव", "placeholder":"संपुर्ण नाव", isFixed: true},]} , ... ]


  const handleChange = (value) => {
    console.log(value); 
  };
  return (
    <>
    <div className="flex flex-col w-full items-center ">
  <Select
  className='mb-16 bg-blue-600'
  // style={{ backgroundColor: 'green' }}
    labelInValue
    defaultValue={{
      value: 'कौटुंबिक माहिती',
      label: 'कौटुंबिक माहिती',
    }}
    style={{
      width: 200,
    }}
    onChange={handleChange}
    options={[
      {
        value: 'कौटुंबिक माहिती',
        label: 'कौटुंबिक माहिती',
      },
      {
        value: '',
        label: '',
      },

    ]}
  />
    <div className='flex flex-wrap w-full items-center justify-around'>
      {
        sections&& sections.map((section,index)=>(
          <FormSection key={index} fields={section.fields} name={section.name}/>
        ))
      }
        {/* <FormItem label="वडिलांचे नाव"  placeholder2="वडिलांचे संपुर्ण नाव"/>
        <FormItem label="आईचे नाव"  placeholder2="आईचे संपुर्ण नाव"/>
        <FormItem label="वडिलांचा व्यवसाय"  placeholder2="वडिलांचा व्यवसाय किंवा नोकरी "/>
        <FormItem label="बहीण"  placeholder2="1 बहीण विवाहित "/>
        <FormItem label="भाऊ"  placeholder2="2 भाऊ/1 विवाहित"/>
        <FormItem label="मामा"  placeholder2="मामाचे नाव / आजोळ "/>
        <FormItem label="नातेसंबंध"  placeholder2="नातेवाईकांचे आडनावे "/>
        <FormItem label="अपेक्षा"  placeholder2=""/> */}
    </div>
    </div>
    </>
  )
}

export default FamilyInfo