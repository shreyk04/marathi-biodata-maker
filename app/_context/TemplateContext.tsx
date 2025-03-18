"use client";

import { createContext, ReactElement, useContext, useEffect, useState } from "react";
import { Templates } from "../data";

interface TemplateContextType {
    selectedId: any;
    setSelectedId: (id: any) => void;
    backgroundImageSrc: any;
    setBackgroundImageSrc: (src: any) => void;
    selectedTemplate: any;
}

const TemplateContext = createContext<TemplateContextType | undefined>(undefined);

export const TemplateProvider = ({ children }: { children: ReactElement }) => {
    const [selectedId, setSelectedId] = useState(() => {
        if (typeof window !== "undefined") {
            return JSON.parse(localStorage.getItem("selectedTemplateId") || "null");
        }
        return null;
    });

    const [backgroundImageSrc, setBackgroundImageSrc] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("selectedTemplateId", JSON.stringify(selectedId));
        }
    }, [selectedId]);

    const selectedTemplate = Templates.find((template) => template.id === selectedId);

    return (
        <TemplateContext.Provider
            value={{ selectedId, setSelectedId, backgroundImageSrc, setBackgroundImageSrc, selectedTemplate }}
        >
            {children}
        </TemplateContext.Provider>
    );
};

export const useTemplate = () => {
    const context = useContext(TemplateContext);
    if (!context) {
        throw new Error("useTemplate must be used within a TemplateProvider");
    }
    return context;
};
