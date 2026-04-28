import { useRef, ReactNode, MouseEvent, ElementType } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  as?: ElementType;
  strength?: number;
  target?: string;
  rel?: string;
  "aria-label"?: string;
}

const MagneticButton = ({
  children,
  className = "",
  href,
  onClick,
  as,
  strength = 0.35,
  ...rest
}: MagneticButtonProps) => {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 20 });
  const sy = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Comp: any = as || (href ? motion.a : motion.button);
  const extra = href ? { href } : {};

  return (
    <Comp
      ref={ref as any}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      style={{ x: sx, y: sy }}
      className={className}
      {...extra}
      {...rest}
    >
      <motion.span style={{ x: sx, y: sy, display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
        {children}
      </motion.span>
    </Comp>
  );
};

export default MagneticButton;
