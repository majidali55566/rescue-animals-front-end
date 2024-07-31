import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CloudinaryUploadAdapterPlugin from "./CloudinaryUploadAdaptor";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [bannerImage, setBannerImage] = useState(null);
  const [bannerImageUrl, setBannerImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  const navigate = useNavigate();

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      setBannerImage(file);
      uploadImageToCloudinary(file);
    },
  });

  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "animal_rescue"); // Replace with your Cloudinary upload preset

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${
          import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
        }/upload`,
        formData
      );
      setBannerImageUrl(response.data.secure_url);
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!bannerImageUrl) {
      alert("Please upload a banner image.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("metaTitle", metaTitle);
    formData.append("metaDescription", metaDescription);
    formData.append("bannerImage", bannerImageUrl);

    // Perform your API call to save the form data
    setUploading(true);
    try {
      console.log("Form submitted:", formData);
      // API call to save formData
      // await yourApiCall(formData);
      navigate("/admin");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Create Page
      </Typography>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Typography variant="h6" gutterBottom>
        Description
      </Typography>
      <CKEditor
        editor={ClassicEditor}
        config={{
          extraPlugins: [CloudinaryUploadAdapterPlugin],
        }}
        data={description}
        onChange={(event, editor) => {
          const data = editor.getData();
          setDescription(data);
        }}
      />

      <Typography variant="h6" gutterBottom>
        Upload Banner Image
      </Typography>
      <Box
        {...getRootProps()}
        sx={{
          border: "2px dashed #ccc",
          borderRadius: "4px",
          p: 2,
          textAlign: "center",
          cursor: "pointer",
          mb: 2,
        }}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <Typography variant="body1">Drop the image here...</Typography>
        ) : (
          <Typography variant="body1">
            {bannerImage
              ? bannerImage.name
              : "Drag & drop a banner image here, or click to select one"}
          </Typography>
        )}
      </Box>
      {bannerImageUrl && (
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">Banner Image Preview:</Typography>
          <img
            src={bannerImageUrl}
            alt="Banner Preview"
            style={{ maxWidth: "100%", maxHeight: "400px", objectFit: "cover" }}
          />
        </Box>
      )}
      <TextField
        label="Meta Title"
        value={metaTitle}
        onChange={(e) => setMetaTitle(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Meta Description"
        value={metaDescription}
        onChange={(e) => setMetaDescription(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" sx={{ mt: 2, color: "white" }}>
        {uploading ? <CircularProgress size={24} /> : "Create Page"}
      </Button>
    </Box>
  );
};

export default CreatePage;
