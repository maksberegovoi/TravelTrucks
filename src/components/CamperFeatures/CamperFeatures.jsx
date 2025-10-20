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
    <div>
      <div>
        <CamperBadges camper={camper} showAll={true} />
      </div>
      <div>
        <h3>Vehicle details</h3>
        <div>
          <div>
            <span>Form</span>
            <span>{camperForms[camper.form] || "***"}</span>
          </div>
          <div>
            <span>Length</span>
            <span>{camper.length || "***"}</span>
          </div>
          <div>
            <span>Width</span>
            <span>{camper.width || "***"}</span>
          </div>
          <div>
            <span>Height</span>
            <span>{camper.height || "***"}</span>
          </div>
          <div>
            <span>Tank</span>
            <span>{camper.tank || "***"}</span>
          </div>
          <div>
            <span>Consumption</span>
            <span>{camper.consumption || "***"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CamperFeatures;
