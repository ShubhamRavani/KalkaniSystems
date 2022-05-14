import React from "react";
import Domainsapi from "../domainApi.json";

export default function DomainsDemo() {
 
  
  return (
    <div>
      <div className=" w-[100%] h-[90vh] px-5 py-6 flex flex-col justify-between">
        <div>
          {Domainsapi.map((items) => (
            <>
              <div className=" flex items-center py-4 px-3 hover:bg-gray-200 cursor-pointer xs:py-9 ">
                <div className=" pr-5 ">{items.domain}</div>
                <p>{items.create_date}</p>
                <p>{items.update_date}</p>
              </div>
            </>
          ))}
        </div>

        
      </div>
    </div>
  );
}