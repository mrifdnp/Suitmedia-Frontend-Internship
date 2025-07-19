import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";

const ScrollRestoration = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      // Save the current scroll position before navigating
      setScrollPos(window.scrollY);
    };

    const handleRouteChangeComplete = () => {
      // Restore the scroll position after navigation is complete
      window.scrollTo(0, scrollPos);
    };

    // Subscribe to the events
    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    // Cleanup event listeners
    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router.events, scrollPos]);

  return <>{children}</>;
};

export default ScrollRestoration;
