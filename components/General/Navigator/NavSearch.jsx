import Image from "next/image";
import { useField, Formik, Form } from "formik";
import * as Yup from "yup";

const MyInputArea = (props) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex items-center w-72 h-12 bg-black rounded mr-16">
      <label htmlFor={props.name} className="mx-3 h-full flex items-center">
        <Image
          src="/../public/search.svg"
          height="20"
          width="20"
          alt="search"
        />
      </label>
      <input
        className="h-full w-full bg-black rounded-r placeholder-white"
        id="message"
        {...field}
        {...props}
      />
      {/* {meta.touched && meta.error ? (
        <p className="text-xs md:sm lg:base text-red-500 mt-1">{meta.error}</p>
      ) : null} */}
    </div>
  );
};

const NavSearch = () => {
  return (
    <Formik
      initialValues={{ search: "" }}
      validationSchema={Yup.object().shape({
        search: Yup.string().required("Input field is empty"),
      })}
      onSubmit={() => console.log("")}
    >
      <Form>
        <MyInputArea name="search" type="text" placeholder="Search" />
      </Form>
    </Formik>
  );
};

export default NavSearch;
