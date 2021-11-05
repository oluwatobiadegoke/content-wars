import { useState, useEffect } from "react";

const UploadForm = ({ setUpload, setUploadSelected }) => {
  const [file, setFile] = useState("");

  useEffect(() => {
    if (!file) {
      setUpload(null);
      return;
    }
    setUpload(file);
    setUploadSelected(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

  return (
    <form className="w-full flex justify-center">
      <label
        htmlFor="upload"
        className="flex items-center justify-center max-w-xs w-full h-11 border-dashed border-appYellow-100 border rounded-lg cursor-pointer"
      >
        <p className="text-white">Upload</p>
        <input
          type="file"
          name="upload"
          id="upload"
          className="hidden"
          accept="image/png, image/jpeg"
          onChange={(e) => {
            if (!e.target.files || e.target.files.length === 0) {
              setFile(undefined);
              return;
            }
            setFile(e.target.files[0]);
          }}
        />
      </label>
    </form>
  );
};

export default UploadForm;
