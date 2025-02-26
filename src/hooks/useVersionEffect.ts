import { CurrentSlideManager } from "../recoil/currentSlide";
import { useEffect } from "react";

export const useVersionEffect = () => {
  const handleSetVersion = () =>
    CurrentSlideManager.updateSlide((prev) => ({
      ...prev,
      version: prev.version + 1,
    }));

  useEffect(() => {
    handleSetVersion();
  }, []);

  return null;
};
