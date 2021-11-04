import { useField, Formik, Form } from "formik";
import * as Yup from "yup";

const MyInputArea = (props) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex items-center w-full h-10 bg-transparent rounded px-4">
      <input
        className="h-full w-full pl-14 text-sm bg-transparent rounded-r placeholder-white border border-lightGrey-100 rounded"
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

const CommentInput = () => {
  return (
    <Formik
      initialValues={{ comment: "" }}
      validationSchema={Yup.object().shape({
        comment: Yup.string().required("Input field is empty"),
      })}
      onSubmit={() => console.log("")}
    >
      <Form>
        <MyInputArea name="comment" type="text" placeholder="Add a comment" />
      </Form>
    </Formik>
  );
};

export default CommentInput;
