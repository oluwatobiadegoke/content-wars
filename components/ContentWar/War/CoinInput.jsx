import Image from "next/image";
import { useField, Formik, Form } from "formik";
import * as Yup from "yup";

const MyInputArea = (props) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex items-center w-52 lg:w-36 h-8 border-b-2 border-appYellow-100 text-xs italic">
      <input
        className="h-full w-full bg-transparent"
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

const CoinAmount = () => {
  return (
    <Formik
      initialValues={{ search: "" }}
      validationSchema={Yup.object().shape({
        search: Yup.string().required("Input field is empty"),
      })}
      onSubmit={() => console.log("")}
    >
      <Form>
        <MyInputArea
          name="coin"
          type="text"
          placeholder="Type amount of coins"
        />
      </Form>
    </Formik>
  );
};

const CoinInput = () => {
  return (
    <div className="h-14 bg-lightGrey-100 flex gap-4 justify-end items-center pr-5 rounded">
      <CoinAmount />
      <div>
        <button>
          <Image src="/../public/heart.svg" alt="" height={24} width={24} />
        </button>
      </div>
    </div>
  );
};

export default CoinInput;
