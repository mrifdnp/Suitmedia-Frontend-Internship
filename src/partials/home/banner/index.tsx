"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";

export default function HomeBanner() {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

   useLayoutEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          if (imageRef.current) {
            const scale = 1 + scrollY / 5000;
            imageRef.current.style.transform = `translateY(${scrollY * 0.1}px) scale(${scale})`;
          }
          if (textRef.current) {
            textRef.current.style.transform = `translateY(${scrollY * 0.6}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative h-screen w-screen overflow-hidden flex items-center justify-center"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 75%, 0% 100%)",
      }}
    >
      <div
        ref={imageRef}
        className="absolute inset-0"
        style={{ willChange: "transform" }}
      >
        <Image
          src="/images/banner.jpg"
          alt="Home Banner"
          fill
          priority
          className="object-cover brightness-50"
          sizes="100vw"
        />
      </div>

      <div
        ref={textRef}
        className="relative z-10 text-center text-slate-50 px-4"
        style={{ willChange: "transform" }}
      >
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold">Ideas</div>
        <div className="mt-4 text-base md:text-lg font-medium">
          Where all our great things begin
        </div>
      </div>
    </div>
  );
}
