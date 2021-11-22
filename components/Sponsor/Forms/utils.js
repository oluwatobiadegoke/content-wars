import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  Firstname: Yup.string().required("Firstname is required"),
  Lastname: Yup.string().required("Lastname is required"),
  Email: Yup.string().required("Email is required"),
  Phone: Yup.string().required("Phone is required"),
  Industry: Yup.string(),
  Socialmedia: Yup.string(),
  Followers: Yup.string(),
  Twitch: Yup.string(),
  Reddit: Yup.string(),
  Youtube: Yup.string(),
  Tiktok: Yup.string(),
  Instagram: Yup.string(),
});

export const initialValues = {
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
