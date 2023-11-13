import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "../../../component/Helper/useIsomorphicLayoutEffect.jsx";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
gsap.registerPlugin(Observer);
import horizontalLoop from "../../../component/Helper/horizontalLoop";

const onEnterImage = (e, scale = 1.2) => {
  gsap.to(e.currentTarget, {
    filter: "grayscale(0) brightness(100%)",
    scale: scale,
    duration: 0.5,
    ease: "power1.out",
    zIndex: 990,
  });
};

const onLeaveImage = (e, scale = 1) => {
  gsap.to(e.currentTarget, {
    filter: "grayscale(1) brightness(50%)",
    scale: scale,
    duration: 0.5,
    ease: "power1.out",
  });
};

export default function HeroSlider() {
  const heroAnimation0 = useRef();
  const heroAnimation1 = useRef();
  const heroAnimation2 = useRef();

  const speed = 2.5;

  useIsomorphicLayoutEffect(() => {
    window.addEventListener("load", () => {
      const ctx0 = gsap.context(() => {
        const array0 = document.querySelectorAll(
          ".hero-animation-0 .hero-animation-image"
        );

        const loop0 = horizontalLoop(array0, {
          paused: false,
          repeat: -1,
          speed: 0.5,
        });

        let tl0;

        Observer.create({
          target: window,
          type: "wheel",
          onChangeY: (self) => {
            tl0 && tl0.kill();
            const factor = self.deltaY > 0 ? 1 : -1;
            tl0 = gsap
              .timeline()
              .to(loop0, { timeScale: speed * factor, duration: 0.25 })
              .to(loop0, { timeScale: 1 * factor, duration: 1 });
          },
        });

        // array0.forEach((image) => {
        //   image.addEventListener("mouseenter", (e) => {
        //     onEnterImage(e, 1.3);
        //     gsap.to(loop0, { timeScale: 0, overwrite: true });
        //   });
        //   image.addEventListener("mouseleave", (e) => {
        //     onLeaveImage(e);
        //     gsap.to(loop0, { timeScale: 1, overwrite: true });
        //   });
        // });
      }, heroAnimation0);
      return () => ctx0.revert();
    });
  }, []);

  useIsomorphicLayoutEffect(() => {
    window.addEventListener("load", () => {
      const ctx1 = gsap.context(() => {
        const array1 = document.querySelectorAll(
          ".hero-animation-1 .hero-animation-image"
        );

        const loop1 = horizontalLoop(array1, {
          paused: false,
          repeat: -1,
          speed: 0.5,
          reversed: true,
        });

        let tl1;

        Observer.create({
          target: window,
          type: "wheel",
          onChangeY: (self) => {
            tl1 && tl1.kill();
            const factor = self.deltaY > 0 ? -1 : 1;
            tl1 = gsap
              .timeline()
              .to(loop1, { timeScale: speed * factor, duration: 0.25 })
              .to(loop1, { timeScale: 1 * factor, duration: 1 });
          },
        });

        // array1.forEach((image) => {
        //   image.addEventListener("mouseenter", (e) => {
        //     onEnterImage(e, 1.3);
        //     gsap.to(loop1, { timeScale: 0, overwrite: true });
        //   });
        //   image.addEventListener("mouseleave", (e) => {
        //     onLeaveImage(e);
        //     gsap.to(loop1, { timeScale: -1, overwrite: true });
        //   });
        // });
      }, heroAnimation1);

      return () => ctx1.revert();
    });
  }, []);

  useIsomorphicLayoutEffect(() => {
    window.addEventListener("load", () => {
      const ctx2 = gsap.context(() => {
        const array2 = document.querySelectorAll(
          ".hero-animation-2 .hero-animation-image"
        );
        const loop2 = horizontalLoop(array2, {
          paused: false,
          repeat: -1,
          speed: 0.5,
        });

        let tl2;

        Observer.create({
          target: window,
          type: "wheel",
          onChangeY: (self) => {
            tl2 && tl2.kill();
            const factor = self.deltaY > 0 ? 1 : -1;
            tl2 = gsap
              .timeline()
              .to(loop2, { timeScale: speed * factor, duration: 0.25 })
              .to(loop2, { timeScale: 1 * factor, duration: 1 });
          },
        });
        // array2.forEach((image) => {
        //   image.addEventListener("mouseenter", (e) => {
        //     onEnterImage(e, 1.3);
        //     gsap.to(loop2, { timeScale: 0, overwrite: true });
        //   });
        //   image.addEventListener("mouseleave", (e) => {
        //     onLeaveImage(e);
        //     gsap.to(loop2, { timeScale: 1, overwrite: true });
        //   });
        // });
      }, heroAnimation2);

      return () => ctx2.revert();
    });
  }, []);

  return { heroAnimation0, heroAnimation1, heroAnimation2 };
}
