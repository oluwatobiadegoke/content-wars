import Image from "next/image";
import { useRef, useEffect } from "react";
import { useField, Formik, Form } from "formik";
import * as Yup from "yup";

const MyInputArea = (props) => {
  const { setFilteredInfluencers, allInfluencers } = props;
  const ref = useRef();

  const [field, meta] = useField(props);

  useEffect(() => {
    const filteredInfluencers = allInfluencers.filter((influencer) =>
      influencer.name.toLowerCase().includes(field.value.toLowerCase())
    );
    setFilteredInfluencers(filteredInfluencers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [field.value]);

  return (
    <div className="flex items-center gap-3 w-full h-10 bg-transparent rounded">
      <input
        className={`h-full w-full pl-4 text-sm outline-none border-none bg-transparent rounded-r placeholder-white rounded`}
        id="message"
        {...field}
        {...props}
        placeholder={
          meta.touched && meta.error ? meta.error : "Select an influencer"
        }
        ref={ref}
      />
      <label
        htmlFor={props.name}
        className="h-full flex items-center cursor-pointer"
        onClick={() => ref.current.focus()}
      >
        <Image
          src="/../public/search.svg"
          height="20"
          width="20"
          alt="search"
        />
      </label>
    </div>
  );
};

const InfluencerSearch = ({ allInfluencers, setFilteredInfluencers }) => {
  return (
    <div className="flex items-center border-b border-lightGrey-100 gap-4 mb-5">
      <div className="flex-1">
        <Formik
          initialValues={{ search: "" }}
          validationSchema={Yup.object().shape({
            search: Yup.string().required("Search for an influencer"),
          })}
        >
          <Form>
            <MyInputArea
              name="search"
              type="text"
              setFilteredInfluencers={setFilteredInfluencers}
              allInfluencers={allInfluencers}
            />
          </Form>
        </Formik>
      </div>
      <div className="flex items-center pr-4">
        <Image
          src="/../public/filter.svg"
          alt="filter"
          width={20}
          height={20}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default InfluencerSearch;
