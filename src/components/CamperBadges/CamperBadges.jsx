import iconTransmission from "../../assets/icons/badges/transmission.svg";
import iconPetrol from "../../assets/icons/badges/petrol.svg";
import iconVan from "../../assets/icons/badges/van.svg";
import iconAlcove from "../../assets/icons/badges/alcove.svg";
import iconFullyIntegrated from "../../assets/icons/badges/fullyIntegrated.svg";
import iconAC from "../../assets/icons/badges/AC.svg";
import iconBathroom from "../../assets/icons/badges/bathroom.svg";
import iconKitchen from "../../assets/icons/badges/kitchen.svg";
import iconTV from "../../assets/icons/badges/tv.svg";
import iconRefrigator from "../../assets/icons/badges/refrigator.svg";
import iconWater from "../../assets/icons/badges/water.svg";
import iconRadio from "../../assets/icons/badges/radio.svg";
import iconGas from "../../assets/icons/badges/gas.svg";
import iconMicrowave from "../../assets/icons/badges/microwave.svg";

const CamperBadges = ({ camper, showAll = false, itemsToShow = 3 }) => {
  const formIcons = {
    panelTruck: iconVan,
    alcove: iconAlcove,
    fullyIntegrated: iconFullyIntegrated,
  };
  const camperForm = camper?.form || "";
  const camperEngine = camper?.engine || "";
  const camperTransmission = camper?.transmission || "";

  const badges = [
    { key: "AC", label: "AC", src: iconAC },
    { key: "bathroom", label: "bathroom", src: iconBathroom },
    { key: "kitchen", label: "kitchen", src: iconKitchen },
    { key: "TV", label: "TV", src: iconTV },
    { key: "radio", label: "radio", src: iconRadio },
    { key: "water", label: "water", src: iconWater },
    { key: "gas", label: "gas", src: iconGas },
    { key: "microwave", label: "microwave", src: iconMicrowave },
    { key: "refrigator", label: "refrigator", src: iconRefrigator },
  ];

  const availableBadges = badges.filter(({ key }) => Boolean(camper && camper[key]));
  const badgesToShow = showAll
    ? availableBadges
    : availableBadges.slice(0, itemsToShow - 3);

  const camperName = () => {
    switch (camperForm) {
      case "panelTruck":
        return "Van";
      case "fullyIntegrated":
        return "Fully Integrated";
      case "alcove":
        return "alcove";
      default:
        return "unknown";
    }
  };

  if (!camper || camper?.length === 0) return null;

  return (
    <ul className="flex gap-2 flex-wrap">
      <li className="flex items-center justify-center gap-2 capitalize px-4.5 py-3">
        <img src={iconTransmission} alt="icon transmission" /> {camperTransmission}
      </li>
      <li className="flex items-center justify-center gap-2 capitalize px-4.5 py-3">
        <img src={iconPetrol} alt="icon engine" /> {camperEngine}
      </li>
      <li className="flex items-center justify-center gap-2 capitalize px-4.5 py-3">
        <img src={formIcons[camperForm]} alt="icon form" /> {camperName()}
      </li>
      {badgesToShow.map(({ key, label, src }) => (
        <li
          key={key}
          className="flex items-center justify-center gap-2 capitalize px-4.5 py-3"
        >
          <img src={src} alt={`${label} icon`} /> {label}
        </li>
      ))}
    </ul>
  );
};

export default CamperBadges;
