import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Formik, useField, Form } from "formik";
import * as Yup from "yup";

const values = [
  {
    id: "0",
    value: "",
    label: "Select industry",
  },
  {
    id: "1",
    value: "Beauty",
    label: "Beauty",
  },
  {
    id: "2",
    value: "Music",
    label: "Music",
  },
  {
    id: "2",
    value: "Fashion",
    label: "Fashion",
  },
];

const MySelectArea = (props) => {
  const [field, meta] = useField(props);
  return (
    <div className="w-full">
      <select
        name={props.name}
        className="w-full bg-deepGrey-100 rounded-xl h-12 px-4"
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

const Preview = ({ upload }) => {
  return (
    <Transition.Child
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <div className="inline-block w-full lg:w-1/2 overflow-hidden text-left align-middle transition-all transform bg-transparent shadow-xl  text-white">
        <Formik
          initialValues={{
            post: "",
            industry: "",
          }}
          validationSchema={Yup.object().shape({
            post: Yup.string(),
            industru: Yup.string(),
          })}
          onSubmit={() => console.log("")}
        >
          <Form>
            <div className="bg-deepGrey-100 mb-6 px-4 pt-8 pb-4 rounded-xl">
              <input
                type="text"
                className="h-14 w-full text-sm border border-lightGrey-100 px-9 bg-transparent mb-4"
                placeholder="Say something about this post"
              />
              <div>
                {upload && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={upload} alt={upload} />
                )}
              </div>
            </div>
            <MySelectArea values={values} name="industry" />

            <div className="flex justify-center mt-12">
              <button className="h-10 w-40 bg-appYellow-100 text-black text-lg rounded">
                Next
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </Transition.Child>
  );
};

export default Preview;
