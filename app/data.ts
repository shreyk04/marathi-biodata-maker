import TemplateRender from "./_template/TemplateRender";
import dummyBiodataList from "./create/dummyBiodata";

export const Templates = [

    {
      id: 0,
      component: TemplateRender,
      props: { backgroundImageSrc: "/images/frame-1.jpg", height: "80vh" ,left_offset:"30px", withPhoto: false},
      form: dummyBiodataList[0]
    },
    {
      id: 1,
      component: TemplateRender,
      props: { backgroundImageSrc: "/images/frame-1.jpg", height: "80vh" ,left_offset:"30px", withPhoto: true},
      form: dummyBiodataList[1]
    },
    {
      id: 2,
      component: TemplateRender,
      props: { backgroundImageSrc: "/images/frame-2.jpg", height: "80vh" ,left_offset:"30px", withPhoto: false},
      form: dummyBiodataList[0]
    },
    {
      id: 3,
      component: TemplateRender,
      props: { backgroundImageSrc: "/images/frame-3.jpg", height: "80vh",left_offset:"30px" , withPhoto: false},
      form: dummyBiodataList[0]

   
    },
    {
      id: 4,
      component: TemplateRender,
      props: { backgroundImageSrc: "/images/frame-4.jpg", height: "80vh",left_offset:"10px", withPhoto: true },
      form: dummyBiodataList[0]

   
    },
    {
      id: 44,
      component: TemplateRender,
      props: { backgroundImageSrc: "/images/frame-4.jpg", height: "80vh",left_offset:"10px" , withPhoto: false},
      form: dummyBiodataList[0]

   
    },
    {
      id: 5,
      component: TemplateRender,
      props: { backgroundImageSrc: "/images/frame-5.jpg", height: "80vh" ,left_offset:"10px", withPhoto : false } ,
      form: dummyBiodataList[1]

    },
    { id: 6,
  
      component: TemplateRender,
      props: { backgroundImageSrc: "/images/frame-6.jpg", height: "80vh" ,left_offset:"30px", withPhoto : false },
            form: dummyBiodataList[1]

    
  
    },
    { id: 66,
  
        component: TemplateRender,
        props: { backgroundImageSrc: "/images/frame-6.jpg", height: "80vh" ,left_offset:"30px", withPhoto:true},
              form: dummyBiodataList[0]

      
    
      },
    {
  
      id: 7,
  
      component: TemplateRender,
      props: { backgroundImageSrc: "/images/frame-7.jpg", height: "80vh" ,left_offset:"10px", withPhoto : false },
      form: dummyBiodataList[0]

    
    },
    {
  
      id: 8,
  
      component: TemplateRender,
      props: { backgroundImageSrc: "/images/frame-8.jpg", height: "80vh" ,left_offset:"10px", withPhoto : false },
      form: dummyBiodataList[1]

    
    },
    {
      
      id: 9,
  
      component: TemplateRender,
      props: { backgroundImageSrc: "/images/frame-9.jpg", height: "80vh" ,left_offset:"10px", withPhoto : false },
      form: dummyBiodataList[0]

   
    }
  ]