import { atom } from "recoil";
import { Slide } from "../types";
import { setRecoil } from "recoil-nexus";
import { isEqual } from "lodash";

export const currentSlide = atom<Slide>({
    key: "currentSlide",
    default: {
        items: [],
        version: 1
    },
});

export const CurrentSlideManager = {
    aaa: (slide: Slide | ((val: Slide) => Slide)) => setRecoil(currentSlide, prev => {
        const next = typeof slide === "function" ? slide(prev) : slide;
        if(isEqual(prev, next)) return prev;
        return next;
    })
}
