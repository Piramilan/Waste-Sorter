import React from "react";

const WasteManagement = () => {
  return (
    <div className="mt-8 mx-auto flex flex-col lg:flex-row lg:w-[80vw] justify-center text-white">
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-4">PROBLEM</h1>
        <p className="mb-4">
          Waste management is a big problem in our country. <br />
          Most of the wastes end up in landfills. This leads to many issues
          like:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Increase in landfills</li>
          <li>Eutrophication</li>
          <li>Consumption of toxic waste by animals</li>
          <li>Leachate</li>
          <li>Increase in toxins</li>
          <li>Land, water and air pollution</li>
        </ul>
      </div>
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-4">APPROACH</h1>
        <ol className="list-decimal list-inside mb-4">
          <li>Studied white papers on waste management</li>
          <li>Analysed the components of household waste</li>
          <li>Segregated into two classes (Organic and recyclable)</li>
          <li>Automated the process by using IOT and machine learning</li>
          <li>Reduce toxic waste ending in landfills</li>
        </ol>
      </div>
    </div>
  );
};

export default WasteManagement;
