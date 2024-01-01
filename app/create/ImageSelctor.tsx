"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { EditIcon, PlusCircle, TrashIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
const imgBaseSrc = "/images/ganapati-bappa";

function ImageSelectorModal({
  visible,
  onClose,
  images,
  handleImageClick,
}: {
  visible: boolean;
  onClose: any;
  images: any[];
  handleImageClick: any;
}) {
  return (
    <>
      <Dialog open={visible} onOpenChange={() => onClose()}>
        <DialogContent className="md:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="flex w-full bg-zinc-100 justify-center items-center gap-5 p-5 rounded-sm">
            {images.map((image, index) => (
              <div
                className="flex flex-col justify-between items-center gap-4"
                key={index}
              >
                <Image
                  src={`${imgBaseSrc}/${image}`}
                  alt="ganapati-bappa"
                  width={100}
                  height={100}
                  className="w-24 h-24 object-contain"
                />

                {/* <Image key={index} src={imageSrc + image} className="w-8" /> */}
                <Button
                  variant={"outline"}
                  key={index}
                  onClick={() => handleImageClick(index)}
                >
                  <PlusCircle size={18} />
                </Button>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

function ImageSelector() {
  const images = ["h1.png", "h2.png", "h3.png", "h4.png"];
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<boolean | string>(
    `${imgBaseSrc}/h3.png`
  );

  const handleEditClick = (e: any) => {
    e.preventDefault();
    setModalVisible(true);
  };
  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleImageClick = (index: number) => {
    setSelectedImage(`${imgBaseSrc}/${images[index]}`);
    handleCloseModal();
  };

  const handleDelete = (e: any) => {
    e.preventDefault();
    setSelectedImage(false);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {selectedImage && (
        <>
          <Image
            src={selectedImage as string}
            alt=""
            height={100}
            width={100}
            className="w-24"
          />
        </>
      )}
      <div className="m-4 ">
        <div className="flex gap-2">
          {selectedImage && (
            <Button variant={"default"} onClick={handleDelete}>
              <TrashIcon size={16} />
            </Button>
          )}
          <Button variant={"default"} onClick={handleEditClick}>
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
    </div>
  );
}

export default ImageSelector;
