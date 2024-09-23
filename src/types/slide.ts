export type TextItem = {
    id: string,
    type: "text",
    content: string,
    color: "black",
    fontSize: number,
    textAlign: "center" | "left" | "right",
    fontFamily: "Arial",
    fontWeight: "normal" | "bold",
    fontStyle: "normal" | "italic",
    textDecoration: "none",
    lineHeight: number,
    letterSpacing: number,
    opacity: number,
    backgroundColor: string,
    borderColor: string,
}

export type SlideItem = TextItem

export type Slide = {
    items: SlideItem[],
    version: number
}