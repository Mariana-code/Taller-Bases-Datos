import React, { useState, useEffect } from "react";
import { uploadFile, fetchImages } from "../Utils/Storage"; // Import storage functions

function ProfilePictureUpload() {
  // State variables for image upload and image URLs
  const [imageUpload, setImageUpload] = useState(null); // State for image upload
  const [imageUrls, setImageUrls] = useState([]); // State for image URLs

  // Function to handle file upload
  const handleFileUpload = () => {
    uploadFile(imageUpload, setImageUrls); // Call the uploadFile function from storage module
  };

  // Effect hook to fetch existing images from Firebase Storage when component mounts
  useEffect(() => {
    fetchImages(setImageUrls); // Call the fetchImages function from storage module
  }, []);

  // Render the component
  return (
    <div className="App">
      {/* Input field for selecting an image */}
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]); // Update the image upload state with the selected file
        }}
      />
      {/* Button to upload the selected image */}
      <button onClick={handleFileUpload}> Upload Image</button>
      {/* Render the uploaded images */}
      {imageUrls.map((url) => {
        return <img src={url} key={url} style={{ height: '200px', width: '200px' }}/>; // Render each image with a fixed height and width
      })}
    </div>
  );
}

export default ProfilePictureUpload;
