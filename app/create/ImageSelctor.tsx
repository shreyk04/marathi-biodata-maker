"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { EditIcon, PlusCircle, TrashIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const imgBaseSrc = "/images/ganapati-bappa";

function ImageSelectorModal({
  visible,
  onClose,
  images,
  handleImageClick,
}: {
  visible: boolean;
  onClose: () => void;
  images: string[];
  handleImageClick: (index: number) => void;
}) {
  return (
    <Dialog open={visible} onOpenChange={onClose}>
      <DialogContent className="md:max-w-[900px]">
        <DialogHeader>
          <DialogTitle>Select an Image</DialogTitle>
          <DialogDescription>Choose an image to update your selection.</DialogDescription>
        </DialogHeader>
        <div className="flex bg-zinc-100 justify-center items-center gap-5 p-5 rounded-sm flex-wrap">
          {images.map((image, index) => (
            <div key={index} className="flex flex-col justify-between items-center gap-4">
              <img
                src={`${imgBaseSrc}/${image}`}
                alt="ganapati-bappa"
                width={96}
                height={96}
                className="object-contain rounded-md"
              />
              <Button variant="outline" onClick={() => handleImageClick(index)}>
                <PlusCircle size={18} />
              </Button>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}


function ImageSelector({
  initialValue,
  onImgChange,
}: {
  initialValue: string;
  onImgChange: (src: string | null) => void;
}) {
  const images = [
    "h1.png",
    "h2.png",
    "h3.png",
    "h5.jpg",
    "h6.jpg",
    "8.png",
    "9.png",
    "12.png",
    "15.png",
    "16.png",
  ];
  
  const [modalVisible, setModalVisible] = useState(false);
  

const [selectedImage, setSelectedImage] = useState<string | null>(
  initialValue
);
console.log(initialValue);

  useEffect(() => {
    
    onImgChange(selectedImage);
  }, [selectedImage]);


  




  const handleEditClick = (e:any) =>{
    e.preventDefault()
    e.stopPropagation()
  
     setModalVisible(true)
    }
  const handleCloseModal = () => setModalVisible(false);

  const handleImageClick = (index: number) => {
    setSelectedImage(`${imgBaseSrc}/${images[index]}`);
    handleCloseModal();
  };

  
  const handleDelete = () => setSelectedImage(null);


  return (
    <div className="flex flex-col items-center justify-center">
      {selectedImage ? (
        <img src={selectedImage} alt="Selected" width={100} height={100} className="rounded-md" />
      ) : (
        <p className="text-gray-500">No image selected</p>
      )}
      <div className="m-4 flex gap-2">
        {selectedImage && (
          <Button variant="default" onClick={handleDelete}>
            <TrashIcon size={16} />
          </Button>
        )}
        <Button variant="default" onClick={handleEditClick}>
          <EditIcon size={16} />
        </Button>
      </div>

      <ImageSelectorModal
        visible={modalVisible}
        onClose={handleCloseModal}
        images={images}
        handleImageClick={handleImageClick}
      />
    </div>
  );
}

export default ImageSelector;
