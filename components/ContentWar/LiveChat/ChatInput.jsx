import Image from "next/image";
import { useField, Formik, Form } from "formik";
import * as Yup from "yup";

const MyInputArea = (props) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex items-center w-full h-12 bg-lightGrey-100 rounded mr-0 lg:mr-16">
      <input
        className="h-full w-full pl-14 text-sm bg-lightGrey-100 rounded-r placeholder-white rounded"
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

const ChatInput = () => {
  return (
    <Formik
      initialValues={{ search: "" }}
      validationSchema={Yup.object().shape({
        search: Yup.string().required("Input field is empty"),
      })}
      onSubmit={() => console.log("")}
    >
      <Form>
        <MyInputArea name="coin" type="text" placeholder="Send a comment" />
      </Form>
    </Formik>
  );
};

export default ChatInput;
