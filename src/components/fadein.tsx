import { FC, MutableRefObject, ReactNode, useEffect, useRef, useState } from "react";
import styles from "@/styles/FadeIn.module.css";

type FadeInSectionProps = {
  children?: ReactNode[]|ReactNode|string;
  className?: string;
}

const FadeInSection: FC<FadeInSectionProps> = ({ children, className }) => {
  const [isVisible, setVisible] = useState<boolean>(true);
  const domRef = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
  let domRefValue: HTMLDivElement|null = null;
  const options = {
    // root: document.querySelector('#scrollArea'),
    rootMargin: '50px',
    threshold: 0.0,
  }
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Reset isVisible when the element is below the window view
        if (entry.isIntersecting || window.scrollY + window.innerHeight < domRef.current.offsetTop) {
          setVisible(entry.isIntersecting);
        }
      });
    }, options);
    observer.observe(domRef.current);
    domRefValue = domRef.current;
    // Avoid memory leak
    return () => {
      if (domRefValue) {
        observer.unobserve(domRefValue);
      }
    };
  }, []);
  return (
    <div className={`${className} ${styles.fadeInSection} ${isVisible ? styles.isVisible : ""}`} ref={domRef}>{children}</div>
  );
};

export default FadeInSection;
