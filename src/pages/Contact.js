import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Zoom from "react-awesome-reveal";
import logoname from '../Assets/logo-name.gif';
import "./contact.css";

const Contact = () => {
  const [submissionStatus, setSubmissionStatus] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(50, "Must be 50 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      message: Yup.string()
        .max(500, "Must be 500 characters or less")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch("http://localhost:4000/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          setSubmissionStatus("Form submitted successfully!");
          formik.resetForm();
        } else {
          setSubmissionStatus("Failed to submit the form. Please try again.");
        }
      } catch (error) {
        setSubmissionStatus("An error occurred. Please try again.");
      }
    },
  });

  useEffect(() => {
    const body = document.querySelector("#root");
    body.scrollIntoView({ behavior: "smooth" }, 500);
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="contatct-page" id="Contact">
            <h1 className="title">Contact Us</h1>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  {...formik.getFieldProps("name")}
                />
                {formik.touched.name && formik.errors.name && (
                  <div className="text-danger">{formik.errors.name}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-danger">{formik.errors.email}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="3"
                  {...formik.getFieldProps("message")}
                ></textarea>
                {formik.touched.message && formik.errors.message && (
                  <div className="text-danger">{formik.errors.message}</div>
                )}
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              {submissionStatus && (
                <div className="mt-3 alert alert-info">{submissionStatus}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
