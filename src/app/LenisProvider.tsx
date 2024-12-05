// app/ClientProvider.tsx
"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import React from "react";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function LenisProvider({ children }: Props) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.5,
        smoothWheel: true,
        wheelMultiplier: 1,
        infinite: false,
        orientation: "vertical",
        gestureOrientation: "vertical",
        touchMultiplier: 2,
        touchInertiaMultiplier: 2,
      }}
    >
      {children}
    </ReactLenis>
  );
}
