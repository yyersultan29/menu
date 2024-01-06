'use client'

import { useState } from "react"

import { sections } from "@/mock/data"

function Sections() {

  const [active, setActive] = useState(sections[0].id);


  const scrollToElement = (sectionId: string) => {

    const sectionDiv = document.getElementById(sectionId);

    sectionDiv?.scrollIntoView({ behavior: "smooth" });

    setActive(sectionId);
  }


  return (

    <div className="sticky top-[64px] left-0 z-10 w-full  bg-white  shadow-lg shadow-gray-200/40" >
      <div className="w-full overflow-x-auto whitespace-nowrap overflow-x-hide " >
        <div className="flex">
          {sections.map((section, index) => (


            <div
              key={`${section.id}*${index}`}
              onClick={() => scrollToElement(section.id)}
              className={`
                text-center inline-block  
                cursor-pointer
                box-content hover:bg-slate-100 pl-5 pr-5 pb-2 pt-2 
                ${active === section.id ?
                  "border-b-2 border-green-500 text-green-500" :
                  ""} 
                `}
            >
              {section.name}
            </div>

          ))}
        </div>
      </div>
    </div>

  )
}

export default Sections