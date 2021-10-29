import { Formik, Form } from "formik";

import {
  MyInputArea,
  MySelectArea,
  signupFormSchema,
  SignupInitialValues,
} from "./AuthformUtils";

const values = [
  {
    id: "0",
    value: "",
    label: "Sign up as",
  },
  {
    id: "1",
    value: "Influecer",
    label: "Influencer",
  },
  {
    id: "2",
    value: "Subscriber",
    label: "Subscriber",
  },
];

const SignupForm = () => {
  return (
    <Formik
      initialValues={SignupInitialValues}
      validationSchema={signupFormSchema}
      onSubmit={() => console.log("")}
    >
      <Form>
        <MyInputArea
          label="Email Address"
          name="email"
          type="text"
          placeholder="Email"
        />
        <MyInputArea
          label="Password"
          name="password"
          type="password"
          placeholder="Password"
        />
        <MySelectArea name="Type" values={values} />
        <div className="flex justify-center mt-8">
          <button
            className="h-12 w-36 flex items-center justify-center rounded text-black bg-appYellow-100 hover:bg-opacity-50 transition-all cursor-pointer"
            type="submit"
          >
            <span className="mr-2">SIGN UP</span>
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default SignupForm;
