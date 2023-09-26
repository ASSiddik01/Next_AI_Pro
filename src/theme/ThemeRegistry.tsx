"use client";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { Space_Grotesk } from "next/font/google";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";

const gFont = Space_Grotesk({
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

const themeOptions: ThemeOptions = {
  typography: {
    fontSize: 12,
    fontFamily: gFont.style.fontFamily,
    allVariants: {
      fontWeight: 400,
    },
  },
  palette: {
    // background: {
    //   default: "#000000",
    // },
    // primary: {
    //   main: "#ddd",
    // },
    // text: {
    //   primary: "#ffffff",
    // },
  },
};

const theme = createTheme(themeOptions);

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
