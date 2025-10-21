import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import MyButton from "../../UI/MyButton/MyButton.jsx";
import * as Yup from "yup";
import toast from "react-hot-toast";
import MyCalendar from "../../UI/MyCalendar/MyCalendar.jsx";
import "react-datepicker/dist/react-datepicker.css";
import "./MyCalendar.css";

const CamperForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .trim()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    email: Yup.string()
      .trim()
      .email("Invalid email format")
      .required("Email is required"),
    date: Yup.date()
      .min(new Date(new Date().setHours(0, 0, 0, 0)), "Date cannot be in the past")
      .max(new Date(2100, 0, 1), "Date is too far in the future")
      .required("Booking date is required"),
    comment: Yup.string().max(500, "Comment is too long (max 500 characters)"),
  });

  const formatDate = date => {
    if (!date) return "";
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleSubmit = (values, actions) => {
    const payload = {
      id: Date.now(),
      name: values.name.trim(),
      email: values.email.trim(),
      date: formatDate(values.date) || "",
      comment: values.comment || "",
    };
    console.log(payload);
    toast.success(
      "You have successfully booked your campervan! Check your email for details"
    );
    actions.resetForm();
  };

  return (
    <div className="p-11 border border-gray-300 rounded-xl h-full w-full">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold">Book your campervan now</h3>
          <p className="text-[#6C717B]">
            Stay connected! We are always ready to help you.
          </p>
        </div>
        <Formik
          initialValues={{
            name: "",
            email: "",
            date: null,
            comment: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="flex flex-col gap-4">
              <div className="flex flex-col gap-3.5">
                <Field
                  className="p-4.5 outline-none border border-gray-300 focus:border-[var(--color-text)] rounded-xl transition"
                  type="text"
                  name="name"
                  placeholder="Name*"
                />
                <ErrorMessage className="text-red-600" name="name" component="span" />
                <Field
                  className="p-4.5 outline-none border border-gray-300 focus:border-[var(--color-text)] rounded-xl transition"
                  type="email"
                  name="email"
                  placeholder="Email*"
                />
                <ErrorMessage className="text-red-600" name="email" component="span" />
                <MyCalendar
                  classname="p-4.5 outline-none border border-gray-300 focus:border-[var(--color-text)] rounded-xl transition w-full"
                  name="date"
                  placeholder={"Booking date*"}
                />
                <ErrorMessage className="text-red-600" name="date" component="span" />
                <Field
                  className="p-4.5 outline-none border border-gray-300 focus:border-[var(--color-text)] rounded-xl transition resize-none  "
                  as="textarea"
                  rows={4}
                  name="comment"
                  placeholder="Comment"
                />
                <ErrorMessage className="text-red-600" name="comment" component="span" />
              </div>
              <MyButton type="submit">Send</MyButton>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CamperForm;
