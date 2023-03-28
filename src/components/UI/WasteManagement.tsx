import React from "react";

const WasteManagement = () => {
  return (
    <div className="mt-8 lg:mt-20 mx-auto max-w-[85%] xl:max-w-[100%] flex flex-col lg:flex-row lg:w-[80vw] justify-center text-white">
      <div className="flex-1 mb-4 xl:mr-3">
        <h1 className="text-2xl xl:text-[2.15rem] font-bold mb-2 xl:mb-5">
          PROBLEM
        </h1>
        <p className="mb-4 xl:text-[1.5rem] max-w-[85%]">
          Waste management is a big problem in our country. Most of the wastes
          end up in landfills. This leads to many issues like:
        </p>
        <ul className="list-disc mb-4 ml-3 xl:text-[1.25rem]">
          <li>Landfills growing, harming environment</li>
          <li>Eutrophication due to waste accumulation</li>
          <li>Consumption of toxic waste by animals</li>
          <li>Leachate pollutes soil and water</li>
          <li>Increase in toxins,threatening health</li>
          <li>Land, water and air pollution</li>
        </ul>
      </div>
      <div className="flex-1 lg:mb-4 xl:ml-3">
        <h1 className="text-2xl font-bold mb-2 xl:text-[2.15rem] xl:mb-5">
          APPROACH
        </h1>
        <p className="mb-4 xl:text-[1.5rem]  max-w-[85%]">
          To address these problems, an effective waste management approach
          should be adopted. The approach can include:
        </p>
        <ul className="list-disc mb-4 ml-3 xl:text-[1.25rem]">
          <li>Studied white papers on waste management</li>
          <li>Analysed the components of household waste</li>
          <li>Segregated into two classes (Organic and recyclable)</li>
          <li>Automated the process by using IOT and machine learning</li>
          <li>Reduce toxic waste ending in landfills</li>
          <li>Implementing a waste reduction program</li>
        </ul>
      </div>
    </div>
  );
};

export default WasteManagement;
