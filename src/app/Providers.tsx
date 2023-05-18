"use client";

import { ReactNode } from "react";
import AuthContextProvider from "@/AuthContext";

export default function Providers({ children }: { children: ReactNode }) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}
