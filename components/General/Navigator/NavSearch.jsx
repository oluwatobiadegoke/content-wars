import Image from "next/image";
import { useField, Formik, Form } from "formik";
import * as Yup from "yup";

const MyInputArea = (props) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col mt-8 w-full">
      <label htmlFor={props.name}>
        <Image
          src="/../public/search.svg"
          height="20"
          width="20"
          alt="search"
        />
      </label>
      <input className="" id="message" {...field} {...props} />
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
