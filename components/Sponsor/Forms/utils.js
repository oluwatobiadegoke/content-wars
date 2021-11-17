import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
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
