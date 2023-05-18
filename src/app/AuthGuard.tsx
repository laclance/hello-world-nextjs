"use client";

import { ReactNode, useContext } from "react";
import { useRouter } from "next/navigation";
import { authContext } from "@/AuthContext";

export default function AuthGuard({ children }: { children: ReactNode }) {
  const { loggedIn } = useContext(authContext);
  const router = useRouter();

  if (!loggedIn) {
    router.replace("/login");

    return (
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <p>Not authorized</p>
      </div>
    );
  }

  return <div>{children}</div>;
}
