import { atom } from "recoil";
import { Slide } from "../types";
import { setRecoil } from "recoil-nexus";

export const currentSlide = atom<Slide>({
    key: "currentSlide",
    default: {
        items: [],
        version: 1
    },
});

export const CurrentSlideManager = {
    set: (slide: Slide | ((val: Slide) => Slide)) => {
        setRecoil(currentSlide, slide)
    },
}