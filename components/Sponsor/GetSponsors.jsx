import { useField, Formik, Form } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  Firstname: Yup.string().required("Firstname is required"),
  Lastname: Yup.string().required("Lastname is required"),
  Email: Yup.string().required("Email is required"),
  Phone: Yup.string().required("Phone is required"),
  Industry: Yup.string().required("Industry is required"),
  Socialmedia: Yup.string().required("Socialmedia is required"),
  Followers: Yup.string().required("Followers is required"),
  Twitch: Yup.string().required("Twitch is required"),
  Reddit: Yup.string().required("Reddit is required"),
  Youtube: Yup.string().required("Youtube is required"),
  Tiktok: Yup.string().required("Tiktok is required"),
  Instagram: Yup.string().required("Instagram is required"),
});

const initialValues = {
  Firstname: "",
  Lastname: "",
  Email: "",
  Phone: "",
  Industry: "",
  Socialmedia: "",
  Followers: "",
  Twitch: "",
  Reddit: "",
  Youtube: "",
  Tiktok: "",
  Instagram: "",
};

const MyInputArea = (props) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 w-full px-6 mb-3 rounded">
      <label
        htmlFor={props.name}
        className="text-appYellow-100 flex items-center"
      >
        {props.label}*
      </label>
      <input
        className="h-10 w-full bg-transparent rounded pl-4 border outline-none"
        id="message"
        {...field}
        {...props}
        style={{
          backgroundColor: "#05080F",
          color: "grey",
          borderColor: "#3B3F49",
        }}
      />
      {meta.touched && meta.error ? (
        <p className="text-xs md:sm lg:base text-red-500 mt-1">{meta.error}</p>
      ) : null}
    </div>
  );
};

const FormButton = () => {
  return (
    <div className="pl-6 mt-4 lg:flex justify-center">
      <button
        className="bg-appYellow-100 px-8 py-3 rounded text-white text-xs font-bold"
        type="submit"
      >
        SUBMIT
      </button>
    </div>
  );
};

export const PcForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={() => console.log("")}
    >
      <Form>
        <div className="flex">
          <div className="flex-1">
            <MyInputArea
              name="First name"
              label="First name"
              type="text"
              placeholder="First name"
            />
            <MyInputArea
              name="Phonenumber"
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
              name="Tik-Tok"
              label="Tik-Tok"
              type="text"
              placeholder="Enter Tik-Tok url"
            />
          </div>
          <div className="flex-1">
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
              placeholder="Enter Twitch url"
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
          </div>
        </div>
        <FormButton />
      </Form>
    </Formik>
  );
};

export const MobileForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={() => console.log("")}
    >
      <Form>
        <MyInputArea
          name="First name"
          label="First name"
          type="text"
          placeholder="First name"
        />
        <MyInputArea
          name="Phonenumber"
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
          name="Tik-Tok"
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
          Enter
          Twitch
          url
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
        <FormButton />
      </Form>
    </Formik>
  );
};

// eslint-disable-next-line import/no-anonymous-default-export
// export default {PcForm , MobileForm};
