import locomotiveScroll from "locomotive-scroll";
import "../Styles/Locoscroll/locomotive-scroll.css";
import { useEffect } from "react";

export default function useLocoScroll(start) {
  useEffect(() => {
    if (!start) return;

    const scrollEl = document.querySelector("#appContainer");

    const locoScroll = new locomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: "is-reveal",
    });
  }, [start]);
}
