import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const cursor = useRef();
  const follow = useRef();

  useEffect(() => {
    gsap.set(cursor.current, {
      xPercent: -50,
      yPercent: -50,
      scale: 0.2,
    });

    gsap.set(follow.current, {
      xPercent: -50,
      yPercent: -50,
      scale: 1,
    });

    const ctx = gsap.context(() => {
      const xTo = gsap.quickTo(cursor.current, "x", {
        duration: 0.2,
        ease: "power2.out",
      });
      const yTo = gsap.quickTo(cursor.current, "y", {
        duration: 0.2,
        ease: "power2.out",
      });
      const xToFollow = gsap.quickTo(follow.current, "x", {
        duration: 0.6,
        ease: "power2.out",
      });
      const yToFollow = gsap.quickTo(follow.current, "y", {
        duration: 0.6,
        ease: "power2.out",
      });

      window.addEventListener("mousemove", (e) => {
        xTo(e.clientX);
        yTo(e.clientY);
        xToFollow(e.clientX);
        yToFollow(e.clientY);
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="cursor" ref={cursor}></div>
      <div className="cursor-follow" ref={follow}></div>
    </>
  );
}
