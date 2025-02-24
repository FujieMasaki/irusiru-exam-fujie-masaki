import React from "react";
import { currentSlideManager } from "../../recoil/currentSlide";
import { SlideItem } from "../../types";
export const Recognizer = (props: { item: SlideItem }) => {
  if (props.item.type === "text")
    return (
      <textarea
        onChange={(event) =>
          currentSlideManager.updateSlide((prev) => ({
            ...prev,
            items: prev.items.map((item) =>
              item.id === props.item.id
                ? {
                    ...item,
                    content: event.target.value,
                  }
                : item
            ),
          }))
        }
      >
        {props.item.content}
      </textarea>
    );
  throw new Error("Invalid type");
};
