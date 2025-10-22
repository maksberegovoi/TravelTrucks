import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { resetPagination } from "../../redux/reducers/campers/campersSlice.js";
import Location from "../../components/Location/Location.jsx";
import {
  selectFilterEquipment,
  selectFilterType,
} from "../../redux/reducers/filters/selectors.js";
import {
  changeFilterEquipment,
  changeFilterType,
} from "../../redux/reducers/filters/filtersSlice.js";
import MyButton from "../../UI/MyButton/MyButton.jsx";

const CatalogFilter = ({ closeFilters }) => {
  const dispatch = useDispatch();
  const equipment = [
    { label: "AC", src: iconAC },
    { label: "Bathroom", src: iconBathroom },
    { label: "Kitchen", src: iconKitchen },
    { label: "TV", src: iconTV },
    { label: "Radio", src: iconRadio },
    { label: "Water", src: iconWater },
    { label: "Gas", src: iconGas },
    { label: "Microwave", src: iconMicrowave },
    { label: "Refrigerator", src: iconRefrigator },
  ];
  const type = [
    { key: "van", label: "panelTruck", src: iconVan },
    { key: "alcove", label: "alcove", src: iconAlcove },
    { key: "fully integrated", label: "fullyIntegrated", src: iconFullyIntegrated },
  ];

  const filterEquipment = useSelector(selectFilterEquipment);
  const filterType = useSelector(selectFilterType);

  const selectEquipment = label => {
    if (filterEquipment.includes(label)) {
      dispatch(changeFilterEquipment(filterEquipment.filter(filter => filter !== label)));
    } else {
      dispatch(changeFilterEquipment([...filterEquipment, label]));
    }
  };

  const selectType = label => {
    if (filterType.includes(label)) {
      dispatch(changeFilterType(filterType.filter(filter => filter !== label)));
    } else {
      dispatch(changeFilterType([...filterType, label]));
    }
  };

  useEffect(() => {
    dispatch(resetPagination());
  }, [filterEquipment, filterType, dispatch]);

  return (
    <div className="flex flex-col gap-5 h-full py-8 px-5">
      <Location />
      <p className="text-[#6C717B]">Filters</p>
      <div className="flex flex-col gap-4">
        <h3
          className="
        font-semibold"
        >
          Vehicle equipment
        </h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 place-items-center gap-y-2 capitalize">
          {equipment.map(({ label, src }) => (
            <li
              key={label}
              className={`flex items-center justify-center rounded-[12px]
              gap-5 py-5 min-w-[110px] ${filterEquipment.includes(label) && "border border-[var(--color-accent)]"}`}
            >
              <button
                className="flex flex-col items-center gap-2 cursor-pointer w-full h-full capitalize"
                onClick={() => selectEquipment(label)}
                type="button"
              >
                <img className="w-[32px] h-[32px]" src={src} alt={`${label} icon`} />
                {label}
              </button>
            </li>
          ))}
        </ul>
        <h3 className="font-semibold">Vehicle equipment</h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 place-items-center gap-y-2">
          {type.map(({ key, label, src }) => (
            <li
              className={`flex items-center justify-center rounded-[12px]
              gap-5 py-5 min-w-[110px] ${filterType.includes(label) && "border border-[var(--color-accent)]"}`}
            >
              <button
                className="flex flex-col gap-1 items-center justify-center cursor-pointer w-full h-full"
                type="button"
                onClick={() => selectType(label)}
              >
                <img src={src} alt={`${label} icon`} aria-label={label} />
                <span className="capitalize text-wrap">{key}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto flex items-center justify-center pb-5">
        <MyButton handleClick={closeFilters}>Close Filters</MyButton>
      </div>
    </div>
  );
};

export default CatalogFilter;
