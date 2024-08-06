"use client"

import { createContext, ReactNode, useContext, useState } from "react";

interface ImageContextType {
    imgUrl: string | null;
    setImgUrl: (url: string | null) => void;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const ImageProvider = ({ children }: { children: ReactNode }) => {
    const [imgUrl, setImgUrl] = useState<string | null>(null);

    return (
        <ImageContext.Provider value={{ imgUrl, setImgUrl }}>
            {children}
        </ImageContext.Provider>
    );
};

export const useImage = () => {
    const context = useContext(ImageContext);
    if (!context) {
        throw new Error("useImage must be used within an ImageProvider");
    }
    return context;
};
