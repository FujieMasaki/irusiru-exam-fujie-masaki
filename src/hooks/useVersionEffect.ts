import { useRecoilValue } from "recoil";
import { currentSlide, currentSlideManager } from "../recoil/currentSlide";
import { useEffect } from "react";

export const useVersionEffect = () => {
  const _currentSlide = useRecoilValue(currentSlide);

  const handleSetVersion = () =>
    currentSlideManager.updateSlide((prev) => ({
      ...prev,
      version: prev.version + 1,
    }));

  useEffect(() => {
    if (_currentSlide.items.length > 0) {
      handleSetVersion();
    }
  }, []);

  return null;
};
