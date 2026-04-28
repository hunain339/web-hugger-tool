import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useSpring(cursorX, { damping: 20, stiffness: 250, mass: 0.4 });
  const ringY = useSpring(cursorY, { damping: 20, stiffness: 250, mass: 0.4 });

  useEffect(() => {
    // Disable on touch devices / small screens
    const isTouch =
      window.matchMedia("(pointer: coarse)").matches ||
      window.innerWidth < 768;
    if (isTouch) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setHidden(false);
    };
    const leave = () => setHidden(true);
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [role='button'], input, textarea, select, [data-cursor='hover']")) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    document.body.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.body.removeEventListener("mouseleave", leave);
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        style={{ x: cursorX, y: cursorY, opacity: hidden ? 0 : 1 }}
        className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      >
        <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
      </motion.div>
      <motion.div
        aria-hidden
        style={{ x: ringX, y: ringY, opacity: hidden ? 0 : 1 }}
        animate={{ scale: hovering ? 1.8 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      >
        <div
          className={`w-9 h-9 rounded-full border transition-colors duration-200 ${
            hovering
              ? "border-primary/80 bg-primary/10 backdrop-blur-sm"
              : "border-primary/50"
          }`}
        />
      </motion.div>
      <style>{`
        @media (pointer: fine) and (min-width: 768px) {
          body, a, button { cursor: none !important; }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
