import { Metadata } from "next";

import React from "react";

import Header from "@/components/header";
import NavPanel from "@/components/nav";

import "./layout.scss";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="protected-layout">
      <NavPanel />
      <div>
        <Header />
        {children}
      </div>
    </section>
  );
}
