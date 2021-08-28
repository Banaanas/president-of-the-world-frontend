import * as Scroll from "react-scroll";

// React-Scroll
// (Smooth) Scroll to Element
const smoothScrollTo = (name: string) => {
  const { scroller } = Scroll;
  scroller.scrollTo(name, {
    duration: 100,
    delay: 0,
    smooth: true,
    offset: -50, // Scroll to element + / - X pixels down/up the page
  });
};

// Name of the scroll reference
export const rankingSection = "ranking-section";

export default smoothScrollTo;
