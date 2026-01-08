import React, { useEffect, useState } from "react";
import { useImage } from "../_context/ImageContext";

function UploadPhoto() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const { imgUrl, setImgUrl } = useImage();

  // Load image from localStorage when the component mounts
  useEffect(() => {
    const savedImage = localStorage.getItem("uploadedImage");
    if (savedImage?.startsWith("data:image")) {
      setImagePreview(savedImage);
      setImgUrl(savedImage);
    }
  }, []);

  const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) return;

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile); // Convert to Base64

    reader.onloadend = () => {
      const base64String = reader.result as string;
      setImagePreview(base64String);
      setImgUrl(base64String);
      localStorage.setItem("uploadedImage", base64String);
    };
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Modern Upload Button */}
      <label className="relative flex items-center justify-center px-5 py-2 mt-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 cursor-pointer">
        <input
          type="file"
          name="file"
          accept="image/png, image/jpeg"
          onChange={handleFile}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
        <svg
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2 w-6 h-6"
        >
          <path fill="none" d="M0 0h24v24H0z" stroke="none"></path>
          <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1"></path>
          <path d="M9 15l3 -3l3 3"></path>
          <path d="M12 12l0 9"></path>
        </svg>
        Upload Photo
      </label>

      {/* Show Image Preview */}
      {imagePreview && (
        <div className="w-32 h-32 border-2 border-gray-300 rounded-lg shadow-md overflow-hidden">
          <img src={imagePreview} alt="Uploaded Preview" className="w-full h-full object-cover" />
        </div>
      )}
    </div>
  );
}

export default UploadPhoto;
