import React, { useEffect, useState } from 'react';
import { useImage } from '../Context/ImageContext';

function UploadPhoto() {
    const [image, setImage] = useState<File | null>(null);
    const { imgUrl, setImgUrl } = useImage()
    const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0] || null;
        if (selectedFile) {
            setImage(selectedFile)

            setImgUrl(URL.createObjectURL(selectedFile))
        }

    };

    return (
        <div>


            < button className="container-btn-file">
                <svg stroke-linejoin="round" stroke-linecap="round" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h24v24H0z" stroke="none"></path>
                    <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1"></path>
                    <path d="M9 15l3 -3l3 3"></path>
                    <path d="M12 12l0 9"></path>
                </svg>
                Upload Photo
                <input
                    type="file"
                    name="file"
                    accept="image/png, image/jpeg"
                    onChange={handleFile}
                />        </button>

            {
                imgUrl && (
                    <div>
                        <img src={imgUrl} alt="Uploaded" className="uploaded-image" />
                    </div>
                )
            }
        </div >
    );
}

export default UploadPhoto;
