"use client";

import AuthGuard from "./AuthGuard";

export default function HomePage() {
  return (
    <AuthGuard>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <p>Hello World</p>
      </div>
    </AuthGuard>
  );
}
