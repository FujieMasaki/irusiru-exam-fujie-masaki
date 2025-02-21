import { useRecoilValue } from "recoil";
import { currentSlide, CurrentSlideManager } from "../recoil/currentSlide";
import { useEffect } from "react";

export const useVersionEffect = () => {
  const _currentSlide = useRecoilValue(currentSlide);

  const handleSetVersion = () =>
    CurrentSlideManager.aaa((prev) => ({
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
