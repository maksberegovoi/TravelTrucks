import React from "react";
import CamperBadges from "../CamperBadges/CamperBadges.jsx";
import { useSelector } from "react-redux";
import { selectCamperById } from "../../redux/reducers/campers/selectors.js";

const CamperFeatures = () => {
  const camper = useSelector(selectCamperById);
  const camperForms = {
    panelTruck: "Van",
    fullyIntegrated: "Fully Integrated",
    alcove: "Alcove",
  };

  return (
    <div className="p-11 flex flex-col gap-10 justify-between w-full h-full border border-gray-300 rounded-xl">
      <CamperBadges camper={camper} showAll={true} />
      <div className="flex-col flex gap-5">
        <h3 className="font-semibold md:text-xl">Vehicle details</h3>
        <div
          className="flex-col flex font-medium
        [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-gray-300
        "
        >
          <div className="flex items-center justify-between gap-2 flex-wrap py-4">
            <span>Form</span>
            <span>{camperForms[camper.form] || "***"}</span>
          </div>
          <div className="flex items-center justify-between gap-2 flex-wrap py-4">
            <span>Length</span>
            <span>{camper.length || "***"}</span>
          </div>
          <div className="flex items-center justify-between gap-2 flex-wrap py-4">
            <span>Width</span>
            <span>{camper.width || "***"}</span>
          </div>
          <div className="flex items-center justify-between gap-2 flex-wrap py-4">
            <span>Height</span>
            <span>{camper.height || "***"}</span>
          </div>
          <div className="flex items-center justify-between gap-2 flex-wrap py-4">
            <span>Tank</span>
            <span>{camper.tank || "***"}</span>
          </div>
          <div className="flex items-center justify-between gap-2 flex-wrap py-4">
            <span>Consumption</span>
            <span>{camper.consumption || "***"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CamperFeatures;
