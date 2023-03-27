import React from "react";

const WasteManagement = () => {
  return (
    <div className="mt-8 lg:mt-10 mx-auto max-w-[85%] flex flex-col lg:flex-row lg:w-[80vw] justify-center text-white">
      <div className="flex-1 mb-4">
        <h1 className="text-2xl font-bold mb-2">PROBLEM</h1>
        <p className="mb-4">
          Waste management is a big problem in our country. <br />
          Most of the wastes end up in landfills. This leads to many issues
          like:
        </p>
        <ul className="list-disc mb-4 ml-3">
          <li>Increase in landfills</li>
          <li>Eutrophication</li>
          <li>Consumption of toxic waste by animals</li>
          <li>Leachate</li>
          <li>Increase in toxins</li>
          <li>Land, water and air pollution</li>
        </ul>
      </div>
      <div className="flex-1 lg:mb-4">
        <h1 className="text-2xl font-bold mb-2">APPROACH</h1>
        <p className="mb-4">
          To address these problems, an effective waste <br />
          management approach should be adopted. The approach can include:
        </p>
        <ul className="list-disc mb-4 ml-3">
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
