import React from "react";
import { itemFactory } from "../../mock/slideItemFactory";
import { currentSlideManager } from "../../recoil/currentSlide";
export const InsertItem = () => {
  const insertText = () => {
    const text = itemFactory("text", { content: "Hello World from Main" });
    currentSlideManager.updateSlide((slide) => {
      return {
        ...slide,
        items: [...slide.items, text],
      };
    });
  };

  return <button onClick={insertText}>Insert Main Text</button>;
};
