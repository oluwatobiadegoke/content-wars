import Link from "next/link";
import { useRouter } from "next/router";
import { Formik, Form } from "formik";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

import { MyInputArea, formSchema, initialValues } from "./AuthformUtils";
import { auth } from "../../firebase";

const SigninForm = () => {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={formSchema}
      onSubmit={(values) => {
        const { email, password } = values;
        try {
          signInWithEmailAndPassword(auth, email, password);
          if (user) {
            router.push("/app");
            toast.success("Login successful.", {
              theme: "dark",
              autoClose: 2000,
            });
          }
        } catch (error) {
          console.log(error);
          toast.error("Login failed", { theme: "dark", autoClose: 5000 });
        }
      }}
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
            disabled={loading}
          >
            <span>{loading ? "LOGGING IN..." : "LOGIN"}</span>
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default SigninForm;
