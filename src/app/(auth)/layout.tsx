import Image from "next/image";

import React from "react";

import "./layout.scss";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="auth-layout">
      <div className="auth-layout__image-section">
        <Image
          src="/auth-bg.png"
          alt="Auth background image"
          fill
          priority
          className="auth-layout__image"
          sizes="40vw"
        />
      </div>

      <Image
        src="/logo-black.png"
        alt="Logo"
        width={133}
        height={24}
        priority
        className="auth-layout__mobile-logo"
      />

      {children}
    </section>
  );
}
