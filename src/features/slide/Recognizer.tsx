import React from "react";
import { CurrentSlideManager } from "../../recoil/currentSlide";
import { SlideItem } from "../../types";

export const Recognizer = (props: { item: SlideItem }) => {
  if (props.item.type === "text")
    return (
      <textarea
        value={props.item.content}
        onChange={(event) =>
          CurrentSlideManager.updateSlide((prev) => ({
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
      />
    );
  // 現在はtextタイプのみ実装されており、他のタイプ(image等)実装の際は対応必要
  throw new Error("Invalid type");
};
