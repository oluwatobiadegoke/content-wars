import { useState, useEffect } from "react";
import { Formik, Form } from "formik";

import { validationSchema, initialValues } from "./utils";
import { MyInputArea } from "../GetSponsors";
import Alert from "../../General/Alert";

const MobileForm = () => {
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const [gotInfo, setGotInfo] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setGotInfo(false);
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [gotInfo]);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, action) => {
        action.setSubmitting(true);
        setSubmitting(true);
        fetch("/api/sponsor", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(values),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.response === 1) {
              setGotInfo(true);
              setType("success");
              setMessage("Message sent!");
              action.resetForm();
            } else {
              setGotInfo(true);
              setType("error");
              setMessage("Message not sent. Please, try again.");
            }
            setSubmitting(false);
            action.setSubmitting(false);
          })
          .catch((error) => {
            console.log(error);
            setGotInfo(true);
            setType("error");
            setMessage("Message not sent. Please, try again.");
            setSubmitting(false);
            action.setSubmitting(false);
          });
      }}
    >
      <Form>
        {gotInfo && <Alert type={type} message={message} />}
        <MyInputArea
          name="Firstname"
          label="First name"
          type="text"
          placeholder="First name"
        />
        <MyInputArea
          name="Phone"
          type="text"
          placeholder="Enter phone number"
          label="Phone number"
        />
        <MyInputArea
          name="Industry"
          label="Industry"
          type="text"
          placeholder="Enter Industry"
        />
        <MyInputArea
          name="Followers"
          label="Followers"
          type="text"
          placeholder="Enter Followers"
        />
        <MyInputArea
          name="Reddit"
          label="Reddit"
          type="text"
          placeholder="Enter Reddit url"
        />
        <MyInputArea
          name="Tiktok"
          label="Tik-Tok"
          type="text"
          placeholder="Enter Tik-Tok url"
        />
        <MyInputArea
          name="Lastname"
          label="Last name"
          type="text"
          placeholder="enter Last name"
        />
        <MyInputArea
          name="Email"
          label="Email"
          type="text"
          placeholder="Enter Email"
        />
        <MyInputArea
          name="Socialmedia"
          type="text"
          label="Social media"
          placeholder="Enter Social Media Accounts"
        />
        <MyInputArea
          name="Twitch"
          label="Twitch"
          type="text"
          placeholder="Twitch"
        />
        <MyInputArea
          name="Youtube"
          label="YouTube"
          type="text"
          placeholder="Enter Youtube url"
        />
        <MyInputArea
          name="Instagram"
          label="Instagram"
          type="text"
          placeholder="Enter Instagram url"
        />
        <div className="pl-6 mt-4 lg:flex justify-center">
          <button
            className="bg-appYellow-100 px-8 py-3 rounded text-white text-xs font-bold disabled:opacity-50"
            type="submit"
            disabled={submitting ? true : false}
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default MobileForm;
