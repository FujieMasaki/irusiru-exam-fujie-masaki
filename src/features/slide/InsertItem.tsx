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

    return (
        <div>
            <button onClick={insertText}>
                Insert Feature Text
            </button>
        </div>
    )
}