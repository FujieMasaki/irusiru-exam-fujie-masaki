import React from "react";
import { itemFactory } from "../../mock/slideItemFactory";
import { CurrentSlideManager } from "../../recoil/currentSlide";
export const InsertItem = () => {
  const insertText = () => {
    const text = itemFactory("text", { content: "Hello World from Main" });
    CurrentSlideManager.updateSlide((slide) => {
      return {
        ...slide,
        items: [...slide.items, text],
      };
    });
  };

  return <button onClick={insertText}>Insert Main Text</button>;
};
