import React, { useState } from "react";
import { Modal, Image, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
function ImageSelectorModal({ visible, onClose, images, handleImageClick }) {
  const [selectedImage, setSelectedImage] = useState();
  const imageSrc = process.env.PUBLIC_URL + "/";
  const handleOk = () => {
    // Handle the logic for updating the selected image in your biodata maker
    // For example, you can pass the selectedImage to a parent component via props.
    // You can also use state management (e.g., Redux) for handling this logic.
    console.log("Selected Image:", selectedImage);
    onClose(); // Close the modal
  };
  const handleCancel = () => {
    onClose(); // Close the modal without selecting an image
  };

  return (
    <>
      <Modal
        title="Change Ganapati Bappa Photo"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps="danger"
        footer={null}
      >
        <div className="flex">
          {images.map((image, index) => (
            <div
              className="flex flex-col justify-between items-center  mr-8"
              key={index}
            >
              <img
                src={imageSrc + image}
                alt=""
                className="w-24 h-24 object-contain"
              />

              {/* <Image key={index} src={imageSrc + image} className="w-8" /> */}
              <Button
                icon={<PlusOutlined />}
                className="mt-4"
                key={index}
                onClick={() => handleImageClick(index)}
              />
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
}

export default ImageSelectorModal;
