import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
type RevealProps = {
  children: ReactNode;
};
export default function Reveal({ children }: RevealProps) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const options = { threshold: 0.2 };
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShow(true);
        obs.disconnect();
      }
    }, options);

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fade-start ${show && "fade-show"} relative`}>
      {children}
    </div>
  );
}
