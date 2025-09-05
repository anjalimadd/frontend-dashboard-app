import React, { createContext, useState, useEffect, type ReactNode } from "react";

interface FormData {
  name: string;
  email: string;
}

interface FormContextType {
  data: FormData;
  setData: React.Dispatch<React.SetStateAction<FormData>>;
}

export const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<FormData>(() => {
    // Load from localStorage if available
    const saved = localStorage.getItem("formData");
    return saved ? JSON.parse(saved) : { name: "", email: "" };
  });

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(data));
  }, [data]);

  return (
    <FormContext.Provider value={{ data, setData }}>
      {children}
    </FormContext.Provider>
  );
};
