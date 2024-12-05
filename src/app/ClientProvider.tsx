"use client";

import { Provider } from "react-redux";
import { store } from "../store";
import { ReactLenis } from "@studio-freight/react-lenis";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function ClientProvider({ children }: Props) {
  return (
    <Provider store={store}>
      <ReactLenis
        root
        options={{
          lerp: 0.1,
          duration: 1,
          smoothWheel: true,
          wheelMultiplier: 1,
          infinite: false,
          orientation: "vertical",
          gestureOrientation: "vertical",
          touchMultiplier: 1.5,
          touchInertiaMultiplier: 2,
        }}
      >
        {children}
      </ReactLenis>
    </Provider>
  );
}
