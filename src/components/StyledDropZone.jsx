/* eslint-disable react/prop-types */
import { useState, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import sha1 from "sha1";
const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "black",
  borderStyle: "dashed",
  backgroundColor: "white",
  color: "green",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

function StyledDropzone({
  onDrop,
  files,
  onRemove,
  cloudinaryUploadUrl,
  cloudinaryPreset,
  cloudinaryDeleteUrl,
  maxFiles = 10,
}) {
  const [uploading, setUploading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    acceptedFiles,
    fileRejections,
  } = useDropzone({
    accept: { "image/*": [] },
    maxFiles,
    onDrop: async (acceptedFiles) => {
      setUploading(true);
      const uploaded = await handleUpload(acceptedFiles);
      setUploadedFiles((prev) => [...prev, ...uploaded]);
      setUploading(false);
      if (onDrop) onDrop(uploaded);
    },
  });

  const handleUpload = async (files) => {
    const uploads = files.map(async (file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", cloudinaryPreset);

      try {
        const response = await axios.post(cloudinaryUploadUrl, formData, {
          headers: { "X-Requested-With": "XMLHttpRequest" },
        });
        return {
          url: response.data.secure_url,
          public_id: response.data.public_id,
        };
      } catch (error) {
        console.error("Error uploading to Cloudinary:", error);
        return null;
      }
    });

    return Promise.all(uploads);
  };

  const handleDelete = async (file) => {
    if (!file.public_id) {
      console.error("File does not have a public_id");
      return;
    }

    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const apiKey = import.meta.env.VITE_CLOUDINARY_API_KEY;
    const apiSecret = import.meta.env.VITE_CLOUDINARY_API_SECRET;

    console.log("Cloud Name:", cloudName);
    console.log("API Key:", apiKey);
    console.log("API Secret:", apiSecret);

    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`;

    const timestamp = new Date().getTime();
    const string = `public_id=${file.public_id}&timestamp=${timestamp}${apiSecret}`;
    const signature = sha1(string);

    const formData = new FormData();
    formData.append("public_id", file.public_id);
    formData.append("signature", signature);
    formData.append("api_key", apiKey);
    formData.append("timestamp", timestamp);

    try {
      const response = await axios.post(url, formData, {
        headers: { "X-Requested-With": "XMLHttpRequest" },
      });

      if (response.data.result === "ok") {
        setUploadedFiles((prev) =>
          prev.filter((f) => f.public_id !== file.public_id)
        );
        if (onRemove) onRemove(file);
      } else {
        console.error("Failed to delete image:", response.data);
      }
    } catch (error) {
      console.error(
        "Error deleting from Cloudinary:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  const fileList = (files || uploadedFiles).map((file, index) => (
    <div key={index} className="preview-item" style={{ position: "relative" }}>
      <img
        src={file.url}
        alt={`uploaded ${index}`}
        style={{ width: 100, height: 100, objectFit: "cover" }}
        onClick={() => setSelectedFile(file)}
      />
      {selectedFile === file && (
        <button
          onClick={() => handleDelete(file)}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "red",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            cursor: "pointer",
          }}
        >
          X
        </button>
      )}
    </div>
  ));

  const errorList = fileRejections.map(({ file, errors }) => (
    <div key={file.path}>
      {file.path} - {errors[0].message}
    </div>
  ));

  return (
    <div className="styled-drop-container d-flex flex-column gap-400">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p>Drag &apos;n&apos; drop some files here, or click to select files</p>
        {uploading && <p>Uploading...</p>}
      </div>
      <div className="preview d-flex gap-400">
        {uploading ? <p>Uploading...</p> : fileList}
      </div>
      <div className="errors">{errorList}</div>
    </div>
  );
}

export default StyledDropzone;
