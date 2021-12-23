import { useField } from "formik";
import * as Yup from "yup";

export const initialValues = {
  email: "",
  password: "",
};
export const SignupInitialValues = {
  email: "",
  password: "",
  type: "",
};

export const formSchema = Yup.object().shape({
  password: Yup.string()
    .min(5, "Too Short!")
    .max(15, "Too Long!")
    .required("Password cannot be empty"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email cannot be empty."),
});
export const signupFormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email cannot be empty."),
  password: Yup.string()
    .min(5, "Too Short!")
    .max(15, "Too Long!")
    .required("Password cannot be empty"),
  type: Yup.string().required("Account type is required!"),
});

export const MyInputArea = (props) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col mt-8 w-full">
      <input
        className={`px-5 rounded w-full bg-white h-12 ring-1 ring-gray-300 border-none outline-none ${
          meta.error && "ring-2 ring-red-500"
        }`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <p className="text-xs md:sm lg:base text-red-500 mt-1">{meta.error}</p>
      ) : null}
    </div>
  );
};

// FIX VALIDATION ISSUES
export const MySelectArea = (props) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col mt-8 w-full">
      <select
        name={props.name}
        className="h-12 rounded w-full px-5 cursor-pointer"
        {...field}
        value={field?.value?.type}
      >
        {props.values.map((value) => (
          <option key={value.id} value={value.value} label={value.label} />
        ))}
      </select>
      {meta.touched && meta.error ? (
        <p className="text-xs md:sm lg:base text-red-500 mt-1">{meta.error}</p>
      ) : null}
    </div>
  );
};
