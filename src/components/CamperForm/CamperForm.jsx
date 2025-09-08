import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import MyButton from "../../UI/MyButton/MyButton.jsx";
import styles from "./CamperForm.module.css";
import * as Yup from "yup";

const todayYMD = () => {
  const d = new Date();
  // Normalize to local today yyyy-MM-dd
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const startOfToday = () => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
};

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
      .min(startOfToday(), "Date cannot be in the past")
      .required("Booking date is required"),
    comment: Yup.string().max(500, "Comment is too long (max 500 characters)"),
  });

  const handleSubmit = (values, actions) => {
    const payload = {
      id: Date.now(),
      name: values.name.trim(),
      email: values.email.trim(),
      date: values.date,
      comment: values.comment || "",
    };
    console.log(payload);
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
            date: "",
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

                <Field
                  type="date"
                  name="date"
                  placeholder="Booking date*"
                  min={todayYMD()}
                  className={styles.formInput}
                />
                <ErrorMessage name="date" component="span" className={styles.error} />

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
