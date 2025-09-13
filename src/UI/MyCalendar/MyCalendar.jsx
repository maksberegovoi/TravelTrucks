import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useField } from "formik";
import "./MyCalendar.css";
import "react-datepicker/dist/react-datepicker.css";

const MyCalendar = ({ name = "date", placeholder, classname = "" }) => {
  const [field, meta, helpers] = useField(name);

  const handleDateChange = date => {
    helpers.setValue(date);
  };

  return (
    <DatePicker
      selected={field.value}
      onChange={handleDateChange}
      placeholderText={placeholder}
      className={classname}
      dateFormat="dd/MM/yyyy"
    />
  );
};

export default MyCalendar;
