import React from 'react';
import { itemFactory } from '../../mock/slideItemFactory';
import { CurrentSlideManager } from '../../recoil/currentSlide';
export const InsertItem = () => {
    const insertText = () => {
        const text = itemFactory("text", { content: "Hello World from Feature" })
        console.log("Inserting text from feature branch");
        CurrentSlideManager.set((slide) => {
            return {
                ...slide,
                items: [
                    ...slide.items,
                    text
                ]
            }
        })
    }

    const insertImage = () => {
        const image = itemFactory("image", { src: "image_url" })
        CurrentSlideManager.set((slide) => {
            return {
                ...slide,
                items: [
                    ...slide.items,
                    image
                ]
            }
        })
    }

    return (
        <div>
            <button onClick={insertText}>
                Insert Feature Text
            </button>
            <button onClick={insertImage}>
                Insert Image
            </button>
        </div>
    )
}