export const scrollElementTo = (
  direction: "right" | "left",
  element: HTMLDivElement,
  pixelAmount: number
) => {
  const newScrollLeftAmount =
    direction === "right"
      ? element.scrollLeft + pixelAmount
      : element.scrollLeft - pixelAmount;
  element.scroll({
    left: newScrollLeftAmount,
    behavior: "smooth"
  });
};
