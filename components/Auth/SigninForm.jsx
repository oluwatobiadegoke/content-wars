import Link from "next/link";
import { Formik, Form } from "formik";

import { MyInputArea, formSchema, initialValues } from "./AuthformUtils";

const SigninForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={formSchema}
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
        <div className="flex justify-end mb-8 mt-4">
          <Link href="/">
            <a className="text-appYellow-100">Forgot Password?</a>
          </Link>
        </div>
        <div className="flex justify-center">
          <button
            className="h-12 w-36 flex items-center justify-center rounded text-black bg-appYellow-100 hover:bg-opacity-50 transition-all cursor-pointer"
            type="submit"
          >
            <span>LOGIN</span>
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default SigninForm;
