import { currentSlideManager } from "../recoil/currentSlide";
import { useEffect } from "react";

export const useVersionEffect = () => {
  console.log("useVersionEffect 実行");

  const handleSetVersion = () =>
    currentSlideManager.updateSlide((prev) => ({
      ...prev,
      version: prev.version + 1,
    }));

  useEffect(() => {
    console.log("useEffect 実行");
    handleSetVersion();
  }, []);

  return null;
};
