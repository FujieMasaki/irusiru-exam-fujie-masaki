import { currentSlideManager } from "../recoil/currentSlide";
import { useEffect } from "react";

export const useVersionEffect = () => {
  const handleSetVersion = () =>
    currentSlideManager.updateSlide((prev) => ({
      ...prev,
      version: prev.version + 1,
    }));

  useEffect(() => {
    handleSetVersion();
  }, []);

  return null;
};
