"use client"

import { createContext, Dispatch, ReactElement, SetStateAction, useContext, useEffect, useState } from "react";

interface TemplateContextType {
    selectedId: any,
    setSelectedId: any
}

export const TemplateContext = createContext<TemplateContextType | undefined>(undefined);



export const TemplateProvider = ({ children }: { children: ReactElement }) => {
    const [selectedId, setSelectedId] = useState()



    return (
        <TemplateContext.Provider value={{ selectedId, setSelectedId }}>
            {children}
        </TemplateContext.Provider>
    )
}

export const useTemplate = () => useContext(TemplateContext) as { selectedId: any, setSelectedId: any };

