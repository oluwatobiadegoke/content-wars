import { useState } from "react";
import { useRouter } from "next/router";
import { Formik, Form } from "formik";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";

import {
  MyInputArea,
  MySelectArea,
  signupFormSchema,
  SignupInitialValues,
} from "./AuthformUtils";
import { db, auth } from "../../firebase";

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
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  return (
    <Formik
      initialValues={SignupInitialValues}
      validationSchema={signupFormSchema}
      onSubmit={async (values, action) => {
        const { email, password, type } = values;
        setLoading(true);
        try {
          const response = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          try {
            const userRef = collection(db, "users");
            const res = await addDoc(userRef, {
              email,
              type,
            });
            router.push("/signin");
            toast.success(
              "Registration successful. Kindly login with your account details.",
              { theme: "dark", autoClose: false }
            );
          } catch (err) {
            console.log(err);
            toast.error("Registration failed", { theme: "dark" });
          }
        } catch (error) {
          console.log(error);
          toast.error("Registration failed", { theme: "dark" });
        } finally {
          setLoading(false);
        }
      }}
    >
      <Form>
        <MyInputArea
          label="Email Address"
          name="email"
          id="email"
          type="text"
          placeholder="Email"
        />
        <MyInputArea
          label="Password"
          name="password"
          id="password"
          type="password"
          placeholder="Password"
        />
        <MySelectArea name="type" id="type" values={values} />
        <div className="flex justify-center mt-8">
          <button
            className={`h-12 w-36 flex items-center justify-center rounded text-black bg-appYellow-100 hover:bg-opacity-50 transition-all cursor-pointer disabled:opacity-50 ${
              loading && "cursor-not-allowed"
            } `}
            type="submit"
            disabled={loading}
          >
            <span className="mr-2">SIGN UP</span>
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default SignupForm;
