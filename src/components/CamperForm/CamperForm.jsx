import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import MyButton from "../../UI/MyButton/MyButton.jsx";
import styles from "./CamperForm.module.css";
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
      .min(new Date(new Date().setHours(0, 0, 0, 0)), "Date cannot be in the" + " past")
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
    <div className={styles.formContainer}>
      <div className={styles.formCard}>
        <div className={styles.formHeader}>
          <h3 className={styles.formTitle}>Book your campervan now</h3>
          <p className={styles.formSubtitle}>
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
            <Form className={styles.form}>
              <div className={styles.formFields}>
                <Field
                  type="text"
                  name="name"
                  placeholder="Name*"
                  className={styles.formInput}
                />
                <ErrorMessage name="name" component="span" className={styles.error} />

                <Field
                  type="email"
                  name="email"
                  placeholder="Email*"
                  className={styles.formInput}
                />
                <ErrorMessage name="email" component="span" className={styles.error} />

                {/*<Field*/}
                {/*  type="date"*/}
                {/*  name="date"*/}
                {/*  placeholder="Booking date*"*/}
                {/*  min={todayYMD()}*/}
                {/*  className={styles.formInput}*/}
                {/*/>*/}
                {/*<ErrorMessage name="date" component="span" className={styles.error} />*/}
                <MyCalendar
                  name="date"
                  classname={styles.formInput}
                  placeholder={"Booking date*"}
                />
                <Field
                  as="textarea"
                  name="comment"
                  placeholder="Comment"
                  className={styles.formTextarea}
                />
                <ErrorMessage name="comment" component="span" className={styles.error} />
              </div>
              <MyButton type="submit" className={styles.button}>
                Send
              </MyButton>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CamperForm;
