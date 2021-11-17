import { useField } from "formik";

export const MyInputArea = (props) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 w-full px-6 mb-3 rounded">
      <label
        htmlFor={props.name}
        className="text-appYellow-100 flex items-center"
      >
        {props.label}*
      </label>
      <input
        className="h-10 w-full bg-transparent rounded pl-4 border outline-none"
        id="message"
        {...field}
        {...props}
        style={{
          backgroundColor: "#05080F",
          color: "grey",
          borderColor: "#3B3F49",
        }}
      />
      {meta.touched && meta.error ? (
        <p className="text-xs md:sm lg:base text-red-500 mt-1">{meta.error}</p>
      ) : null}
    </div>
  );
};
