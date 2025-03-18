'use client'
import React, { useContext } from 'react'
import { useForm } from '../_context/store';
import { useTemplate } from '../_context/TemplateContext';


export default function FinalBiodata() {

    const {selectedTemplate} = useTemplate();

    const {form} = useForm();

    console.log(form);
    

    if(!selectedTemplate)
        return <h1>Please select template</h1>


    const SelectedTemplateRender = selectedTemplate.component;

  return (
    <SelectedTemplateRender  {...selectedTemplate.props} isFinal={true} form={form}/>
  )
}
