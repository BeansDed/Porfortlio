"use client";

import { useEffect } from "react";

export default function ScrollProgress() {
  useEffect(() => {
    let frame = 0;
    const update = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty(
        "--page-progress",
        (available > 0 ? window.scrollY / available : 0).toFixed(4),
      );
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <div className="page-progress" aria-hidden="true" />;
}
