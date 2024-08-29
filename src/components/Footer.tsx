import { LangContext } from "@contexts/LangContext";
import { useContext } from "react";

export const Footer = () => {
  const { lang } = useContext(LangContext);
  return (
    <div className="mt-3">
      <p className="text-secondary text-center">
        {lang.footer}
      </p>
    </div>
  );
};
