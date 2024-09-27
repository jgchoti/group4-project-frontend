import React, { useState } from "react";
import Api from "../Api";
import "./UploadImage.jsx";

const UploadImage = ({ token, handleImageUpload }) => {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState("");

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!image) return; // Do nothing if no image is selected
    setUploading(true);

    const formData = new FormData();
    formData.append("image", image);

    try {
      const result = await Api("upload/image", "POST", formData, token);
      setUploading(false);
      setUploadMessage("Upload successful!");
      console.log("Uploaded Image URL:", result.imageUrl);
      handleImageUpload(result.imageUrl);
    } catch (error) {
      setUploading(false);
      setUploadMessage("Upload failed.");
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="input-field">
      <h3>Upload Book Image</h3>
      <input type="file" onChange={handleFileChange} />
      {previewUrl && (
        <img src={previewUrl} alt="Preview" style={{ width: "200px" }} />
      )}
      <button
        type="button"
        onClick={handleUpload}
        disabled={!image || uploading}
        className="button"
      >
        {uploading ? "Uploading..." : "Upload Image"}
      </button>
      {uploadMessage && <p>{uploadMessage}</p>}
    </div>
  );
};

export default UploadImage;
