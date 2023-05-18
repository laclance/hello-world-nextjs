"use client";

import { useContext } from "react";
import { authContext } from "@/AuthContext";

export default function LoginPage() {
  const { login } = useContext(authContext);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={login}>Login</button>
    </div>
  );
}
