

export const getSavedFormData = () => {
    if (typeof window === "undefined") return {}; // Return an empty object during SSR
    const formString = localStorage.getItem("form") || "{}";
    return JSON.parse(formString) || {};
};