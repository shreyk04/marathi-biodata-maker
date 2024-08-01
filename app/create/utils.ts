export const getSavedFrom = () => {
     const formString = localStorage.getItem("form") || "{}";
    const form = JSON.parse(formString);
    return form;
}