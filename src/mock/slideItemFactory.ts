import { SlideItem } from "../types";
import { v4 as uuid } from "uuid";
export const itemFactory = (type: SlideItem["type"], overrides: Partial<SlideItem> = {}): SlideItem => {
    if(type === "text") return {
        id: uuid(),
        type: "text",
        content: "Hello, world!",
        color: "black",
        fontSize: 16,
        textAlign: "center",
        fontFamily: "Arial",
        fontWeight: "normal",
        fontStyle: "normal",
        textDecoration: "none",
        lineHeight: 1.5,
        letterSpacing: 0,
        opacity: 1,
        backgroundColor: "transparent",
        borderColor: "transparent",
        ...overrides
    }

    throw Error("Invalid type")
}