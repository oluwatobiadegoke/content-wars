const Alert = ({ type, message }) => {
  return (
    <div
      className={`rounded mb-2 py-1 px-4 h-10 flex items-center justify-center text-sm lg:text-base text-white ${
        type === "success" ? " bg-green-500 " : "bg-red-500"
      }`}
    >
      <p>{message}</p>
    </div>
  );
};

export default Alert;
